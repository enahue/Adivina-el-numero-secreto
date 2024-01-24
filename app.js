let numeroSecreto = generarNumeroSecreto();

function asignarTextolemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}
function intentoDeUsuario() {
  let numero = parseInt(document.querySelector("input").value);
  if (numero === 2) {
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