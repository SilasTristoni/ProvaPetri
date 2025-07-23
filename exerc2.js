function calcular(){
let veiculo = document.querySelector("#veiculo");
let preco = document.querySelector("#preco").value;
let resPromocao = document.querySelector("#resPromocao");
let resEntrada = document.querySelector("#resEntrada");
let resParcela = document.querySelector("#resParcela");

//calculo
let entrada = (preco / 2).toFixed(2);
let parcela = (entrada / 12).toFixed(2);

//atribui os valores ao objeto
resPromocao.innerText = `Promoção: ${veiculo.value}`;
resEntrada.innerHTML = `<h1>Entrada: ${entrada}</h1>`;
resParcelas.innerHTML = `<h1>Parcelas: ${parcela}</h1>`;
//adiciona o evento de click ao botão
}
let botao = document.querySelector("#botao");
botao.addEventListener("click", function() {
    //chama a função
    calcular();
});


