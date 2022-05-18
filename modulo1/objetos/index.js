//  =====================    Exercícios de interpretação de código

//1. Leia o código abaixo
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

//a) O que vai ser impresso no console?
//console.log(filme.elenco[0])                     IMPRIME: Matheus Nachtergaele
//console.log(filme.elenco[filme.elenco.length - 1])    IMPRIME: Virginia Cavendish
//console.log(filme.transmissoesHoje[2])            IMPRIME: canal: Globo, horario: 14h


//2. Leia o código abaixo
    // const cachorro = {
    // 	nome: "Juca", 
    // 	idade: 3, 
    // 	raca: "SRD"
    // }
    
    // const gato = {...cachorro, nome: "Juba"}
    
    // const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
    // console.log(cachorro)
    // console.log(gato)
    // console.log(tartaruga)
    
    //a) O que vai ser impresso no console?
    // console.log(cachorro)   //{nome: Juca, idade: 3, raca: SRD}
    // console.log(gato)       // {nome: Juba, idade:3 , raca: SRD}
    // console.log(tartaruga)   //{nome: nome: Jubo, idade:3, raca: SRD}
    
    //b) O que faz a sintaxe dos três pontos antes do nome de um objeto?  //Espelhamento

  //3. Leia o código abaixo
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

//a) O que vai ser impresso no console?
//console.log(minhaFuncao(pessoa, "backender"))    // false
//console.log(minhaFuncao(pessoa, "altura"))       // undefined

//b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
//Foi impresso false pois no objeto foi determinada backender como false e undefined foi por não ter altura no objeto.


//  =====================    Exercícios de escrita de código
//1.Resolva os passos a seguir: 
//a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**
// Exemplo de saída
//"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// const pessoa = {
//     nome: 'Ebele',
//     apelidos: ['Belinha', 'Bele', 'Adaobi']
// }

//  function frase(obj) {
//     console.log(`Eu sou ${obj.nome}, mas pode me chamar de: ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${pessoa.apelidos[2]}`) 
// }

// frase(pessoa)

 //b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

//  const novaPessoa = {
//     ...pessoa,
//     apelidos: ['Belitcha', 'Ebelitcha','Bel']
//  }

// frase(novaPessoa)

//2. Resolva os passos a seguir: 
    
   // a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

//    const pessoa1 = {
//        nome: 'Ebele',
//        idade: 34,
//        profissao: 'estudante'
//    }

//    const pessoa2 = {
//     nome: 'Leonardo',
//     idade: 33,
//     profissao: 'engenheiro'
//    }
    
    //b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    // 1. O valor de `nome`
    // 2. O numero de caracteres do valor `nome`
    // 3. O valor de `idade`
    // 4. O valor de `profissão`
    // 5. O numero de caracteres do valor `profissão`

    // function retornaArray(obj){
    //     array = [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]
    //     return array;
    // }
    // console.log(retornaArray(pessoa1))
    // console.log(retornaArray(pessoa2))
   
 

    //3. Resolva os passos a seguir: 
    
    // a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

    // let carrinho = []
    
    // b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    //  const fruta1 = {
    //      nome: 'pessego',
    //      disponibilidade: true
    //  }

    //  const fruta2 = {
    //      nome: 'atemoia',
    //      disponibilidade : true
    //  }

    //  const fruta3 = {
    //     nome: 'goiaba',
    //     disponibilidade: true
    //  }
    // c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    // function addCarrinho (obj) {
    //     carrinho.push(obj);
    // }
    
    
    // d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.** 
    // addCarrinho(fruta1);
    // addCarrinho(fruta2);
    // addCarrinho(fruta3);

    // console.log(carrinho)
    
    //========= DESAFIOS =======
    
   // 1. Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o **tipo** dele para garantir que é um **objeto.**
   // Exemplo de entrada: "Lais", 26, "Instrutora"
               // O que deve ser impresso no console: 
               //{ nome: 'Lais', profissao: "Instrutora", idade: 26}
  
    // function perguntas() {
    //     let nome = prompt('Qual seu nome?')
    //     let idade = prompt('Qual sua idade?')
    //     let profissao = prompt('Qual sua profissão?')
    //   console.log(`${nome}, ${idade}, ${profissao}`)
    //   return nome, idade, profissao
    // }
    // perguntas()
  
     //************************* *
    // const resposta = {
    //     nome: ,
    //     idade: ,
    //     profissao: 
    // }

    // console.log(resposta)
    // typeof resposta


    //2. Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:
  
   // O primeiro filme foi lançado antes do segundo? false
    //O primeiro filme foi lançado no mesmo ano do segundo? true

    
  




    //3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade `disponibilidade` com o valor invertido.