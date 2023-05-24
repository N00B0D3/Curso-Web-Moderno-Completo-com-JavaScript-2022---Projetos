function Pessoa() {
    this.idade = 0

    const self = this //outra forma de driblar o this que varia
    //setInterval faz com que a função seja chamada a cada x milisegundos
    setInterval(function() {
        self.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000) // 1000 milisegundos = 1 seg
}

new Pessoa