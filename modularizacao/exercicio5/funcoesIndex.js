
let dadosUsers = [
  {
    nome: "João",
    email: "joao@gmail.com",
    senha: "123456",
  },
  {
    nome: "Maria",
    email: "maria@gmail.com",
    senha: "654321",
  },
  {
    nome: "Artur",
    email: "artur@gmail.com",
    senha: "123456",
  },
  
]

export function criarUser(){
  const nome = prompt(`Digite um nome: `).trim()
  const email = prompt(`Digite um email: `).trim()
  const senha = prompt(`Digite um senha: `).trim()
  const user = { nome, email, senha}
  return user
}
export function adicionarUsuario(user){
  dadosUsers.push(user)
}
export function removerUsuario(user){
  const indexUser = dadosUsers.findIndex((user) => dadosUsers.nome === user.nome)
  indexUser === -1 ? console.log(`Usuário: ${user.nome} não encontrado!`) : dadosUsers.splice(indexUser, 1) 
}
export function alterarUsuario(nome){
  const indexUser = dadosUsers.findIndex((usuario) => usuario.nome === nome)
  if(indexUser != -1){
    const nome = prompt("Alterar Nome : ").trim()
    const email = prompt("Alterar Email : ").trim()
    const senha = prompt("Alterar senha : ").trim()
    const usuario = {nome , email, senha}
    dadosUsers[indexUser] = usuario
  } else {
    console.log(`${indexUser}Usuário não encontrado! Tente novamente`)
  }
}
export function exibirUsuarios(){
  console.log(` --- Lista de Usuários ---\n`)
  for(let user of dadosUsers){
    console.log(
      `Nome : ${user.nome}\nEmail : ${user.email}\nSenha : ${user.senha}`
    )
  }
}