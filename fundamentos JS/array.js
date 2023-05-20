const valores = [7.7, 8.8, 9.2, 6.3]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined para indicies que não existem

valores[4] = 10 //usando cochete para alterar/adicionar um valor
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste') // adicionar elementos ao array
console.log(valores)

console.log(valores.pop()) // excluir ultimo elemento do array
delete valores[0] //excluir valor do objeto
console.log(valores)

console.log(typeof valores)