const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-seleccionar')
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

const contenedorAtaques = document.getElementById('contenedor-ataques')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')
const anchoMaximoDelMapa = 450
////////////////////////////
//    Variables globales
////////////////////////////
let mokepones = []
let ataqueJugador
let ataqueEnemigo = []
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3

let botonFuego
let botonAgua
let botonTierra
let botones = []

let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya

let mascotaJugador
let ataquesMokepon
let ataquesMokeponEnemigo

let ataqueAlJugador = []

let indexAtaqueJugador
let indexAtaqueEnemigo

let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './assets/mokemap.png'

let mascotaJugadorObjeto

let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20

if (anchoDelMapa > anchoMaximoDelMapa) {
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class mokepon {
    constructor(nombre, img, vida, fotoMapa) {
        this.nombre = nombre
        this.img = img
        this.vida = vida
        this.ataques = []
        this.ancho = 80
        this.alto = 80
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    
    pintarMokepon() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
}

let hipodoge = new mokepon ('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')
let capipepo = new mokepon ('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png')
let ratigueya = new mokepon ('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png')
let tucapalma = new mokepon ('Tucapalma', './assets/mokepons_mokepon_tucapalma_attack.png', 5, './assets/mokepons_mokepon_tucapalma_attack.png')
let pydos = new mokepon ('Pydos', './assets/mokepons_mokepon_pydos_attack.png', 5, './assets/mokepons_mokepon_pydos_attack.png')
let langostelvis = new mokepon ('Langostelvis', './assets/mokepons_mokepon_langostelvis_attack.png', 5, './assets/mokepons_mokepon_langostelvis_attack.png')

let hipodogeEnemigo = new mokepon ('Hipodoge', './assets/mokepons_mokepon_hipodoge_attack.png', 5, './assets/hipodoge.png')
let capipepoEnemigo = new mokepon ('Capipepo', './assets/mokepons_mokepon_capipepo_attack.png', 5, './assets/capipepo.png')
let ratigueyaEnemigo = new mokepon ('Ratigueya', './assets/mokepons_mokepon_ratigueya_attack.png', 5, './assets/ratigueya.png')


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
tucapalma.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'}, 
    { nombre: '🌱', id: 'boton-planta'},
)
pydos.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'}, 
    { nombre: '🌱', id: 'boton-planta'},
)
langostelvis.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'}, 
    { nombre: '🌱', id: 'boton-planta'},
)

hipodogeEnemigo.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-planta'},
)
capipepoEnemigo.ataques.push(
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '🌱', id: 'boton-planta'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)
ratigueyaEnemigo.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'}, 
    { nombre: '🌱', id: 'boton-planta'},
)

mokepones.push(hipodoge, capipepo, ratigueya, tucapalma, pydos, langostelvis)

////////////////////////////
//    Iniciar juegos
////////////////////////////
function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'

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
        inputTucapalma = document.getElementById('Tucapalma')
        inputPydos = document.getElementById('Pydos')
        inputLangostelvis = document.getElementById('Langostelvis')

    })

    sectionReiniciar.style.display = 'none'
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    //por cada una de las variables/botones ("botonFuego") creamos un escuchador de eventos, creando una nueva funcion (ataqueFuego) cuando le demos click al boton de fuego
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

////////////////////////////
//    Seleccionar Mascotas
////////////////////////////
function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = 'none'
    
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = inputTucapalma.id
        mascotaJugador = inputTucapalma.id
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = inputLangostelvis.id
        mascotaJugador = inputLangostelvis.id
    }else {
        alert("Selecciona un MOKEPON!")
    }

    extraerAtaques(mascotaJugador)
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()
}
function seleccionarMascotaEnemigo(enemigo) {
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    secuenciaAtaque()
}

function extraerAtaques(mascotaJugador) {
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
         ataquesMokepon = `
         <button class="boton-de-ataque BAtaque" id=${ataque.id}>${ataque.nombre}</button>
         `
        contenedorAtaques.innerHTML += ataquesMokepon
    })

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-planta')
    botones = document.querySelectorAll('.BAtaque')
}

function secuenciaAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === '🔥') {
                ataqueAlJugador.push('FUEGO')
                console.log(ataqueAlJugador)
                boton.style.background = 'black'
                boton.disabled = true
            } else if (e.target.textContent === '💧') {
                ataqueAlJugador.push('AGUA')
                console.log(ataqueAlJugador)
                boton.style.background = 'black'
                boton.disabled = true
            } else {
                ataqueAlJugador.push('TIERRA')
                console.log(ataqueAlJugador)
                boton.style.background = 'black'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

////////////////////////////
//    Funciones para los ataques
////////////////////////////
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1)

    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea() {
    if (ataqueAlJugador.length === 5) {
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo) {
    indexAtaqueJugador = ataqueAlJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate() {
    
    for (let index = 0; index < ataqueAlJugador.length; index++) {
        if (ataqueAlJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE! 👀")
        } else if (ataqueAlJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA' || ataqueAlJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO' || ataqueAlJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA') {
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE! 🎉")
            vidasEnemigo--
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            indexAmbosOponentes(index, index)
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }
        
    }
    revisarVidas()
}

function revisarVidas() {
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("Esto fue un EMPATE!")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES! GANASTE 👌")
    } else {
        crearMensajeFinal("PERDISTE!, el enemigo gano.❌")
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
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
    //METEMOS el parrafo que creamos anterior mente dentro de la seccion "mensajes"
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

//esta funcion de mensaje final, crea la logica de ó perdimos ó ganamos
function crearMensajeFinal(resultadoFinal) {

    sectionMensajes.innerHTML = resultadoFinal

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

function pintarCanvas(){
    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
            mapaBackground,
            0,
            0,
            mapa.width,
            mapa.height,
        )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
     if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
        revisarColision(hipodogeEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigueyaEnemigo)
     }
}

function moverArriba() {
    mascotaJugadorObjeto.velocidadY = -5
}
function moverAbajo() {
    mascotaJugadorObjeto.velocidadY = +5
}
function moverDerecha() {
    mascotaJugadorObjeto.velocidadX = 5
}
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadX = -5
}

function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}

function sePresionoUnaTecla(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
                moverDerecha()
                break
        default:
            break
    }
}
function iniciarMapa() {
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)

    intervalo = setInterval(pintarCanvas, 50)

    window.addEventListener('keydown', sePresionoUnaTecla)

    window.addEventListener('keyup', detenerMovimiento)
}
function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre) {
            return mokepones[i]
        }
    }
}

function revisarColision(enemigo) {
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x
    if (
        abajoMascota < arribaEnemigo ||
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'flex'
    sectionVerMapa.style.display = 'none'
    seleccionarMascotaEnemigo(enemigo)
}

// NOTA: esta es otra manera de llamar al script despues de que se cargue todo el HTML. 
// La funcion iniciarJuego se carga cuando ya todo el contenido esta cargado.
window.addEventListener('load', iniciarJuego)

