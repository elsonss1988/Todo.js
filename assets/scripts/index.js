( () => {const newTask = document.querySelector('[data-form-button]');



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

newTask.addEventListener('click', criarTarefa)


const BotaoConclui = () =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click',concluirTarefa);

    return botaoConclui;
}

const concluirTarefa = (event) =>{
    const botaoConclui = event.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}

const BotaoDeleta= () =>{
    const botaoDeleta = document.createElement('button');
    botaoDeleta.innerText = 'deletar';
    botaoDeleta.addEventListener('click',deletarTarefa);
    botaoDeleta.classList.add('delete-button');
    botaoDeleta.innerText = 'deletar';

    return botaoDeleta;
}

const deletarTarefa = (event) =>{
    event.target.parentElement.remove();

}

})();