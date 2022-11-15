function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🗿"
    } else if (jugada == 2) {
        resultado = "Papel 📃"
    } else if (jugada == 3) {
        resultado = "Tijera ✂️​"
    } else {
        resultado = "null"
    }
    return resultado
}

function combate() {
    resultadocombate = ""

    if (pc == jugador) {
        resultadocombate = "EMPATE!"
    } else if ((jugador == 1 && pc == 3) || (jugador == 2 && pc == 1) || (jugador == 3 && pc == 2)) {
        resultadocombate = "GANASTE!"
    } else {
        resultadocombate = "PERDISTE!"
    }
    alert(resultadocombate)
}

let jugador = 0
let pc = 0
let victorias = 0
let derrotas = 0
let empates = 0

while (victorias < 3 && derrotas < 3) {
    pc = aleatorio(1, 3)
    jugador = prompt("1: PIEDRA || 2: PAPEL ||  3: TIJERAS")

    alert("PC elije: " + eleccion(pc))
    alert("Vos elegis: " + eleccion(jugador))

    //invocamos a la funcion "combate"
    combate()

    //gracias al while le decimos que cada vez que resultadocombate tenga un resultado le asigne uno mas a la variable creada
    if (resultadocombate == "GANASTE!") {
        victorias++
    } else if (resultadocombate == "PERDISTE!") {
        derrotas++
    } else {
        empates++
    }
}

alert("Ganaste " + victorias + " veces! - Perdiste " + derrotas + " veces... - tus empates: " + empates)