function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours(); //hora do dia 
    //var hora = 19;
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) { //se for maior q 0 e menor q 12 é de manhã
        // BOM DIA
        img.src = 'fotomanhaP.png'
        document.body.style.background = 'rgb(187,176,156)'
    }else if (hora >= 12 && hora < 18) { // se for maior q 12 e menor q 18 é de tarde
        // BOA TARDE
        img.src = 'fototardeP.png'
        document.body.style.background = 'rgb(227,199,160)'
    }else {                             // se for maior q 18 é de noite
        // BOA NOITE
        img.src = 'fotonoiteP.png'
        document.body.style.background = 'rgb(25,43,55)' // imagem de fundo de acordo com a hr do dia
    }
}