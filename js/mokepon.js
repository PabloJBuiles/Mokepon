let ataqueJugador;
let ataqueEnemigo;
let nombreMascota;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciar() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  let botonFuego = document.getElementById("boton-atq-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-atq-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-atq-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
  let botonReiniciar = document.getElementById("boton-reset");
  botonReiniciar.addEventListener("click", reiniciarJuego);

  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "none";
  let sectionReset = document.getElementById("reiniciar");
  sectionReset.style.display = "none";
}

function seleccionarMascotaJugador() {
  EsHipoge = document.getElementById("hipoge").checked;
  EsCapipepo = document.getElementById("capipepo").checked;
  EsRatigueya = document.getElementById("ratigueya").checked;
  let mascotaJugadorText = document.getElementById("mascota-jugador");

  if (EsHipoge == true) {
    alert("Seleccionaste al Hipoge");
    mascotaJugadorText.innerHTML = "Hipoge";
    nombreMascota = "Hipoge";
  } else if (EsCapipepo == true) {
    alert("Seleccionaste al CAPIPEPO");
    mascotaJugadorText.innerHTML = "Capipepo";
    nombreMascota = "Capipepo";
  } else if (EsRatigueya == true) {
    alert("Seleccionaste al RATIGUEYA");
    mascotaJugadorText.innerHTML = "Ratigueya";
    nombreMascota = "Ratigueya";
  } else {
    alert("AUN NO HAS SELECCIONADO NINGUN MOKEPON");
  }

  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipoge";
    alert("El enemigo elijio Hipoge");
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
    alert("El enemigo elijio Capipepo");
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
    alert("El enemigo elijio Ratigueya");
  }
  let sectionSeleccionarMascota = document.getElementById(
    "seleccionar-mascota"
  );
  sectionSeleccionarMascota.style.display = "none";
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "flex";
}
function ataqueFuego() {
  ataqueJugador = "FUEGO 🔥";

  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "AGUA 🌊";

  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA 🌱";

  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO 🔥";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA 🌊";
  } else {
    ataqueEnemigo = "TIERRA 🌱";
  }
  combate();
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("resultado");
  let ataquesJugador = document.getElementById("ataque-jugador");
  let ataquesEnemigo = document.getElementById("ataque-enemigo");

  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado
  nuevoAtaqueJugador.innerHTML = ataqueJugador
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
 

  //sectionMensajes.appendChild(notificacion);
  ataquesJugador.appendChild(nuevoAtaqueJugador);
  ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("resultado");

  
  sectionMensajes.innerHTML = resultadoFinal;

  let botonFuego = document.getElementById("boton-atq-agua");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-atq-fuego");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-atq-tierra");
  botonTierra.disabled = true;

  let sectionReset = document.getElementById("reiniciar");
  sectionReset.style.display = "block";
}
function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "FUEGO 🔥" && ataqueEnemigo == "TIERRA 🌱") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
  } else if (ataqueJugador == "AGUA 🌊" && ataqueEnemigo == "FUEGO 🔥") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
  } else if (ataqueJugador == "TIERRA 🌱" && ataqueEnemigo == "AGUA 🌊") {
    crearMensaje("GANASTE");
    vidasEnemigo--;
  } else {
    crearMensaje("PERDISTE");
    vidasJugador--;
  }
  spanVidasEnemigo.innerHTML = vidasEnemigo;
  spanVidasJugador.innerHTML = vidasJugador;
  revisarVidas();
}
function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("Ganaste CRAKC!");
    alert("GANASTE");
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Perdiste MAAAAANCOOOOO!");

    alert("PERDISTE");
  }
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciar);
