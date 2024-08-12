export function adicionarItem (lista){
  const itemAdd = prompt(`Qual item você deseja adicionar a lista?`).trim()
  itemAdd.toLowerCase
  lista.push(itemAdd)
  exibirLista(lista)
}

export function removerItem (lista){
  const itemRemove = prompt(`Qual item você deseja remover da lista?`).trim()
  lista.splice(lista.indexOf(itemRemove),1)
  exibirLista(lista)
}

export function pesquisarItem (lista){
  const itemPesquisa = prompt(`Pesquise um item na sua lista: `).trim()
  itemPesquisa.toLowerCase
  if (lista.includes(itemPesquisa)){
    console.log(`O item ${itemPesquisa} está na lista!`)
  } else {
    console.log(`O item ${itemPesquisa} não está na lista!`)
  }
}

export function ordenarLista (lista){
  lista.sort((a,b) => a.localeCompare(b))
  exibirLista(lista)
}

export function exibirLista (lista){
  console.log(`--- Lista de Compras ---`)
  for(let item of lista){
    console.log(item)
  } 
}

export function limparLista (lista){
  lista.splice(0, lista.length)
  console.log(`Lista vazia! ${lista.length}`)
  exibirLista(lista)
}
