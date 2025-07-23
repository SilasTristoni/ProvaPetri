function calculo() {
    let valorInput = document.querySelector("#valor");
    let tempoInput = document.querySelector("#tempo");
    let resValor = document.querySelector("#resValor");

    let valor = Number(valorInput.value);
    let tempo = Number(tempoInput.value);

    tempo = Math.ceil(tempo / 15);
    let total = valor * tempo;

    resValor.innerHTML = `<p>Valor a pagar: R$ ${total.toFixed(2)}</p>`;
}

let botao = document.querySelector("#botao");
botao.addEventListener("click", function() {
    calculo();
});