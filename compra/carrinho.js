let produtos = []
let qtd = document.getElementById('qtds')
let btn = document.getElementById('registrar')
let formProd = document.getElementById('form-carrinho')
let valor = 0
let teste = []


formProd.addEventListener('submit', function(event){
event.preventDefault();


console.log(qtd.value)
valor = qtd.value
console.log(event.target.qtds.value)

produtos.push(formProd.produtos.value)

event.preventDefault();
let mostRel = "";
let valorTotal = 0;
let total = 0;


for(let i = 0; i < produtos.length; i++){
    if (produtos[i] == 'Arroz'){
        valorTotal = 10*valor;
    }else if (produtos[i] == 'Feijão'){
        valorTotal = 7.0*valor;
    }else if (produtos[i] == 'Macarão'){
        valorTotal = 5.0*valor;
    }else if (produtos[i] == 'Oleo'){
        valorTotal = 9.5*valor;
    }else if (produtos[i] == 'Alho'){
        valorTotal = 30.0*valor;
    }else if (produtos[i] == 'Cebola'){
        valorTotal = 2.0*valor;
    }else if (produtos[i] == 'Pão'){
        valorTotal = 0.8*valor;
    }else if (produtos[i] == 'Manteiga'){
        valorTotal = 14.0*valor;
    }

    console.log(mostRel)
    mostRel += `<h3>Produto:  ${produtos[i]} | Valor Total do produto: R$:${valorTotal}</h3>`    

    resp.innerHTML = ""
    resp.innerHTML = mostRel
}
})

btn.addEventListener('click',function(event){



})