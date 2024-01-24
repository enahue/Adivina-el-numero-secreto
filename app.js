let numeroSecreto = generarNumeroSecreto();

function asignarTextolemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}
function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextolemento("p", "¡Has acertado!");
  } else {
    asignarTextolemento("p", "Intenta otra vez");
  }
}
function generarNumeroSecreto(){
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextolemento("h1", "Adivina el número secreto");
asignarTextolemento("p", "Escribe un número del 1 al 10");