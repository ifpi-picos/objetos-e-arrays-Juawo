export function adicionarFilme(lista) {
  const filmeAdd = prompt("Adicione um filme: ").trim()
  const anoFilmeAdd = parseInt(
    prompt("Adicione o ano de lançamento do filme: ")
  )
  const objetoAdd = { titulo: filmeAdd, anoLancamento: anoFilmeAdd }
  lista.push(objetoAdd)
}

export function ordenarFilmes(lista) {
  lista.sort((filme1, filme2) => filme1.titulo.localeCompare(filme2.titulo))
}
export function pesquisarFilme(lista) {
  const tituloPesquisa = prompt("Pesquise por um filme: ").trim()
  lista.find((filme) => {
    if (filme.titulo === tituloPesquisa){ 
      console.log(`Filme encontrado!\n Título: ${filme.titulo}\n Ano de Lançamento: ${filme.anoLancamento}`)
    } else {
    console.log(`O Filme ${tituloPesquisa} não foi encontrado!`) }})
}

export function exibirFilmes(lista) {
  console.log(`-- Lista de Filmes Assistidos --`)
  console.table(lista)
  // for (let filme of lista) {
  //   console.log(`Título : ${filme.titulo} 
  //     Ano de Lançamento : ${filme.anoLancamento}\n`)
  // }
}

export function exibirFilmesAssistidos(listaAssistido) {
  console.log(`-- Lista de Filmes Assistidos --`)
  console.table(listaAssistido)
  // for (let filme of listaAssistido) {
  //   console.log(`Título : ${filme.titulo} 
  //     Ano de Lançamento : ${filme.anoLancamento}\n`)
  // }
}

export function marcarFilmeAssistido(lista,listaAssistido) {
  const filmeAssistidoAdd = prompt('Qual filme deseja marcar como assistido? ').trim()
  for(let filme of lista){
    if(filme.titulo === filmeAssistidoAdd){
      console.log(`\nO filme ${filmeAssistidoAdd} foi marcado como assistido!`)
      listaAssistido.push(filme)
    }
  }
}
export function removerFilme(lista) {
  const filmeAdd = prompt('Qual filme deseja remover? ').trim()
  for(let filme of lista){
    if(filme.titulo === filmeAdd){
      console.log(`\nO filme ${filmeAdd} foi removido!\n Lista Atual: `)
      lista.splice(lista.indexOf(filme),1)
    }
    if (lista.indexOf(filme) === lista.length - 1) {
      console.log(
        `\nO Filme ${filmeAdd} não foi encontrado para ser removido!`
      )
    }
  }
}

const lista = [
  {
    titulo: "SpiderVerse",
    anoLancamento: 2018,
  },
  {
    titulo: "Os incriveis 2",
    anoLancamento: 2022,
  },
]
const listaAssistido = [
]

adicionarFilme(lista)
pesquisarFilme(lista)
exibirFilmes(listaAssistido)
ordenarFilmes(lista)
exibirFilmes(listaAssistido)
marcarFilmeAssistido(lista,listaAssistido)
exibirFilmesAssistidos(listaAssistido)
removerFilme(lista)