/*var idade = 22
if(idade <16) {
    console.log(`Não vota`)
} else {
    if(idade>=16 && idade <18) {
        console.log(`voto opcional`)
    }
}*/

/*var idade = 17 
if(idade<16){
    console.log(`Não vota`)
} else if(idade<18) {
console.log(`voto opcional`)
} else {
    console.log(`voto obrigatorio`)
}*/

var idade = 16
console.log(`Você tem ${idade} anos.`)
if(idade < 16) {
    console.log(`não vota`)
}else if(idade < 18 || idade > 65) {
    console.log(`voto opcional`)
}else{
    console.log(`voto obrigatorio`)
}