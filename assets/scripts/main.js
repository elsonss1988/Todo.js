import BotaoDeleta from "./deletaTarefa.js";
import BotaoConclui from "./concluiTarefa.js";


const criarTarefa = (event) =>{

    event.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const valor = input.value;
    console.log(valor);
    input.value = '';

    // const tarefa = document.querySelector('[data-task]');
    // const conteudo = `<p class="content">${valor}<p>`;
    // tarefa.innerHTML += conteudo;

     const lista = document.querySelector('[data-list]');
     const tarefa = document.createElement('li');
     tarefa.classList.add('task');
     const conteudo = `<p class="content">${valor}<p>`;
     tarefa.innerHTML += conteudo ;
     tarefa.appendChild(BotaoConclui()); 
     tarefa.appendChild(BotaoDeleta());
     lista.appendChild(tarefa);
     input.value = " "
}

const newTask = document.querySelector('[data-form-button]');

newTask.addEventListener('click', criarTarefa)



