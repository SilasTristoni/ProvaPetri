function calculo() {
    let titulo = document.querySelector("#titulo");
    let duracao = document.querySelector("#duracao");
    let resTitulo = document.querySelector("#resTitulo");
    let resDuracao = document.querySelector("#resDuracao");

    //Cálculo do tempo total
    let hora = Math.floor(Number(duracao.value) / 60);
    let minuto = Number(duracao.value) % 60;

    resTitulo.innerText = `Título: ${titulo.value}`;
    resDuracao.innerHTML = `<p>Duração: ${hora} horas e ${minuto} minutos</p>`;
}
let botao = document.querySelector("#botao");
botao.addEventListener("click", function() {
    calculo();
});