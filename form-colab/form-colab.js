let form = document.getElementById("form-colab")
let nomes = []
let cargos = []
let salarios = []
let butn = document.getElementById("gerar")
let resp = document.getElementById("resp")

form.addEventListener('submit', function(event){
    event.preventDefault();

    //push - Adcionar novos dados dentro de um vetor/array
    
    nomes.push(form.nomeCompleto.value)
    cargos.push(form.cargo.value)
    salarios.push(Number(form.salario.value))

    console.log(nomes);
    console.log(cargos);
    console.log(salarios);
})

butn.addEventListener('click',function(event){

    event.preventDefault();

    let descVt = 0;
    let descVr = 0;
    let salarioLiquido = 0;
    let mostRel = "";

    for(let i = 0; i < nomes.length; i++){
        descVt = salarios[i]*0.09;
        descVr = salarios[i]*0.06

        salarioLiquido = (salarios[i] - descVr - descVt)
        
        mostRel += `<p>Nome: ${nomes[i]} | Cargo: ${cargos[i]} | Salario Bruto: ${salarios[i]} | Salario Liquido: ${salarioLiquido}</p>`    
        
        resp.innerHTML = ""
        resp.innerHTML = mostRel

    }
})