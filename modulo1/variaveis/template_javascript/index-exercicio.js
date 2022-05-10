/*Exercícios de interpretação de códigos

1- let a = 10
   let b = 10

console.log(b)

b = 5
console.log(a, b)

Será impresso: 10
será impresso: 10 5



   2- let a = 10
      let b = 20
      c = a
      b = c
      a = b

console.log(a, b, c)

Será impresso: 10 10 10 
   
   

   3- let p = prompt("Quantas horas você trabalha por dia?")
      let t = prompt("Quanto você recebe por dia?")
      alert(`Voce recebe ${t/p} por hora`)
   
   
   p => horasTrabalhadas
      t => valorDia
      alert(`Você recebe ${valorDia/horasTrabalhadas} por hora`)*/

 
 
      //Exercício de escrita de código:
 //1
// const nome 
// const idade 
// console.log(typeof nome, typeof idade);

 //Imprimiu "undefined undefined" pois não foram atribuídos valores às variáveis, está vazia essa informação.

// const nome = prompt("Qual é o seu nome?");
// const idade = prompt("Qual é a sua idade?");
// console.log(typeof nome, typeof idade);

// Foi impresso "string string" pois o prompt sempre retorna variáveis do tipo string (texto).

//  console.log("Olá", nome, "você tem", idade, "anos");


//2
//  let pergunta1 = prompt("Você mora no Brasil?");
//  let pergunta2 = prompt("Você gosta de cachorro?");
//   let pergunta3 = prompt("Você é vegetariano?");

//  console.log("Você mora no Brasil?" , prompt("Você mora no Brasil?"));
//  console.log("Você gosta de cachorro?" , prompt("Você gosta de cachorro?"));
//  console.log("Você é vegetariano?", prompt("Você é vegetariano?"));


//3

/*let a = 10
  let b = 25*/

//   let a = 10
//   let b = 25
//   c = a
//   a = b
//   b = c


// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10


//Desafio

const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite outro número"));
const soma = num1 + num2;
const multiplicacao = num1 * num2
console.log ("O primeiro número somado ao segundo número resulta em" , soma);
console.log("O primeiro número multiplicado pelo segundo número resulta em", multiplicacao);




