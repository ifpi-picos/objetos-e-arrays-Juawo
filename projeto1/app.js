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
  switch (opcao) {
    case 1:
      adicionarItem(listaCompras)
      opcao = exibirMenu()
      break
    case 2:
      pesquisarItem(listaCompras)
      opcao = exibirMenu()
      break
    case 3:
      exibirLista(listaCompras)
      opcao = exibirMenu()
      break
    case 4:
      ordenarLista(listaCompras)
      opcao = exibirMenu()
      break
    case 5:
      removerItem(listaCompras)
      opcao = exibirMenu()
      break
    case 6:
      limparLista(listaCompras)
      opcao = exibirMenu()
      break
    case 7:
      openClose = false
      console.log(`Obrigado por usar o nosso programa!`)
      break
    default:
      console.log("Opção inválida! Tente outra.")
      opcao = exibirMenu()
  }
}
