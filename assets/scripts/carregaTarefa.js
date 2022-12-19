import { criaData } from "./criarData.js"
import {ordenaDatas, removeDataRepetidas} from "./datas.js"

export const carregaTarefa = () => {
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = ""

    const dataUnicas = removeDataRepetidas(tarefasCadastradas)
    ordenaDatas
    dataUnicas.forEach((dia)=>{
        // const dia= moment(tarefa.dataFormata, 'DD/MM/YYYY')
        lista.appendChild(criaData(dia))
        
    })

    console.log(tarefasCadastradas)
}