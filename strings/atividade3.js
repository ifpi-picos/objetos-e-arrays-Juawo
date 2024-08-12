//Questão 23
function exibirNome(nomeCompleto) {
  const nome = nomeCompleto.split(" ")
  console.log(`${nome[0]}`)
}

const userNomeCompleto = prompt("Digite seu nome completo: ")
exibirNome(userNomeCompleto)
