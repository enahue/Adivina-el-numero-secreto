let titulo = document.querySelector('h1');
titulo.innerHTML = 'Adivina el número secreto';

let mensaje = document.querySelector('p');
mensaje.innerHTML = 'Escribe un número del 1 al 10';

function intentoDeUsuario() {
  let numero = document.querySelector('input').value;
  if (numero == 2) {
    mensaje.innerHTML = '¡Has acertado!';
  } else {
    mensaje.innerHTML = 'Intenta otra vez';
  }
}