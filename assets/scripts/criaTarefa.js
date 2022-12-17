import BotaoDeleta from "./deletaTarefa.js";
import BotaoConclui from "./concluiTarefa.js";
import dataFormat from "./datas.js";
import { carregaTarefa } from './carregaTarefa.js';

console.log(dataFormat)
let dataFormatada = dataFormat;
document.querySelector('[data-form-date').value = moment().format('YYYY-MM-DD HH:mm:ss')

// let tarefas = [];

export const handleNovoItem  = (event) =>{
    event.preventDefault(); 
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    // const lista = document.querySelector('[data-list]');
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);
    input.value = '';

    const calendario = document.querySelector('[data-form-date]')
    console.log(calendario.value);
    const data = moment(calendario.value)
    console.log(data.format('DD/MM/YYYY'))
    dataFormatada = data.format('DD/MM/YYYY')

    const dados = {
        valor,
        dataFormatada
    }

    const tarefasAtualizadas = [...tarefas, dados];
    // const criaTarefa = Tarefa(dados);
    // lista.appendChild(criaTarefa);
    // sessionStorage.setItem('tarefas', JSON.stringify(dados))
    tarefas.push(dados)
    console.log(tarefas)
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
    input.value = " "
    carregaTarefa();
}

export const Tarefa = ({ valor, dataFormatada}) =>{

    // console.log(dataFormatada)
    
    // const input = document.querySelector('[data-form-input]');
    // const valor = input.value;
    // console.log(valor);
    // input.value = '';


    // const tarefa = document.querySelector('[data-task]');
    // const conteudo = `<p class="content">${valor}<p>`;
    // tarefa.innerHTML += conteudo;

    //  const lista = document.querySelector('[data-list]');
     const tarefa = document.createElement('li');
     tarefa.classList.add('task');
     const conteudo = `<p class="content">${dataFormatada} ${valor}<p>`;
    
     tarefa.innerHTML += conteudo ;
     tarefa.appendChild(BotaoConclui()); 
     tarefa.appendChild(BotaoDeleta());
    //  lista.appendChild(tarefa);
    //  input.value = " "

     return tarefa;
}