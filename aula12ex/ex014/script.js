function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 23
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = '/imagens/manha.png'
        document.body.style.background = 'rgb(140, 155, 4)'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = '/imagens/tarde.png'
        document.body.style.background = 'rgb(179, 63, 21)'
    } else {
        //boa noite
        img.src = '/imagens/noite.png'
        document.body.style.background = 'rgb(4, 0, 58)'
    }
}