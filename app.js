let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarTextolemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}
function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextolemento("p", `¡Has acertado! El número secreto era  ${numeroSecreto} y lo has adivinado en ${intentos} ${intentos === 1 ? "intento" : "intentos"}.`);

    document.getElementById("reiniciar").removeAttribute('disabled');

  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextolemento("p", "El número secreto es menor");
    } else {
      asignarTextolemento("p", "El número secreto es mayor");
    }
    intentos++;
    limpiarInput();
  }
}
function limpiarInput() {
  document.getElementById("valorUsuario").value = "";
}
function reiniciarJuego() {
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  asignarTextolemento("p", "Escribe un número del 1 al 10");
  limpiarInput();
  document.getElementById("reiniciar").setAttribute('disabled', true);
}
function generarNumeroSecreto() {
  return Math.floor(Math.random() * 10) + 1;
}

asignarTextolemento("h1", "Adivina el número secreto");
asignarTextolemento("p", "Escribe un número del 1 al 10");
