// Se definen las variables -y las jugadas son un ARRAY
let jugadas = ['1', '2', '3'];
let puntajeUser = 0;
let puntajeMaquina = 0;

// Se pide al usuario ingrese cuántas veces consecutivas quiere jugar
let numeroJuagadas = parseInt(prompt('¿Cuántas veces deseas jugar en este torneo?'));

// Se inicia CredentialsContainer, donde "i" representa cada ciclo
// Se define la variable i = 1, porque inicia en 1 -para que el usuario pueda elegir desde dicha opción-
// i <= numeroJugas, porque puede elegir entre las 3 jugadas posibles
// i++ para que incremente en 1 cada vez hasta terminar el ciclo

for (let i = 1; i <= numeroJuagadas; i++) {

    let jugadaUser = prompt('Ingresa tu jugada: \n1 para Piedra\n2 para Papel\n3 para tijera')

    // Como los "if" sólo se ejecuta si la condición es verdadera
    // la condición es: if (condicion)

    let noCumple = false

    if (!jugadas.includes(jugadaUser)) {

        noCumple = true;
    }

    while (noCumple) {
        jugadaUser = prompt('Ingresaste una opción inválida. Ingresa:\n1 para Piedra\n2 para Papel\n3 para tijera')

        if (jugadas.includes(jugadaUser)) {
            noCumple = false
        }
    }

    let indiceMaquina = Math.floor(Math.random() * jugadas.length)

    let opcionMaquina = jugadas[indiceMaquina]

    if (jugadaUser === opcionMaquina) {
        alert(`Empate - La máquina elige ${opcionMaquina} y tú elegiste ${jugadaUser}`)
    } else if (
        (jugadaUser === '1' && opcionMaquina === '3') ||
        (jugadaUser === '2' && opcionMaquina === '1') ||
        (jugadaUser === '3' && opcionMaquina === '2')
    ) {
        puntajeUser += 1;
        alert(`Ganaste - La máquina elige ${opcionMaquina} y tú elegiste ${jugadaUser}`)
    } else {
        puntajeMaquina += 1;
        alert(`Perdiste - La máquina elige ${opcionMaquina} y tú elegiste ${jugadaUser}`)
    }
};

if (puntajeUser === puntajeMaquina) {
    alert('Empate')
} else if (puntajeUser > puntajeMaquina) {
    alert('Ganaste el Torneo')
} else {
    alert('Perdiste el Torneo')
};