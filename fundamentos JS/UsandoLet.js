var numero = 1
{
    let numero = 2  // let da preferencia para a variavel no escopo menor (no bloco neste caso)
    console.log('dentro=', numero)
}

console.log('fora=', numero)

//variaveis definidas com VAR tem escopo global e de função
//variaveis definidas com LET tem escopo global, de função e de bloco