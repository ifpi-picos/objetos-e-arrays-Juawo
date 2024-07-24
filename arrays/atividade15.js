const pessoas = [
  { nome : 'Juliana', idade : 10},
  { nome : 'Margarida', idade : 40},
  { nome : 'João', idade : 32},
  { nome : 'Christian', idade : 20},
  { nome : 'Letícia', idade : 12},
  { nome : 'Mantas', idade : 90},
]
const pessoaEncontrada = pessoas.find((pessoa) => pessoa.idade > 18)

console.log(pessoaEncontrada)