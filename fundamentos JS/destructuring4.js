function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40])) // valor de 50 a 40
console.log(rand([992])) //valor minimo 992
console.log(rand([, 10])) //valor maximo 10
console.log(rand([])) //valor de 0 a mil
console.log(rand()) //erro pois está undefined