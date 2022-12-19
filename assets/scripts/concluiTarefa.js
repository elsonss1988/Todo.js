const concluirTarefa = (atualiza,id) =>{
    console.log('concluir');
    // const botaoConclui = event.target;

    // const tarefaCompleta = botaoConclui.parentElement;

    // tarefaCompleta.classList.toggle('done');

    const tarefaCadastradas = JSON.parse(localStorage.getItem('tarefas'))
    tarefaCadastradas[id].concluida = !tarefaCadastradas[id].concluida
    localStorage.setItem('tarefas',JSON.stringify(tarefaCadastradas))
    console.log(localStorage)
    atualiza()
}

const BotaoConclui = (atualiza, id) =>{
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';
    botaoConclui.addEventListener('click',()=>concluirTarefa(atualiza,id));

    return botaoConclui;
}

export default BotaoConclui;