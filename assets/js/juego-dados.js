let cantidadJugadas = 0;
let victoriasHumano = 0;
let victoriasMaquina = 0;
let empates = 0;
let resultado = ""


function main() {
    cantidadJugadas = Number(prompt("Ingresa la cantidad de jugadas:"));

    for (let index = 1; index <= cantidadJugadas; index++) {
        jugar(index);
    }
    
    resultado += "Victorias humano: " + victoriasHumano;
    resultado += "\nVictorias Máquina: " + victoriasMaquina;
    resultado += "\nEmpates: " + empates;

    alert(resultado);

    //ESTRURA CONDICIONAL PARA VERIFICAR QUIÉN GANÓ FINALMENTE

    alert("Juego terminado...");
}

function lanzarDados(){
    let resultado =  Math.floor(Math.random() * (7 - 1) + 1);
    return resultado;
}


//función encarga de realizar cada una de las jugadas
function jugar(partida){
    alert("Inicia la partida: "+ partida);
    let jugadaHumano = lanzarDados();
    alert("Jugador 1, obtuviste un: " + jugadaHumano);
    let jugadaMaquina = lanzarDados();
    alert("Maquina,  obtuviste un: " + jugadaMaquina);

    if( jugadaHumano > jugadaMaquina){
        victoriasHumano++;
        alert("Ganaste esta jugada!");
    }else if (jugadaHumano < jugadaMaquina){
        victoriasMaquina++;
        alert("Esta jugada la la máquina!");
    }else {
        empates++;
        alert("Esta jugada ha sido empate.")
    }
}

//EJECUTAMOS FUNCIÓN QUE ARRANCA EL JUEGO
main();
