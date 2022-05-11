//============== EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO =========

//1- Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array)  
// //IMPRIME: a. undefined

// array = null
// console.log('b. ', array)
// //IMPRIME: b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// // //IMPRIME: c. 11

// let i = 0
// console.log('d. ', array[i])
// //IMPRIME: d. 3 (a variável i será o item 0 da lista)

// array[i+1] = 19
// console.log('e. ', array) //acrescentou 0 19 na posição 1 da lista, a partir do i, que é a posição 0
// //IMPRIME: e.

// const valor = array[i+6]
// console.log('f. ', valor) //a variável valor será o item i da lista (que é o número 3) somado com 6
// //IMPRIME: f. 9

//==================================================================================

//2-
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?

//IMPRIME: SUBI NUM ÔNIBUS EM MIRROCOS 27

//============== EXERCÍCIOS DE ESCRITA DE CÓDIGO =========

//1- Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    // O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

    // const nomeUsuario = prompt("Qual é o seu nome?");
    // const emailUsuario = prompt("Digite seu e-mail");

    // console.log(`O e-mail ${emailUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeUsuario}`)

   // ==============================================================================

 // 2- Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    

//  const comidasFavoritas = ["churrasco", "japonesa", "lasanha", "feijoada", "hamburguer"]
    // a) Imprima no console o array completo

    // console.log(comidasFavoritas)
    
    // b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.


    // console.log(`Essas são as minhas comidas preferidas: 
    // ${"churrasco"}
    // ${"japonesa"}
    // ${"lasanha"}
    // ${"feijoada"}
    // ${"hamburguer"}`)
    
    // c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista
    
    // const comidasFavoritas = ["churrasco", "japonesa", "lasanha", "feijoada", "hamburguer"]
    // const comidaPreferidaUsuario = prompt("Qual sua comida preferida?");
    // let i = 0
    // comidasFavoritas[1]= comidaPreferidaUsuario

    //  console.log(comidasFavoritas)

   // =======================================

    // 3. Faça um programa, seguindo os passos:
    
    // a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

    // const listaDeTarefas = []
    
    // b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

    // const tarefaUsuario1 = prompt("Digite uma tarefa que precise realizar hoje. 1/3");
    // const tarefaUsuario2 = prompt("Digite uma segunda tarefa que precise realizar hoje. 2/3");
    // const tarefaUsuario3 = prompt("Digite uma terceira tarefa que precise realizar hoje. 3/3");

    // listaDeTarefas.push(tarefaUsuario1);
    // listaDeTarefas.push(tarefaUsuario2);
    // listaDeTarefas.push(tarefaUsuario3);

    
    // c) Imprima o array no console

//   console.log(listaDeTarefas)

   
    // d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    // const respostas = [tarefaUsuario1, tarefaUsuario2, tarefaUsuario3]
    //   const tarefaRealizada = prompt(`Digite o número da tarefa que você já realizou:
    //     0, 1 ou 2.
    //     0 = ${tarefaUsuario1}
    //     1 = ${tarefaUsuario2}
    //     2 = ${tarefaUsuario3}`)
    

    // e) Remova da lista o item de índice que o usuário escolheu.
    
    //    listaDeTarefas.splice(tarefaRealizada,1)

    // f) Imprima o array no console

    // console.log(listaDeTarefas);

    //========= OUTRA RESOLUÇÃO EXERCICIO 3 ======

     let listaDeTarefas = []
     listaDeTarefas[0] = prompt("Digite uma tarefa que você precisa realizar hoje");
     listaDeTarefas[1] = prompt("Digite outra tarefa que você precisa realizar hoje");
     listaDeTarefas[2] = prompt("Digite mais uma tarefa que você precisa realizar hoje");

     console.log(listaDeTarefas)

     let tarefaRealizada = prompt(`Digite o número referente à tarefa que já realizou:
     0 = ${listaDeTarefas[0]}
     1 = ${listaDeTarefas[1]}
     2 = ${listaDeTarefas[2]}`)
     listaDeTarefas.splice(tarefaRealizada, 1)
     console.log(listaDeTarefas)
     