//par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'falaaa' //contexto lexico 2
    return saudacao //por mais que a const seja a mesma, ele vai procurar primeiramente a saudacao no seu grupo(bloco)
}

//objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade: 32,
    Peso: 90,
    endereco: {
        logradouro: 'Rua Muito Longe',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)