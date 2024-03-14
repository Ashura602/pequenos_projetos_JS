# Lista de Tarefas JS


## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The Challenge
Users should be able to:

-Add items pressing enter and the button

-Close the window and when he comes back the items will be there

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- JavaScript 
- DOM

### What I learned

I learned how to save things on local storage of web page and use things form there

```javaScript
function adiconarTarefasSalvas() {
        const tarefas = localStorage.getItem('tarefas');
        const listaDeTarefas = JSON.parse(tarefas)
        console.log(listaDeTarefas)
        for (const item of listaDeTarefas) {
            ul.appendChild(formatLi(item))
        }
    }
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
```

## Author

- Frontend Mentor - [@Ashura602](https://www.frontendmentor.io/profile/Ashura602)
- Github - [@Ashura602](https://github.com/Ashura602)
