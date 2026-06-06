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

const fotos = document.querySelectorAll(".foto");

const modal = document.getElementById("modal");

const imagemModal =
document.getElementById("imagemModal");

const fechar =
document.getElementById("fechar");

fotos.forEach(foto => {

    foto.addEventListener("click", () => {

        modal.style.display = "flex";

        imagemModal.src = foto.src;

    });

});

fechar.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", () => {

    modal.style.display = "none";

});

const naoBtn = document.getElementById("naoBtn");

naoBtn.addEventListener("mouseover", () => {

    const x = Math.random() * 300 - 150;

    const y = Math.random() * 300 - 150;

    naoBtn.style.transform =
        `translate(${x}px, ${y}px)`;

});

document
.getElementById("simBtn")
.addEventListener("click", () => {

    alert("Eu te amo ❤️");

});
