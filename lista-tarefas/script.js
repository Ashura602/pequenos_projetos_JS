function escopo() {
    const ul = document.querySelector('ul')
    const input = document.querySelector('input')
    const butAdicionarItem = document.querySelector('#adicionar'); 
    let listaButs = Object.values(document.querySelectorAll('button'));

    //adiciona os itens a partir do valor recebido do input
    const AdiconarItem=()=>{ 
        //verifica se o valor do input existe, ou seja, não é nulo(evita tarefas vazias)
        if(input.value){
            //já adiciona o Li formatado na ul do html
            ul.appendChild(formatLi(input.value))
            //roda a função de salvar sempre que adicionar o item
            salvarTarefas()
        }else{
            //caso o input esteja vazio
            alert("precisa colocar algo na tarefa");}
        }

    //pega todos os textos das tarefas salvas no local storage da pagina e converte para uma array e adiciona ao ul do html
    function adiconarTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas)
        console.log(listaDeTarefas)
        for (const item of listaDeTarefas) {
            ul.appendChild(formatLi(item))
        }
    }

    //cria e formata o Li com o botão incluso
    function formatLi(text) {
        const li = document.createElement('li');
        li.innerText = text
        li.appendChild(adicionarBut())
        return li
    }
    //cria e formata o botão
    function adicionarBut() {
        const but = document.createElement('button')
        but.innerText = 'apagar'
        but.title = 'Apagar esta tarefa'
        return but
    }

    //remove as li correspondente ao elemento pai do botão que for clicado, pois os botões são criado dentro do Li, ou seja, o Li é o elemento pai
    const removeItem=(indice)=>{ listaButs[indice].parentElement.remove();salvarTarefas()};

    // Pega os textos de cada Li dentro da ul do section e guarda numa array que é convertida para uma string em JSON que é guardada no local storage da pagina como "tarefas".
    function salvarTarefas() {
        const listaTarefas = document.querySelectorAll('li')
        const listaDeTarefas = [];
        //coloca e formata cada texto dentro da array
        for (const tarefa of listaTarefas) {
            let tarefaTexto = tarefa.innerText
            tarefaTexto = tarefaTexto.replace('apagar','')
            listaDeTarefas.push(tarefaTexto)
        }
        //converte a array para uma string JSON e salva no local storage
        const tarefasJSON = JSON.stringify(listaDeTarefas)
        localStorage.setItem('tarefas',tarefasJSON) 
    }
    //chama a funão de adicionar as tarefas
    adiconarTarefasSalvas()

    //adiciona um evento de keypress para quando a tecla "Enter" for apertada
    input.addEventListener("keypress",(e)=>{
        //roda o adicionarItem e limpa o input quando apertar a tecla enter
        if (e.key === 'Enter') {
            AdiconarItem()
            input.value = '';
        }
    })

    //cria um evento de click para TODA a pagina
    document.addEventListener("click",(e)=>{
        //variavel que recebe o valor de onde foi clicado
        const el = e.target
        //lista node de botões do html transformada em um array padrão 
        listaButs = Object.values(document.querySelectorAll('button'));
        listaButs.shift()
        let indice = 0;
        
        if (el === butAdicionarItem) {
            AdiconarItem()
        }
        //para caso o elemento clicado da pagina seja igual a um valor que esta dentro da lista de botões, ele vai receber o indice desse botão e colocar na variavel indice para remover o elemento pai do respectivo botão
        if (el  === listaButs[listaButs.indexOf(el)]) {
            indice = listaButs.indexOf(el)
            removeItem(indice)
        }
    })
     
}
escopo()