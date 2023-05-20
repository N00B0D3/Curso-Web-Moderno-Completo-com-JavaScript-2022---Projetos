const prod1 = {} //criando objeto diretamente e atribuindo valores por fora
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1)

const prod2 = { //objeto criado com valores diretamente
    nome: 'camisa polo',
    preco: 79.90,
    obj: {
        lerolero: 1,
        obj: { //é possivel criar objetos dentro de objetos
            lerolero: 2
        }
    }
}

console.log(prod2)