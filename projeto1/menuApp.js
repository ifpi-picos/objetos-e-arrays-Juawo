export function exibirMenu(){
    let opcao = parseInt(prompt(`        
              --- Programa de Compras ---

        1 - Adicionar Item a Lista
        2 - Pesquisar Item na lista
        3 - Exibir Lista
        4 - Ordenar Lista
      \x1b[31m ---- Danger Zone ----
        5 - Remover Item
        6 - Limpar Lista
        7 - Sair
      \x1b[0m
      `))
      opcao.trim
      opcao.toLowerCase
      return opcao
}