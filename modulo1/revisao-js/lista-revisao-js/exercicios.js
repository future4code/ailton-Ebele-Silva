// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
   return array.reverse()
}

// EXERCÍCIO 03  
function retornaArrayOrdenado(array) {
    function sortfunction(a,b){
        return (a-b)
    }
   return array.sort(sortfunction)
}

// EXERCÍCIO 04  
function retornaNumerosPares(array) {
    return array.filter(numero => (numero % 2) == 0)
}

// EXERCÍCIO 05 //NÃO SEI
function retornaNumerosParesElevadosADois(array) {
 // return array.filter(numero => (((numero % 2) == 0)**2))
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    let maior = -Infinity
    for (let numero of array){
        if(numero > maior){
            maior = numero
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
   let objeto ={
           maiorNumero: Math.max(num1,num2),
           maiorDivisivelPorMenor: Math.max(num1,num2) % (Math.min(num1,num2)) === 0,
           diferenca: Math.max(num1,num2) - Math.min(num1,num2)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   let numerosPares = []
   for (let i = 0; numerosPares.length < n; i++){
       if (i % 2 == 0)
       numerosPares.push(i)
   }
   return numerosPares
}
 


// EXERCÍCIO 09 NÃO DÁ CERTO
function classificaTriangulo(ladoA, ladoB, ladoC) {
    // if(ladoA === ladoB  === ladoC){
    //     return "Equilátero"
    // }  else if (ladoA !== ladoB !== ladoC !== ladoA){
    //     return "Escaleno"
    // } else if (ladoA === ladoB !== ladoC) {   
    //     return "Isósceles"
    // }
}

// EXERCÍCIO 10 
function retornaSegundoMaiorESegundoMenor(array) {
  let primeiroMaior = -Infinity
  let segundoMaior= -Infinity
  let primeiroMenor = Infinity
  let segundoMenor = Infinity

  for(let numero of array) {
      if(numero > primeiroMaior){
          primeiroMaior = numero
      } if (numero < primeiroMenor){
          primeiroMenor = numero
      }
  }
    for (let numero of array){
        if(numero > segundoMaior && numero !== primeiroMaior){
            segundoMaior = numero
        } if (numero < segundoMenor && numero !== primeiroMenor){
            segundoMenor = numero
        }
    }
    let resultado = [segundoMaior, segundoMenor]
    return resultado
}

// EXERCÍCIO 11 NÃO DÁ
function retornaChamadaDeFilme(filme) {
//    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   let novoObjeto = {
       ...pessoa,
       nome: 'ANÔNIMO'
   }
   return novoObjeto
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

  let pessoasAutorizadas = pessoas.filter((autorizadas) =>{
      return autorizadas.idade >= 15 && autorizadas.idade < 60 && autorizadas.altura >=1.5
  })
  return pessoasAutorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNAutorizadas = pessoas.filter((naoAutorizadas) =>{
        return naoAutorizadas.idade < 15 && naoAutorizadas.idade > 60 && naoAutorizadas.altura <1.5
    })
    return pessoasNAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}