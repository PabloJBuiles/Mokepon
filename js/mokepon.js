const botonMascotaJugador = document.getElementById("boton-mascota");
const botonFuego = document.getElementById("boton-atq-fuego");
const botonAgua = document.getElementById("boton-atq-agua");
const botonTierra = document.getElementById("boton-atq-tierra");
const botonReiniciar = document.getElementById("boton-reset");
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReset = document.getElementById("reiniciar");
const mascotaJugadorText = document.getElementById("mascota-jugador");

  const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
 const sectionSeleccionarMascota = document.getElementById(
    "seleccionar-mascota"
  );
const sectionMensajes = document.getElementById("resultado");
  const ataquesJugador = document.getElementById("ataque-jugador");
  const ataquesEnemigo = document.getElementById("ataque-enemigo");
const spanVidasJugador = document.getElementById("vidas-jugador");
  const spanVidasEnemigo = document.getElementById("vidas-enemigo");
  const contenedorDeTarjetas = document.getElementById("contenedor-tarjetas");
  
let mokepones = []
let ataqueJugador;
let ataqueEnemigo;
let mascotaJugador;
let vidasJugador = 3;
let vidasEnemigo = 3;
let opcionDEMokepones;




class Mokepon{
  constructor(nombre, foto, vida){
    this.nombre = nombre
    this.foto = foto
    this.vida = vida
    this.ataques = []
  }
}


let hipoge = new Mokepon('Hipoge','./assets/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo = new Mokepon('Capipepo','./assets/mokepons_mokepon_capipepo_attack.png',5)
let ratigueya = new Mokepon('Ratigueya','./assets/mokepons_mokepon_ratigueya_attack.png',5)

hipoge.ataques.push(
  {nommbre: '🌊', id: 'boton-atq-agua'},
  {nommbre: '🌊', id: 'boton-atq-agua'},
  {nommbre: '🌊', id: 'boton-atq-agua'},
  {nommbre: '🔥', id: 'boton-atq-fuego'},
  {nommbre: '🌱', id: 'boton-atq-tierra'},
)
capipepo.ataques.push(
  {nommbre: '🌱', id: 'boton-atq-tierra'},
  {nommbre: '🌱', id: 'boton-atq-tierra'},
  {nommbre: '🌱', id: 'boton-atq-tierra'},
  {nommbre: '🌊', id: 'boton-atq-agua'},
  {nommbre: '🔥', id: 'boton-atq-fuego'},

)
ratigueya.ataques.push(
  {nommbre: '🔥', id: 'boton-atq-fuego'},
  {nommbre: '🔥', id: 'boton-atq-fuego'},
  {nommbre: '🔥', id: 'boton-atq-fuego'},
  {nommbre: '🌊', id: 'boton-atq-agua'},
  {nommbre: '🌱', id: 'boton-atq-tierra'},
)

mokepones.push(hipoge,capipepo,ratigueya);
console.log(mokepones);

function iniciar() {
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonTierra.addEventListener("click", ataqueTierra);
  botonReiniciar.addEventListener("click", reiniciarJuego);
  sectionSeleccionarAtaque.style.display = "none";
  sectionReset.style.display = "none";

  mokepones.forEach((mokepones)=>{
          opcionDEMokepones =  `
          <input type="radio" name="mascota" id=${mokepones.nombre} />
          <label for=${mokepones.nombre} class="tarjeta-de-mokepon">
              <p>${mokepones.nombre}</p>
              <img src=${mokepones.foto} alt=${mokepones.nombre}/>
          </label>
          `
          contenedorDeTarjetas.innerHTML += opcionDEMokepones;
          EsHipoge = document.getElementById("Hipoge")
          EsCapipepo = document.getElementById("Capipepo")
          EsRatigueya = document.getElementById("Ratigueya")
  })




}


function seleccionarMascotaJugador() {



  if (EsHipoge.checked) {
   
    mascotaJugadorText.innerHTML = EsHipoge.id;
    mascotaJugador = EsHipoge.id;
    seleccionarMascotaEnemigo();
  } else if (EsCapipepo.checked) {
    
    mascotaJugadorText.innerHTML = EsCapipepo.id;
    mascotaJugador = EsCapipepo.id;
    seleccionarMascotaEnemigo();
  } else if (EsRatigueya.checked) {
    
    mascotaJugadorText.innerHTML = EsRatigueya.id;
    mascotaJugador = EsRatigueya.id;
    seleccionarMascotaEnemigo();
  } else {
    alert("AUN NO HAS SELECCIONADO NINGUN MOKEPON");
  }

  
}
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length -1);
  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;

  sectionSeleccionarMascota.style.display = "none";
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
  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

  //sectionMensajes.appendChild(notificacion);
  ataquesJugador.appendChild(nuevoAtaqueJugador);
  ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  
  document.getElementById("boton-atq-agua").style.background = "#2b6361";
  document.getElementById("boton-atq-fuego").style.background = "#2b6361";
  document.getElementById("boton-atq-tierra").style.background = "#2b6361";

  sectionMensajes.innerHTML = resultadoFinal;

  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;

  let sectionReset = document.getElementById("reiniciar");
  sectionReset.style.display = "block";

}
function combate() {
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
  } else if (vidasJugador == 0) {
    crearMensajeFinal("Perdiste MAAAAANCOOOOO!");
  }
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciar);
