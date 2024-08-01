import {
  adicionarItem,
  removerItem,
  pesquisarItem,
  ordenarLista,
  exibirLista,
  limparLista,
} from "./funcoesApp"
import { exibirMenu } from "./menuApp"

let openClose = true
let opcao = exibirMenu()
let listaCompras = []

while (openClose === true) {
  opcao = exibirMenu()
  switch (opcao) {
    case 1:
      adicionarItem(listaCompras)
      break
    case 2:
      pesquisarItem(listaCompras)
      break
    case 3:
      exibirLista(listaCompras)
      break
    case 4:
      ordenarLista(listaCompras)
      break
    case 5:
      removerItem(listaCompras)
      break
    case 6:
      limparLista(listaCompras)
      break
    case 7:
      openClose = false
      console.log(`Obrigado por usar o nosso programa!`)
      break
    default:
      console.log("Opção inválida! Tente outra.")
  }
}
