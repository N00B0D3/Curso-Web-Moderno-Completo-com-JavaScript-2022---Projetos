const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e OO

//a função bind faz com que o THIS direcione novamente para a variavel pessoa
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()