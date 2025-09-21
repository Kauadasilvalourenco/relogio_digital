let relogio = document.querySelectorAll("div");

setInterval(() => {
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    relogio[0].textContent = `${formatarTempo(hora)}`;
    relogio[1].textContent = `${formatarTempo(minutos)}`;
    relogio[2].textContent = `${formatarTempo(segundos)}`;
}, 1000);

function formatarTempo(tempo) {
    if (tempo < 10) {
        return "0" + tempo;
    } else {
        return tempo;
    }
}