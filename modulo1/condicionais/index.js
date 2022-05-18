//EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

//1. Leia o código abaixo:

//const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

//a) Explique o que o código faz. Qual o teste que ele realiza? 
// O código testa se o número digitado pelo usuário é par (resto da divisão por 2 = 0).

//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//Para númeoros pares.

//c) Para que tipos de números a mensagem é "Não passou no teste"?
//Impares.

//2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

//a) Para que serve o código acima?
//Para precificar frutas.

//b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//'O preço da fruta maçã é 2.25'

//c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//'O preço da fruta Pêra é 5'.Pois continou "rodando".

//3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//     console.log("Esse número passou no teste")
//       let mensagem = "Essa mensagem é secreta!!!"
//   }
  
//   console.log(mensagem)

//a) O que a primeira linha está fazendo?
//É uma variável que solicita ao usuário um número e converte tal string em number.
//b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//10 - 'Esse número passou no teste'
//-10 Não aparece nada pois não tem uma variável senão (else)

//c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//Sim, pois a 'mensagem' está no escopo filho e o global/pai não tem acesso

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

//1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

//b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// let idadeUsuario = Number(prompt("Qual sua idade?"))

//     if (idadeUsuario >=18){
//         console.log('Você pode dirigir.')
//     } else {
//         console.log("Você não pode dirigir.")
//     }

//2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar **M** (matutino) ou **V** (Vespertino) ou **N** (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco `if/else`

//     let turnoDeEstudos = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para Noturno")

//    function Mensagem(turno){
//        if(turno === 'M'){
//     return `Bom dia!`
//         }
//         else if(turno === 'V'){
//             return 'Boa tarde!'
//         }
//         else if (turno === 'N') {
//             return 'Boa noite!'
//         }
//         }

//     console.log(Mensagem(turnoDeEstudos))

    //3.Repita o exercício anterior, mas utilizando a estrutura de switch case agora
   
    // let turnoDeEstudos  = prompt("Em qual turno você estuda? Digite M para matutino, V para vespertino ou N para Noturno")

    // switch (turnoDeEstudos){
    //     case 'M':
    //         console.log('Bom dia!')
    //         break
    //     case 'V':
    //         console.log('Boa tarde!')
    //         break
    //     case 'N':
    //         console.log('Boa noite!')
    //         break
    //      }   

    // 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

    //  function assisteFilme(genero, preco){
    //      genero = confirm('O gênero do filme é fantasia?')
    //      preco = confirm('O ingresso está abaixo de 15 reais?')
    //      if (genero && preco){
    //          return 'Bom filme!'
    //      }
    //      else{
    //          return 'Escolha outro filme :('
    //      }
    //  }
    //  console.log(assisteFilme())

    //********************* DESAFIO ****************

    //1.Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.


    // function assisteFilme(genero, preco){
    //          genero = confirm('O gênero do filme é fantasia?')
    //          preco = confirm('O ingresso está abaixo de 15 reais?')
    //          let snack = prompt("Qual lanchinho você vai comprar?")
    //          if (genero && preco){
                
    //              console.log(`Bom filme! Aproveite seu/sua ${snack}`) 
    //          }
    //          else{
    //              return 'Escolha outro filme :('
    //          }
    //      }
    //      console.log(assisteFilme())
     
//     let generoDoFilme = prompt('Qual o gênero do filme?')
//     let precoDoIngresso = Number(prompt('Qual o valor do ingresso?'))
//     let snack = prompt("Qual lanchinho você vai comprar?")

//     function assisteFilme(genero,preco){
//      if (genero === 'fantasia' && preco < 15){
//          console.log(`Bom filme! Aproveite seu/sua ${snack}`)
//      }
//         else {
//             console.log('Escolha outro filme :(')
//         }
//     }
//    assisteFilme(generoDoFilme,precoDoIngresso)



    //2.

    // let nome = prompt('Digite seu nome completo')
    // let tipoDeJogo = prompt('Tipo de jogo: digite IN para internacional ou DO para doméstico')
    // let etapaJogo = prompt('Etapa do jogo: digite SF para semi-final, DT para decisão de terceiro lugar ou FI para final')
    // let categoriaDoJogo = Number(prompt('Digite a categoria escolhida: 1, 2 , 3 ou 4'))
    // let quantidadeIngressos = prompt('Quantos ingressos deseja comprar?')

    let nome = prompt('Digite seu nome completo')
    let tipoDeJogo = prompt(`Tipo de jogo - digite o número:
        [1] - Internacional 
        [2] - Doméstico`)
    let etapaJogo = prompt(`Etapa do jogo: digite o número:
    [1] - Final
    [2] - Semi-final
    [3] - Decisão de terceiro lugar`)
    let categoriaDoJogo = prompt('Digite a categoria escolhida: 1, 2 , 3 ou 4')
    let quantidadeIngressos = Number(prompt('Quantos ingressos deseja comprar?'))





    // function vendeIngressos(jogo,etapa,categoria,quantidade){ 
        
        function vendeIngressos(){
            console.log('---Dados da compra---')
            console.log(`Nome do cliente: ${nome}`)  
        switch(tipoDeJogo){
            case '1':
                console.log(`Tipo de jogo: Internacional`)
                break
            case '2':
                console.log(`Tipo de jogo: Nacional`)
                break
        }      
        switch(etapaJogo){
            case '1':
               console.log(`Etapa do jogo: Final`)
               break
            case '2':
               console.log(`Etapa do jogo: Semi-final`)
               break
            case '3':
               console.log(`Etapa do jogo: Decisão de terceiro lugar`)
               break
        }
              
    console.log(`Categoria: ${categoriaDoJogo}`)
    console.log(`Quantidade de ingressos: ${quantidadeIngressos}`)
    }

    console.log(vendeIngressos(nome,tipoDeJogo,etapaJogo,categoriaDoJogo))
    
    // console.log(`Quantidade de ingressos: ${quantidadeIngressos}`)
    // console.log('---Valores---')
    // console.log(`Valor do ingresso: ${    }`)
    // console.log(`Valor total: ${   }`)