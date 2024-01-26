let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales() {
  validacionDeCampo();
  asignarTextolemento("h1", "Adivina el número secreto");
  asignarTextolemento("p", `Escribe un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  document.getElementById("intentar").removeAttribute("disabled");
}

function validacionDeCampo() {
  let valorUsuario = document.getElementById("valorUsuario").value;
  if (valorUsuario === "" || valorUsuario === null) {
    asignarTextolemento("p", "No has ingresado ningún número");
  } else {
    verificarIntento();
  }
}

function asignarTextolemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}
function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextolemento(
      "p",
      `¡Has acertado! El número secreto era  ${numeroSecreto} y lo has adivinado en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }.`
    );
    document.getElementById("intentar").setAttribute("disabled", true);
    document.getElementById("reiniciar").removeAttribute("disabled");
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
  limpiarInput();
  condicionesIniciales();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextolemento("p", "No hay más números para adivinar <br> !presiona (F5) para reiniciar¡");
    document.getElementById("intentar").setAttribute("disabled", true);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

condicionesIniciales();
