var altura = 0
var largura = 0
var vidas = 1
var tempo = 60

var criaMosquitoTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
	criaMosquitoTempo = 2000
} else if(nivel === 'dificil'){
	criaMosquitoTempo = 1500
} else if(nivel === 'matrix'){
	criaMosquitoTempo = 1000
}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

var cronometro = setInterval(function() {
	tempo -= 1
	if(tempo < 0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = vitoria.html
	} else{
	document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

function rp(){

	// remover o mosquito anterior caso exista
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()

		if(vidas > 3){
			// game over
			window.location.href = 'fim_de_jogo.html'
		} else{

		document.getElementById("c" + vidas).src = "imagens/coracao_vazio.png"

		vidas++
	}
}

var posx = Math.floor(Math.random() * largura) - 90
var posy = Math.floor(Math.random() * altura) - 90

// criar o elemento html
posx = posx < 0 ? 0 : posx
posy = posy < 0 ? 0 : posx

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posx + 'px'
mosquito.style.top = posy + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function() {
	this.remove()
}

document.body.appendChild(mosquito)

}

function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito2'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'


	}
}

function ladoAleatorio(){

	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
	}

}