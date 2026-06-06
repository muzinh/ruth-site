const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    document
    .getElementById("contador")
    .scrollIntoView();

});

const dataInicio = new Date("2025-06-24T09:30:00");

function atualizarContador(){

    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(
        diferenca / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferenca / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferenca / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferenca / 1000) % 60
    );

    document.getElementById("tempo").innerHTML =
        `${dias} dias<br>
         ${horas} horas<br>
         ${minutos} minutos<br>
         ${segundos} segundos`;

}

setInterval(atualizarContador, 1000);

atualizarContador();