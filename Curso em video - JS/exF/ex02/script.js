function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        img.src = 'imagens/manhã.png'
        document.body.style.background = '#cbcbc8'
    } else if (hora >=12 && hora <= 18) {
        img.src = 'imagens/tarde.png'
        Document.body.style.background = '#a64913'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#00202e'
    }
}

