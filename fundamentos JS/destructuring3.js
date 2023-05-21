function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}


//console.log(rand({ max: 50, min: 40}))
const obj = { max: 50, min: 40} // gerando minimo 40 e maximo 50
console.log(rand(obj))
console.log(rand({min: 955})) //gerando de 955 a 1000
console.log(rand({})) //gerando de 0 a mil
console.log(rand()) //erro pois esta desestruturando algo que esta undefined ou nulo