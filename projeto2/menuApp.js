export function exibirMenu() {
  let opcao = parseInt(
    prompt(`        
              --- Programa de Lista de Filmes ---

        1 - Adicionar Filme
        2 - Pesquisar Filme na lista
        3 - Exibir Lista de Filmes
        4 - Ordenar Lista de Filmes
        5 - Marcar Filme como Assistido
      \x1b[31m ---- Danger Zone ----
        6 - Remover Filme
        7 - Sair
      \x1b[0m
      `)
  )
  return opcao
}
