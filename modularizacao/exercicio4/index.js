import { soma, subtracao, multiplicacao, divisao, exponenciacao } from "./funcoesIndex";

let loop = true
let numero1 = null
let numero2 = null

while(loop){
  const operacao = parseInt(prompt(`Escolha uma função :\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão\n 5 - Exponenciação\n 6 - Sair\n Escolha : `))
  
  switch (operacao) {
    case 1:
      numero1 = Number(prompt(`Digite um número: `))
      numero2 = Number(prompt(`Digite mais um número: `))
      console.log(soma(numero1,numero2))
      break; 
    case 2:
      numero1 = Number(prompt(`Digite um número: `))
      numero2 = Number(prompt(`Digite mais um número: `))
      console.log(subtracao(numero1,numero2))
      break; 
    case 3:
      numero1 = Number(prompt(`Digite um número: `))
      numero2 = Number(prompt(`Digite mais um número: `))
      console.log(multiplicacao(numero1,numero2))
      break; 
    case 4:
      numero1 = Number(prompt(`Digite um número: `))
      numero2 = Number(prompt(`Digite mais um número: `))
      console.log(divisao(numero1,numero2))
      break; 
    case 5:
      numero1 = Number(prompt(`Digite um número: `))
      numero2 = Number(prompt(`Digite mais um número: `))
      console.log(exponenciacao(numero1,numero2))
      break; 
    case 6:
      loop = false
      console.log(`Obrigado por usar o nosso programa!`)
      break; 
    default:
      console.log(`Tente uma das opções válidas!`)
    }
}