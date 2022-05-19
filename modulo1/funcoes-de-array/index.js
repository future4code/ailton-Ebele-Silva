 // ================= EXERCÍCIOS DE INTERPRETAÇÃO ================
 //1. 
//  const usuarios = [
//   { nome: "Amanda Rangel", apelido: "Mandi" },
//   { nome: "Laís Petra", apelido: "Laura" },
//   { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// const novoArrayA = usuarios.map((item, index, array) => {
//    console.log(item, index, array)
// })

//IMPRIME:
//   { nome: "Amanda Rangel", apelido: "Mandi"}
//   { nome: "Laís Petra", apelido: "Laura"}
//   { nome: "Letícia Chijo", apelido: "Chijo"}

//2.

//const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  //IMPRIME:
  //["Amanda Rangel","Laís Petra","Letícia Chijo"]
  
//3. NÃO ENTENDI
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//  console.log(novoArrayC)

  //IMPRIME
  //["Mandi", "Laura"]

  // ================= EXERCÍCIOS DE ESCRITA ================

  //1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

//   const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos

// const apenasNomes = pets.map((item, indice, array) => {
//     return item.nome
// })
// console.log(apenasNomes)

//['Lupin', 'Polly', 'Madame', 'Quentinho', 'Fluffy', 'Caramelo']

// b) Crie um novo array apenas com os [cachorros salsicha]

//  const apenasSalsicha = pets.filter((item, indice, array) =>{
//      return item.raca === "Salsicha"
//  })
//  console.log(apenasSalsicha)

 // { nome: "Lupin", raca: "Salsicha"}
  //{ nome: "Quentinho", raca: "Salsicha"}

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

//   const apenasPoodle = pets.filter((item, indice, array) =>{
//          return item.raca === "Poodle"
         
//      })
//      console.log(apenasPoodle)

     //  { nome: "Madame", raca: "Poodle"}
     //   { nome: "Fluffy", raca: "Poodle"}

    //  const mensagemClientes = pets.filter((index) => {
    //      return index.raca === "Poodle"
    //  }).map((item) => {
    //      return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
    //  })
    // console.log(mensagemClientes)

    // 'Você ganhou um cupom de desconto de 10% para tosar o/a Madame!', 'Você ganhou um cupom de desconto de 10% para tosar o/a Fluffy!']


    // 2.Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]

// a) Crie um novo array que contenha apenas o nome de cada item
        //  const apenasNomes = produtos.map((item, indice, array) => {
        //      return item.nome
        // })
        // console.log(apenasNomes)

//['Alface Lavada', 'Guaraná 2l', 'Veja Multiuso', 'Dúzia de Banana', 'Leite', 'Cândida', 'Detergente Ypê', 'Vinho Tinto', 'Berinjela kg', 'Sabão em Pó Ypê']

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const desconto = produtos.map((item, index, array) => {
//     return [item.nome, item.preco * 0.95]
// })
// console.log(desconto)


/*['Alface Lavada', 2.375]
['Guaraná 2l', 7.409999999999999]
['Veja Multiuso', 11.969999999999999]
['Dúzia de Banana', 5.415]
['Leite', 2.8405]
['Cândida', 3.135]
['Detergente Ypê', 2.09]
['Vinho Tinto', 52.25]
['Berinjela kg', 8.5405]
['Sabão em Pó Ypê', 10.26]*/

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

    // const bebidas = produtos.filter((item,index,array) => {
    //      return item.categoria.includes('Bebidas')
    //  })
    //  console.log(bebidas)

     //{nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8}
    // {nome: 'Leite', categoria: 'Bebidas', preco: 2.99}
    // {nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55}


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

    //  const nomeYpe = produtos.filter((item,index,array) => {
    //      return item.nome.includes('Ypê')
    //  })
    //  console.log(nomeYpe)

     // {nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2}
     // {nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8}


// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

        
    //  const frase = produtos.filter((item,index,array) => {
    //      return item.nome.includes('Ypê')
    //  }).map((item) => {
    //      return `Compre ${item.nome} por ${item.preco}`
    //  })
    //  console.log(frase)

     // ['Compre Detergente Ypê por 2.2', 'Compre Sabão em Pó Ypê por 10.8']


     //===================== DESAFIOS ===================


     //1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:
    
     const pokemons = [
        { nome: "Bulbasaur", tipo: "grama" },
        { nome: "Bellsprout", tipo: "grama" },
        { nome: "Charmander", tipo: "fogo" },
        { nome: "Vulpix", tipo: "fogo" },
        { nome: "Squirtle", tipo: "água" },
        { nome: "Psyduck", tipo: "água" },
     ]
   
        
    
    //a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**

        const nomesOrdAlfa = pokemons.map((item, indice, array) => {
             return item.nome
        })
        console.log(nomesOrdAlfa.sort())

        //['Bellsprout', 'Bulbasaur', 'Charmander', 'Psyduck', 'Squirtle', 'Vulpix']

    //b) Crie um novo array apenas com os tipos dos pokémons, **sem repetição**

        const apenasTiposSemRepeticao = pokemons.map((item, indice,array) => {
            return item.tipo
        })
        console.log(apenasTiposSemRepeticao)
      
    
    