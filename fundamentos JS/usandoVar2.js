var numero = 1
{
    var numero = 2 //valor 2 sobrescreve o valor 1 pois está no escopo global (fora de função) 
    console.log('dentro=', numero)
}

console.log('fora=', numero)