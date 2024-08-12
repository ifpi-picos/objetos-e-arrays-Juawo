import { criarUser, adicionarUsuario, removerUsuario, alterarUsuario, exibirUsuarios} from "./funcoesIndex";

let loop = true
let usuario = null

while (loop) {
  const opcao = parseInt(prompt(` 1 - Criar Usuário\n 2 - Adicionar Usuário\n 3 - Exibir Usuário\n 4 - Alterar Usuário\n 5 - Remover Usuário\n Esolha : `))
  switch (opcao) {
    case 1:
      usuario = criarUser()
      break
    case 2:
      adicionarUsuario(usuario)
      break
    case 3:
      exibirUsuarios()
      break
    case 4:
      const usuarioAlterar = prompt(`Qual o nome do usuário que você deseja alterar ?`).trim()
      alterarUsuario(usuarioAlterar)
      break
    case 5:
      removerUsuario(usuario)
      break
    case 6:
      loop = false
      break
    default:
      console.log("Opção inválida!")
  }
}
