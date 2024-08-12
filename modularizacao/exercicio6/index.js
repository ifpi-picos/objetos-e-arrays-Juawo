import { log10 } from "mathjs";

const numero = Number(prompt(`Digite um número para calcular o logaritmo : `))
const logNumero = log10(numero)
console.log(`Logaritmo de ${numero} = ${logNumero}`)