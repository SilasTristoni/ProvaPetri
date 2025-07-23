function calculo() {
    let medicamento = document.querySelector("#medicamento");
    let preco = document.querySelector("#preco").value;
    let resMedicamento = document.querySelector("#resMedicamento");
    let resPromocao = document.querySelector("#resPromocao");
  
    //Cálculo do valor se ele levar 2 medicamentos
    let nome = medicamento.value;
    let valor = Number(preco) * 0.03; // 3% de desconto
    let valorfinal = Number(preco) - valor;

    resMedicamento.innerText = `Medicamento: ${nome}`;
    resPromocao.innerHTML = `<p>Leve 2 por: R$ ${valorfinal.toFixed(2)}</p>`;
    resPromocao.innerHTML += `<p>Valor original: R$ ${preco}</p>`;
}
let botao = document.querySelector("#botao");
botao.addEventListener("click", function() {
    calculo();
});