// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
    let altura = Number(prompt("Digite a altura do retângulo"))
    let largura = Number(prompt("Digite a largura do retângulo"))
    let area = altura * largura
    console.log(area)
    return area
  }
 


// EXERCÍCIO 02
function imprimeIdade() {
  let anoAtual = Number(prompt("Digite o ano em que estamos"))
  let anoNasc = Number(prompt("Qual o ano do seu nascimento?"))
  let suaIdade = anoAtual - anoNasc
  console.log(suaIdade)
  return suaIdade
}

// EXERCÍCIO 03
function calculaIMC() {
let peso = Number(prompt("Digite seu peso em kg"))
let altura = Number(prompt("Digite sua altura em metros"))
let imc = peso / (altura*altura)
console.log(imc)
return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("Qual sua idade?")
  let email = prompt ("Qual seu e-mail?")
  let mensagem = (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
 console.log(mensagem)
  return mensagem
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let cor1 = prompt("Digite uma primeira cor favorita")
  let cor2 = prompt("Digite uma segunda cor favorita")
  let cor3 = prompt("Digite uma terceira cor favorita")
  let resposta = [cor1, cor2, cor3]
  console.log(resposta)
  return resposta
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  let stringNova = string.toUpperCase()
  console.log(stringNova)
  return stringNova
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
return custo/valorIngresso


}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
 let palavra1 = (string1.length)
 let palavra2 = (string2.length)
  // let palavra1 = console.log(string1.length)
  // let palavra2 = console.log(string2.length)
  let comparacao = palavra1 === palavra2
  console.log(comparacao)
  return comparacao
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
 let primeiroElemento = array[0]
  console.log(primeiroElemento)
  return primeiroElemento
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  let ultimoElemento = array[array.length-1]
   console.log(ultimoElemento)
   return ultimoElemento
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // let primeiro = array[0]
  // let ultimo = array[array.length-1]
  // let reserva = primeiro
  // let nova = array.replaceAll(primeiro, ultimo)
  //   .pop()
  //   .push(reserva)
  // nova.pop()


 
      
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 
//  return string1.toLowerCase().includes( string2.toLowerCase() )
 return string1.toLowerCase() === string2.toLowerCase() 
}

// EXERCÍCIO 13
function checaRenovacaoRG() {

//   let anoAtual = prompt("Em que ano estamos?")
//   let anoNasc = prompt("Em que ano nasceu?")
//   let anoRg = prompt("Ano de emissão de seu RG")
  
//   let idade = anoAtual - anoNasc
//   let idadeRg = anoAtual - anoRg

//   let menorVinte = 
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}