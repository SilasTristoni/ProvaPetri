function calculo() {
    let buffet = document.querySelector("#buffet");
    let consumo = document.querySelector("#consumo");
    let resPagamento = document.querySelector("#resPagamento");
    

    //Cálculo do valor consumido
    let kilo = Number(consumo.value) / 1000;
    let valor = Number(kilo) * Number(buffet.value);

    resPagamento.innerHTML = `<p>Valor a pagar: R$ ${valor.toFixed(2)}</p>`;
}
let botao = document.querySelector("#botao");
botao.addEventListener("click", function() {
    calculo();
});