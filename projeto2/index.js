import {adicionarFilme, ordenarFilmes, pesquisarFilme, exibirFilmes, exibirFilmesAssistidos, marcarFilmeAssistido, removerFilme} from './funcoesApp'
import {exibirMenu} from './menuApp'

let loop = true
let listaFilmes = []
let listaFilmesAssistidos = []

while (loop){
  const opcao = exibirMenu()
  switch(opcao){
    case 1:
      adicionarFilme(listaFilmes)
      break;
    case 2:
      pesquisarFilme(listaFilmes)
      break;
    case 3:
      const opcaoExibir = parseInt(prompt(`\n1 - Exibir Lista de Filmes\n2 - Exibir Lista de Filmes Assistidos\n`))
      opcaoExibir === 1 ? exibirFilmes(listaFilmes) : exibirFilmesAssistidos(listaFilmesAssistidos)
      break;
    case 4:
      const opcaoOrdenar = parseInt(prompt(`\n1 - Ordernar Lista de Filmes\n2 - Ordenar Lista de Filmes Assistidos\n`))
      opcaoOrdenar === 1 ? ordenarFilmes(listaFilmes) : ordenarFilmes(listaFilmesAssistidos)
      break;
    case 5:
      marcarFilmeAssistido(listaFilmes, listaFilmesAssistidos)
      break;
    case 6:
      const opcaoRemover = parseInt(prompt(`\n1 - Remover da Lista de Filmes\n2 - Remover da Lista de Filmes Assistidos\n`))
      if(opcaoRemover === 1 ){
        const filmeAdd = prompt("Qual filme deseja remover? ").trim()
        removerFilme(listaFilmes,filmeAdd)
      } else {
        const filmeAdd = prompt("Qual filme deseja remover? ").trim()
        removerFilme(listaFilmesAssistidos,filmeAdd)
      }
      break;
    case 7:
      loop = false
      break;
    default:
      console.log(`Opção inválida! Tente outra opção.`)
  }
}