/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    //    MONTANDO O JOGO >> Essa etapa do projeto consiste em criar um programa que:
   // 1 - Imprime uma mensagem no console "Boas vindas ao jogo de Blackjack!".
   // 2 - Envia um `confirm`, perguntando ao usuário: "Quer iniciar uma nova rodada?".
   // 3 - Se o usuário responder `cancel`, imprime uma mensagem no console "O jogo acabou".
   // 4 - Se o usuário responder `Ok`, o programa deve iniciar uma nova rodada.
   // COMEÇANDO UMA RODADA:
   // A rodada consiste em sortear 2 cartas para cada jogador, definir a pontuação de cada jogador e informar o vencedor (usuário ou computador), ou empate, caso as pontuações sejam iguais.
   // 5 - Nós preparamos um método que permite sortear uma carta. **Ele já está pronto e você só precisa invocá-lo**. Cada carta sorteada é um objeto com duas propriedades: um **texto** que representa o que é escrito na carta; e um **valor** que mostra a pontuação da carta. 
   // 6 - O programa deve mostrar, no console, as cartas e pontuação de cada jogador no formato mostrado abaixo
   // "Usuário - cartas: Q♣️ 10♣️  - pontuação 20" 
   // "Computador - cartas: Q♣️ 10♣️  - pontuação 20"
   // 7 - Além disso, deve indicar o vencedor ou um empate
   // "Empate!"
   // "O usuário ganhou!"
   // "O computador ganhou!"


   console.log('Boas vindas ao jogo de Blackjack!')
   const carta = comprarCarta()
   let cartaU1 = comprarCarta()
   let cartaU2 = comprarCarta()
   let cartaC1 = comprarCarta()
   let cartaC2= comprarCarta()

   let pontuacaoU = cartaU1.valor + cartaU2.valor
   let pontuacaoC = cartaC1.valor + cartaC2.valor
  

      if(confirm('Quer iniciar uma nova rodada?')) {
         console.log(`Usuário - cartas: ${cartaU1.texto} ${cartaU2.texto} - pontuação ${pontuacaoU}`)
         console.log(`Computador - cartas: ${cartaC1.texto} ${cartaC2.texto} - pontuação ${pontuacaoC}`)
         if (pontuacaoU > pontuacaoC){
            console.log(`O usuário ganhou!`)
         }
         else if (pontuacaoU === pontuacaoC){
            console.log(`Empate!`)
         }
         else {
            console.log(`O computador ganhou!`)
         }
      } else {
         console.log('O jogo acabou.')
      }















    