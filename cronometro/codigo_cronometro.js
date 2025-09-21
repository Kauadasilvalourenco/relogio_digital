let cronometro = document.querySelectorAll("div.cronometro");
let areaMostrarVolta = document.querySelector("section#area_mostrar_volta");
let botaoIniciarCronometro = document.querySelector("input#botao_iniciar_cronometro");
let botaoPausarCronometro = document.querySelector("input#botao_pausar_cronometro");
let botaoMarcarVolta = document.querySelector("input#botao_marcar_volta");
let botaoReiniciarCronometro = document.querySelector("input#botao_reiniciar_cronometro");

botaoIniciarCronometro.addEventListener("click", iniciarCronometro);
botaoPausarCronometro.addEventListener("click", pausarCronometro);
botaoMarcarVolta.addEventListener("click", marcarVolta);
botaoReiniciarCronometro.addEventListener("click", reiniciarCronometro);

let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let temporizadorID = 0;
let contadorVoltas = 0;

function iniciarCronometro() {
    if (temporizadorID) {
        return;
    }

    botaoIniciarCronometro.style.display = "none"
    botaoPausarCronometro.style.display = "block"
    botaoMarcarVolta.style.display = "block"
    botaoReiniciarCronometro.style.display = "block"

    temporizadorID = setInterval(() => {
        milisegundos++

        if (milisegundos === 100) {
            milisegundos = 0;
            segundos++
        }

        if (segundos === 60) {
            segundos = 0;
            minutos++
        }

        cronometro[0].textContent = `${formatarTempo(minutos)}`
        cronometro[1].textContent = `${formatarTempo(segundos)}`
        cronometro[2].textContent = `${formatarTempo(milisegundos)}`
    }, 10)
}

function pausarCronometro() {
    botaoPausarCronometro.style.display = "none";

    clearInterval(temporizadorID);
    temporizadorID = null;
    botaoIniciarCronometro.style.display = "block"
}

function marcarVolta() {
    let tempoVolta = 0;
    let marcaMinutos = 0;
    let marcaSegundos = 0;
    let marcaMilisegundos = 0;

    contadorVoltas++

    marcaMinutos = cronometro[0].textContent;
    marcaSegundos = cronometro[1].textContent;
    marcaMilisegundos = cronometro[2].textContent;

    tempoVolta = `${marcaMinutos}:${marcaSegundos}.${marcaMilisegundos}`
    console.log(tempoVolta);

    let mostrarVolta = document.createElement("div");
    mostrarVolta.textContent = `${contadorVoltas}° volta: ${tempoVolta}`;
    areaMostrarVolta.appendChild(mostrarVolta);
}

function reiniciarCronometro() {
    botaoIniciarCronometro.style.display = "block"
    botaoPausarCronometro.style.display = "none"
    botaoMarcarVolta.style.display = "none"

    clearInterval(temporizadorID);
    temporizadorID = null;

    minutos = 0;
    segundos = 0;
    milisegundos = 0;

    cronometro[0].textContent = "00";
    cronometro[1].textContent = "00";
    cronometro[2].textContent = "00";
    
    botaoReiniciarCronometro.style.display = "none"
}

function formatarTempo(tempo) {
    if (tempo < 10) {
        return "0" + tempo;
    } else {
        return tempo;
    }
}