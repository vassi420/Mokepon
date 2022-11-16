const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-seleccionar')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-planta')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
////////////////////////////
//    Variables globales
////////////////////////////
let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya

class mokepon {
    constructor(nombre, img, vida) {
        this.nombre = nombre
        this.img = img
        this.vida = vida
        this.ataques = []
    }     
}

let hipodoge = new mokepon ('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5)
let capipepo = new mokepon ('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5)
let ratigueya = new mokepon ('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-planta'},
)
capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)
ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'}, 
    { nombre: '🌱', id: 'boton-planta'},
)

mokepones.push(hipodoge, capipepo, ratigueya)

////////////////////////////
//    Iniciar juegos
////////////////////////////
function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
            <input type="radio" name="mascotas" id=${mokepon.nombre}>
            <label class="card-mokepones" for=${mokepon.nombre}>
            <img src=${mokepon.img} alt=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

        inputHipodoge = document.getElementById('Hipodoge')
        inputCapipepo = document.getElementById('Capipepo')
        inputRatigueya = document.getElementById('Ratigueya')

    })

    sectionReiniciar.style.display = 'none'

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    //por cada una de las variables/botones ("botonFuego") creamos un escuchador de eventos, creando una nueva funcion (ataqueFuego) cuando le demos click al boton de fuego
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

////////////////////////////
//    Seleccionar Mascotas
////////////////////////////
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    sectionSeleccionarAtaque.style.display = 'flex'

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
    } else {
        alert("Selecciona un MOKEPON!")
    }

    seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1,3)

    if (mascotaAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

////////////////////////////
//    Funciones para los ataques
////////////////////////////
function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()

}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }

    combate()
}
function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE! 👀")
    } else if ((ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') || (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') || (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA')) {
        crearMensaje("GANASTE! 🎉")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE! 😒")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    
    // revisar las vidas
     revisarVidas()

}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES! GANASTE 👌")
    } else if (vidasJugador == 0) {
        crearMensajeFinal('PERDISTE! A SEGUIR INTENTANDO. ❌')
    }
}


////////////////////////////
//    Funciones para mensajes
////////////////////////////

function crearMensaje(resultado) {
    // CREAMOS UN PARRAFO, ELEMENTO TIPO "P"
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    //a este PARRAFO le estamos METIENDO un texto
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    //METEMOS el parrafo que creamos anterior mente dentro de la seccion "mensajes"
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//esta funcion de mensaje final, crea la logica de ó perdimos ó ganamos
function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal



    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = "block"
}

function reiniciarJuego(){
    location.reload()
}

////////////////////////////
//    Funciones aleatoria
////////////////////////////
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

// NOTA: esta es otra manera de llamar al script despues de que se cargue todo el HTML. 
// La funcion iniciarJuego se carga cuando ya todo el contenido esta cargado.
window.addEventListener('load', iniciarJuego)

