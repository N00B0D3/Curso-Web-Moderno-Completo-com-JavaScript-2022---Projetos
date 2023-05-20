//Função em js é first-class object (citizens)
//high-order function

//criar de forma literal
function fun1() { 

}

//Armazenar em uma variavel
const fun2 = function() {} 

//Armazenar dentro de um array
const array = [function (a, b) {
    return a + b
}, fun1, fun2]
console.log(array[0](2, 3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {
    return 'opa'
}
console.log(obj.falar())

//Passar função como parametro
function run(fun) {
    fun()
}
run(function () {
    console.log('executando...')
})


//Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a +b +c)
    }
}

soma(2,3) (4)
const cincoMais = soma(2, 3)
cincoMais(4)
