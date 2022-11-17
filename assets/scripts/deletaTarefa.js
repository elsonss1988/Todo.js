
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

    export default BotaoDeleta;
