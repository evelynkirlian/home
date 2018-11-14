function typeWriter(elemento) {
	const textoArray = elemento.innerHTML.split('');
	elemento.innerHTML = '';

	var escrever = function(letra, i){

		var add = function() {
			elemento.innerHTML += letra;
		}

		setTimeout(add, 50*i)
	}

	textoArray.forEach(escrever);
}

const titulo = document.querySelector('h3');
typeWriter(titulo);
typeWriter(document.querySelector('.texto'));