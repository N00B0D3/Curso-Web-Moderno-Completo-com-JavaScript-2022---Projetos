//função sem retorno
function imprimirSoma(a, b) {
console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // NaN por quê o segundo indice não foi definido
imprimirSoma(2, 3, 4, 5, 6, 7) //Irá considerar apenas os dois primeiros indicies (a, b)
imprimirSoma()

//função com retorno
function soma(a, b = 0) {
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))  //considerou B == 0 como valor padrão
console.log(soma()) //NaN por causa que os valores não foram atribuidos


//Armazenando função em variavel
const imprimirSoma2 = function(a, b) {
    console.log(a + b)
}

imprimirSoma2(2, 3)

// Armazenando uma função arrow em uma variavel
const soma2 = (a, b) => {
 return a + b
}

console.log(soma2(2, 3))

//retorno implicito
const subtracao = (a, b) => a - b //Sem chaves pois havera apenas um retorno atribuido pela arrow function
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) //função de unico parametro
imprimir2('legal')