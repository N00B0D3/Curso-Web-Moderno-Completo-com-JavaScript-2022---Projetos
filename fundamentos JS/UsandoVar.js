{
    {
        {
            {
                 var sera = 'será???' //var esta visivel tanto dentro como fora do bloco
                 console.log(sera)                
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123 //quando var esta dentro de uma função, ela estara visivel apenas no escopo da função
    console.log(local)
}

teste()
console.log(local) //local não definido pois está visivel apenas no escopo da função

//evitar criar VAR com escopo global pois o valor pode ser reescrito 