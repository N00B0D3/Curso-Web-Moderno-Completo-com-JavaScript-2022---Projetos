let valores = [8,1,7,4,2,9]
/*let num = [5,8,4] 
console.log(`nosso vetor é ${num}`)
num[3] = 6 //cria automaticamente um novo indice (3)
num.push(7) //acrescenta apos o ultimo indice
num.length //mostra quantos indices tem o array
num.sort() //deixa em ordem crescente */

/*for (let pos=0;pos<valores.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores) {
console.log(`A posição ${pos} tem os valores ${valores[pos]}`)
}

