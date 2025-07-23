/*Um supermercado está com uma promoção – Para aumentar suas vendas no setor de higiene, cada
etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de
três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após,
apresente as mensagens indicando a promoção – conforme o exemplo ilustrado na Figura:*/

function calculo(){
    let produto = document.querySelector("#produto");
    let preco = document.querySelector("#preco").value;
    let resValor = document.querySelector("#resValor");
    
    
    let valor3 = Number(preco) * 0.5; // 3 produtos
    let valor = (Number(preco) * 2) + valor3; // 50% de desconto
    resValor.innerHTML = `<p>Produto: ${produto.value}</p>`;
    resValor.innerHTML = `<p>Valor a pagar: R$ ${valor.toFixed(2)}</p>`;
    resValor.InnerHTML = `<p>Valor da 3º unidade sai por R$ ${valor3.toFixed(2)}</p>`;
    }

let botao = document.querySelector("#botao");
botao.addEventListener("click", function() {
    calculo();
});