// Questão 18
const carros = [
  { nome: "Argo", ano: 2010 },
  { nome: "Fiat", ano: 2014 },
  { nome: "Gol", ano: 2023 },
  { nome: "Civic", ano: 2018 },
  { nome: "Corola", ano: 2010 },
]

const carrosDe2010 = carros.filter((carro) => {
  if (carro.ano > 2010) {
    return carro
  }
})

console.log(carrosDe2010)
