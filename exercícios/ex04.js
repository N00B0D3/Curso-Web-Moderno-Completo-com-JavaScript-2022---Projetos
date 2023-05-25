/*04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/
function divisao(dividendo, divisor) {
    console.log("resultado: " + Math.floor(dividendo/divisor))
    console.log(`resultado: ${dividendo % divisor} `)
}
divisao(15, 3)