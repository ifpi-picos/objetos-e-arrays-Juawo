export function adicionarFilme(lista) {
  const data = new Date()
  const ano = data.getFullYear()
  const filmeAdd = prompt("Adicione um filme: ").trim()
  const anoFilmeAdd = parseInt(
    prompt("Adicione o ano de lançamento do filme: ")
  )
  const objetoAdd = { titulo: filmeAdd, anoLancamento: anoFilmeAdd }
  anoFilmeAdd > 0 && anoFilmeAdd <= ano ? lista.push(objetoAdd) : console.log(`Coloque uma data válida! Que seja maior que 0 e menor ou igual que ${ano} `)
}
export function ordenarFilmes(lista) {
  lista.sort((filme1, filme2) => filme1.titulo.localeCompare(filme2.titulo))
}
export function pesquisarFilme(lista) {
  const tituloPesquisa = prompt("Pesquise por um filme: ").trim()
  const index = lista.findIndex((filme) => filme.titulo === tituloPesquisa)
  index > -1 ? console.log(`O filme ${tituloPesquisa} foi encontrado!`) : console.log(`O filme ${tituloPesquisa} não foi encontrado!`)

}
export function exibirFilmes(lista) {
  console.log(`-- Lista de Filmes --`)
  console.table(lista)
}
export function exibirFilmesAssistidos(listaAssistido) {
  console.log(`-- Lista de Filmes Assistidos --`)
  console.table(listaAssistido)
}
export function marcarFilmeAssistido(lista,listaAssistido) {
  const filmeAssistidoAdd = prompt('Qual filme deseja marcar como assistido? ').trim()
  const callBack = false
  for(let filme of lista){
    if(filme.titulo === filmeAssistidoAdd){
      listaAssistido.push(filme)
      removerFilme(lista,filmeAssistidoAdd,callBack)
      console.log(`\nO filme ${filmeAssistidoAdd} foi marcado como assistido!`)
    }
  }
}
export function removerFilme(lista,filmeAdd,call = true) {
  for(let filme of lista){
    if(filme.titulo === filmeAdd){
      lista.splice(lista.indexOf(filme),1)
      call === true && console.log(`\nO filme ${filmeAdd} foi removido!`) 
    }
    if (lista.indexOf(filme) === (lista.length - 1) && call === true) {
      console.log(
        `\nO Filme ${filmeAdd} não foi encontrado para ser removido!`
      )
    }
  }
}
