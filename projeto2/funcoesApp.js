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
  console.log(lista.find((filme) => filme.titulo == tituloPesquisa))
}
export function exibirFilmes(lista) {
  for (let filme of lista) {
    console.log(`Título : ${filme.titulo} 
      Ano de Lançamento : ${filme.anoLancamento}`)
  }
}
export function marcarFilmeAssistido(lista,listaAssistido) {
  const filmeAssistidoAdd = prompt('Qual filme deseja marcar como assistido? ').trim()
  
}
export function removerFilme(lista) {
  return lista
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
  {
    titulo: "SpiderVerse 2",
    anoLancamento: 2023,
  }
]

pesquisarFilme(lista)
