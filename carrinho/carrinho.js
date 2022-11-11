let formMercado = document.getElementById('form-carrinho')
let imagemProduto = document.getElementById('produto-imagem')
let divCupomFiscal = document.getElementById('cupom')
let codigoProduto = document.getElementById('codigo-produto')

const mercadorias = [
    ["100", "Arroz", 21.90, "imagens/arroz.png"],
    ["101", "Feijão", 7.90, "imagens/feijao.jpg"],
    ["102", "Biscoito", 3.89, "imagens/biscoito.jpg"],
    ["103", "Suco", 1.29, "imagens/suco.jpg"],
    ["104", "Leite", 9.89, "imagens/leite.jpg"]
]

codigoProduto.addEventListener('keyup', function () {
    console.log(codigoProduto.value)

    mercadorias.forEach(produtos => {
        if (codigoProduto.value == produtos[0]) {
            formMercado.nomeProduto.value = produtos[1]
            formMercado.precoProduto.value = produtos[2]
            formMercado.qtdProduto.focus()
            imagemProduto.src = produtos[3]
        }
    })
})

let total = document.getElementById("total");

let produtos = [];
let valores = [];
let quantidade = [];

formMercado.addEventListener('submit', function (event) {
    event.preventDefault();

    produtos.push(formMercado.nomeProduto.value);
    valores.push(Number(formMercado.precoProduto.value));
    quantidade.push(Number(formMercado.qtdProduto.value));

    let result = '';
    let totalCompra = 0

    for (let i = 0; i < produtos.length; i++) {


        totalProduto = valores[i] * quantidade[i];

        // totalCompra = totalCompra  + totalProduto;
        totalCompra += totalProduto;



        // totalCompra += totalProduto;

        // console.log(totalProduto);
        console.log(totalCompra);

        result += `<p>Produto: ${produtos[i]} | Quantidade: ${quantidade[i]} | Valor Unitario: ${valores[i]} | Valor Total: ${totalProduto.toFixed(2)} </p>`;

        total.innerHTML = "";
        total.innerHTML = result;

    }

    result += `<h3>Total Da Compra: ${totalCompra.toFixed(2)}</h3>`;
    total.innerHTML = result;
})