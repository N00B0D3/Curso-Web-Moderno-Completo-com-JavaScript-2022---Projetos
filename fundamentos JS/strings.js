const escola = "Cod3r"

console.log(escola.charAt(4)) //quarta letra do "Cod3r"
console.log(escola.charAt(5)) //quinta letra do "Cod3r"
console.log(escola.charCodeAt(3)) //codigo relacionado ao indice 3
console.log(escola.indexOf('3')) // indice 3 dentro do "cod3r"

console.log(escola.substring(1)) // a partir do indice 1 ate o final
console.log(escola.substring(0, 3)) // vai do indice 0 ate o 3 sem incluir o indice 3

console.log('escola'.concat(escola).concat("!")) //concatenando ums string antes e depois da const "Cod3r"
console.log('escola' + escola + "!") //mesmo resultado da concatenação
console.log(escola.replace(3, 'e')) //substituir o "3" por "e"

console.log('Ana, Maria, Pedro'.split(',')) //gerou um array com 3 elementos independentes a partir da ,
