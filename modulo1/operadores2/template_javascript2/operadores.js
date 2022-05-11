//--------------- Exercícios de interpretação de código

//1
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2  //true

// let resultado = bool1 && bool2  //false
// console.log("a. ", resultado)   //Imprime: a. false

// resultado = bool1 && bool2 && bool3  //true && false && true
// console.log("b. ", resultado)       //Imprime: b. false

// resultado = !resultado && (bool1 || bool2)  // !resultado && true  --- !false && true ---true && true
// console.log("c. ", resultado)               // Imprime: c. true

// console.log("d. ", typeof resultado)     // typeof false  // Imprime: d.boolean

//2
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)  //Imprime: a concatenação dos 2 números digitados e não sua soma


// 3
//  let primeiroNumero = Number(prompt("Digite um numero!"))
//  let segundoNumero = Number(prompt("Digite outro numero!"))

//  const soma = primeiroNumero + segundoNumero

//  console.log(soma) 

//----------Exercícios de escrita de código

//1

// const suaIdade = Number(prompt("Qual é a sua idade?"))
// const idadeMelhorAmigo = Number(prompt("Qual é a idade do seu melhor amigo?"))
// const resultado = suaIdade > idadeMelhorAmigo

// console.log("Sua idade é maior do que a do seu melhor amigo?" , resultado)
// console.log("A diferença de idade é de" , suaIdade - idadeMelhorAmigo,"anos.") 

//2

// const numero = Number(prompt("Digite um número par"));
// console.log(numero % 2)

// Ao testar diversos números pares o resultado impresso sempre será 0, pois não resta nada ao dividir um número par por 2.

//Ao inserir número impar, o resultado será resto 1, pois é o que sobra ao dividir um número impar por 2.

//3

// const idade = Number(prompt("Quantos anos você tem?"));
// console.log("Você tem" , idade * 12 , "meses de idade.");
// console.log("Você tem", idade * 365 , "dias de idade");
// console.log("Você tem", idade * 8760 , "horas de idade")

//Imprimiu:
// Você tem 408 meses de idade.
// index.js:60 Você tem 12410 dias de idade
// index.js:61 Você tem 297840 horas de idade

//4

// const numero1 = Number(prompt("Digite um número"));
// const numero2 = Number(prompt("Digite outro número."));
// const umDivididoPeloDois = numero1 % numero2
// const doisDivididoPeloUm = numero2 % numero1
// const restoDaDivisao = 0


// console.log("O primeiro número é maior que o segundo?" , numero1 > numero2);
// console.log("O primeiro número é igual ao segundo?" , numero1 === numero2);
// console.log("O primeiro número é divisível pelo segundo?" , umDivididoPeloDois === restoDaDivisao);
// console.log("O segundo número é divisível pelo primeiro?" , doisDivididoPeloUm === restoDaDivisao);


//Desafio 1

// (KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
// (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32
// (KEVIN) = (GRAUS_CELSIUS) + 273.15 


//a 77F em K

// const f = Number(prompt("Digite um valor na unidade Fahrenheit")) 
// const conversaoFemK = (f - 32)*(5/9) + 273.15

// console.log(f,"F equivalem a", conversaoFemK, "K");
//Imprime:77 'F equivalem a' 298.15 'K'

//b 80C em F

// const c = Number(prompt("Digite um valor na unidade Celsius")) 
// const conversaoCemF = (c)*(9/5) + 32

// console.log(c,"C equivalem a", conversaoCemF, "F");
//Imprime: 80 'C equivalem a' 176 'F'

//c 30C em F
//30C em K

// const c = Number(prompt("Digite um valor na unidade Celsius")) 
// const conversaoCemF = (c)*(9/5) + 32
// const conversaoCemK = (c) + 273.15

// console.log(c,"C equivalem a", conversaoCemF, "F");
// console.log(c,"C equivalem a", conversaoCemK, "K");

//Imprime: 30 'C equivalem a' 86 'F'
//         30 'C equivalem a' 303.15 'K'
//------------------ Desafio 2

// const consumoQuilowattHora = 280
// const custoQuillowattHora = consumoQuilowattHora * 0.05

// console.log("O valor a ser pago é R$" , custoQuillowattHora);

//Com desconto

// const consumoQuilowattHora = 280
// const custoQuillowattHora = consumoQuilowattHora * 0.05
// const desconto = custoQuillowattHora - (0.15 * custoQuillowattHora)

// console.log("O valor com desconto será R$" , desconto)

//--------------------Desafio 3

//a
// 1 lb = 0.4535 kg

// const lb = Number(prompt("Digite um valor na unidade libra")) 
// const conversaoLbKg = lb * 0.4535

// console.log(lb,"lb equivalem a", conversaoLbKg, "kg");
//Imprime: 20 'lb equivalem a' 9.07 'kg'

//b
// 1 oz = 0,0283 kg

// const oz = Number(prompt("Digite um valor na unidade onça")) 
// const conversaoOzKg = oz * 0.0283

// console.log(oz,"oz equivalem a", conversaoOzKg, "kg");
//Imprime: 10.5 'oz equivalem a' 0.29714999999999997 'kg'

//c
//1 milha = 1609.34 metros

// const mi = Number(prompt("Digite um valor na unidade milha")) 
// const conversaoMiMe = mi * 1609.34

// console.log(mi,"mi equivalem a", conversaoMiMe,"m");
//Imprime: 100 'mi equivalem a' 160934 'm'

//d
//1 pé = 0,3048 metro

// const ft = Number(prompt("Digite um valor na unidade pés")) 
// const conversaoFtMe = ft * 0.3048

// console.log(ft,"ft equivalem a", conversaoFtMe,"m");
//mprime: 50 'ft equivalem a' 15.24 'm' 

//e
// 1 galão = 4546,09 ml = 4.5460 litros

// const gal = Number(prompt("Digite um valor na unidade galão")) 
// const conversaoGalLt = gal * 4.5460

// console.log(gal,"gal equivalem a", conversaoGalLt,"l");

//Imprime: 103.56gal equivalem a 170.7837l

//f
// 1 xicara = 0.24 litros

const xic = Number(prompt("Digite um valor na unidade xícaras")) 
const conversaoXicLt = xic * 0.24

console.log(xic,"xic equivalem a", conversaoXicLt,"l");

//Imprime: 450xic equivalem a 108l