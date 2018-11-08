
// Use variáveis para os elementos. Nesse caso, pra modal
var modal = document.getElementById('myModal');

// Botão de abrir a modal (variável)
var btn = document.getElementById('myBtn');

// elemento que fecha a modal (variável)
var fecha = document.getElementsByClassName("close")[0];

// O que acontece quando clica no botão? A modal aparece. 
btn.onclick = function() {
    modal.style.display = "block";
}

// o que acontece quando clica em <fecha> (x)? A modal desaparece.
fecha.onclick = function() {
    modal.style.display = "none";
}

// E se clicar fora da modal? some tbm. Nesse caso abaixo se clicar na modal n acontece nada.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}