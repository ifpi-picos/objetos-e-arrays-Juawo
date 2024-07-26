//Questão 22
function exibirNome(nomeCompleto){
  const nome = nomeCompleto.split(' ') 
  console.log(`${nome[0]} ${nome[nome.length - 1]}`)
}

const userNomeCompleto = prompt('Digite seu nome completo: ')
exibirNome(userNomeCompleto)