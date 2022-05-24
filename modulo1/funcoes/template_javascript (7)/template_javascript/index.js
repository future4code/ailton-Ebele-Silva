// ===================== EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO ====================
//                        Exercício de interpretação de código

//1. Leia o código abaixo
    
    // //function minhaFuncao(variavel) {
    // 	return variavel * 5
    // // }
    
    // console.log(minhaFuncao(2))
    //console.log(minhaFuncao(10))

    
    //a) O que vai ser impresso no console? 
    //IMPRIME: 10
            // 50
    
    //b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
    //Não aparecerá nada

   // 2. Leia o código abaixo
    
    // let textoDoUsuario = prompt("Insira um texto");
    
    // const outraFuncao = function(texto) {
    // 	return texto.toLowerCase().includes("cenoura")
    // }
    
    // const resposta = outraFuncao(textoDoUsuario)
    // console.log(resposta)
    
    
    //a. Explique o que essa função faz e qual é sua utilidade
    //Transforma o texto digitado em letra minúsculas e verifica se há o string "cenoura". Caso aja, retorna true
    
   // b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
        //  i.   `Eu gosto de cenoura`  //eu gosto de cenoura true
        //  ii.  `CENOURA é bom pra vista` //cenoura é bom pra vista true
        //  iii. `Cenouras crescem na terra` //cenouras crescem na terra true


        //                           **Exercícios de escrita de código**
    //1. Escreva as funções explicadas abaixo:
        
        // a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 
        // "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
        
        // Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

        // let nome = "Ebele"
        // let idade = 34
        // let endereco = "Franca"
        // let profissao = "estudante"

        // function imprimirMensagem(){
        //         console.log(`Meu nome é ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}`)
        //     }
        //         imprimirMensagem()
        
        // b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:
       //                Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
    //    let nome = "Ebelee"
    //    let idade = 34
    //    let endereco = "Franca"
    //    let profissao = "estudante"

            // function imprimirMensagem2(string, number, string, string){
            //     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)
            // }

            // imprimirMensagem2()

            // 2. Escreva as funções explicadas abaixo:
            // a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

                // function soma(num1, num2){
                //     let resultado = num1 + num2
                //     return resultado
                // }

                // console.log(soma(2,5))

            // b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.
            
                // function maiorOuIgual(num1, num2){
                //    return num1 >= num2 
                // }
                // let comparacao = maiorOuIgual(10,30)
                // console.log(comparacao)

            // c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

                // function ePar(num1){
                //     return num1 % 2 === 0
                // }

                // let numeroPar = ePar(6)
                // console.log(numeroPar)
            
            // d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

            //     function recebeMsg(string){
            //         return `${string.length}, ${string.toUpperCase()}`
            //     }
            // console.log(recebeMsg(`Não tô entendendo nada`))

    //3. Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:
    // let numerosInserido1 = Number(prompt("Insira um número"))
    // let numerosInserido2 = Number(prompt("Insira outro número"))

  
    //     let soma = function somar(num1,num2){
    //         return numerosInserido1+numerosInserido2
    //     }
    //     let subtracao = function subtrair(num1,num2){
    //         return numerosInserido1-numerosInserido2
    //     }
    //    let multiplicacao =  function multiplicar(num1,num2){
    //         return numerosInserido1*numerosInserido2
    //     }
    //     let divisao = function dividir(num1,num2){
    //         return numerosInserido1/numerosInserido2
    //     }
  
    // console.log(`Números inseridos: ${numerosInserido1} e ${numerosInserido2}`)
    // console.log('Soma:', soma(numerosInserido1,numerosInserido2))
    // console.log('Diferença:', subtracao(numerosInserido1,numerosInserido2))
    // console.log('Multiplicação:', multiplicacao(numerosInserido1,numerosInserido2))
    // console.log('Divisão:', divisao(numerosInserido1,numerosInserido2))   
    
    //====== DESAFIOS ======
      //1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
    //a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
        // let recebeParametro = (string) => {
        //     console.log(string)
        // }

        // recebeParametro('melancia')
   // b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

            // let recebeValores = (num1,num2) => {
            // let soma = num1+num2
            // recebeParametro(soma)
            // }

            // recebeValores(5,5)

    //2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, invoque a função e imprima o resultado no console

    let teoremaDePitagoras = (cateto1,cateto2) =>{
     let hipotenusa =  ((cateto1*cateto1) + (cateto2*cateto2)) ** (1/2)
     return hipotenusa
   }
      console.log(teoremaDePitagoras(9,2))
    
    
   