// novo recurso do es2015

const pessoa = {
    nome: 'ana',
    idade: 15,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa //setando valor true para bemHumorada
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa  // possivel acessar logradouro pois esta ninhado dentro de endereco
console.log(logradouro, numero, cep)

const {conta: {ag, num}} = pessoa  //não é possivel acessar um dado inexistente
console.log(ag, num)