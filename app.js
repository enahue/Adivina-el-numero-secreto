// Declaramos las variables globales
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

// Esta función establece las condiciones iniciales del juego
function condicionesIniciales() {
  // Validamos el campo de entrada del usuario
  validacionDeCampo();
  // Asignamos el texto a los elementos HTML
  asignarTextolemento("h1", "Adivina el número secreto");
  asignarTextolemento("p", `Escribe un número del 1 al ${numeroMaximo}`);
  // Generamos el número secreto
  numeroSecreto = generarNumeroSecreto();
  // Inicializamos los intentos
  intentos = 1;
  // Habilitamos el botón de intentar
  document.getElementById("intentar").removeAttribute("disabled");
}

// Esta función valida el campo de entrada del usuario
function validacionDeCampo() {
  // Obtenemos el valor del campo de entrada del usuario
  let valorUsuario = document.getElementById("valorUsuario").value;
  // Si el campo de entrada está vacío, mostramos un mensaje de error
  if (valorUsuario === "" || valorUsuario === null) {
    asignarTextolemento("p", "No has ingresado ningún número");
  } else {
    // Si el campo de entrada no está vacío, verificamos el intento del usuario
    verificarIntento();
  }
}
// Esta función asigna un texto a un elemento HTML
function asignarTextolemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
}
// Esta función verifica el intento del usuario
function verificarIntento() {
  // Obtenemos el número ingresado por el usuario
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  // Si el número del usuario es igual al número secreto
  if (numeroUsuario === numeroSecreto) {
    // Informamos al usuario que ha acertado y mostramos el número de intentos
    asignarTextolemento(
      "p",
      `¡Has acertado! El número secreto era  ${numeroSecreto} y lo has adivinado en ${intentos} ${
        intentos === 1 ? "intento" : "intentos"
      }.`
    );
    // Deshabilitamos el botón de intentar y habilitamos el botón de reiniciar
    document.getElementById("intentar").setAttribute("disabled", true);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // Si el número del usuario es mayor al número secreto, informamos al usuario
    if (numeroUsuario > numeroSecreto) {
      asignarTextolemento("p", "El número secreto es menor");
    } else {
      // Si el número del usuario es menor al número secreto, informamos al usuario
      asignarTextolemento("p", "El número secreto es mayor");
    }
    // Incrementamos el número de intentos y limpiamos el campo de entrada del usuario
    intentos++;
    limpiarInput();
  }
}
// Esta función limpia el campo de entrada del usuario
function limpiarInput() {
  document.getElementById("valorUsuario").value = "";
}
// Esta función reinicia el juego
function reiniciarJuego() {
  // Limpiamos el campo de entrada del usuario
  limpiarInput();
  condicionesIniciales();
  // Deshabilitamos el botón de reiniciar
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
// Esta función genera un número secreto
function generarNumeroSecreto() {
  // Generamos un número aleatorio entre 1 y el número máximo
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  // Si ya se han generado todos los números posibles, informamos al usuario
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextolemento("p", "No hay más números para adivinar <br> !presiona (F5) para reiniciar¡");
    document.getElementById("intentar").setAttribute("disabled", true);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // Si el número generado ya ha sido sorteado, generamos otro número
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      // Si el número generado no ha sido sorteado, lo agregamos a la lista de números sorteados y lo retornamos
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

// Establecemos las condiciones iniciales al cargar la página
condicionesIniciales();
