let contador = 0;
let formedia = document.getElementById("form-media")
let materias = []
let nomes = []
let bim1 = []
let bim2 = []
let bim3 = []
let bim4 = []
let butn = document.getElementById("gerar")


formedia.addEventListener('submit', function(event){
    event.preventDefault();

    //push - Adcionar novos dados dentro de um vetor/array
    
    nomes.push(formedia.nomeCompleto.value)
    bim1.push(Number(formedia.bime1.value))
    bim2.push(Number(formedia.bime2.value))
    bim3.push(Number(formedia.bime3.value))
    bim4.push(Number(formedia.bime4.value))

})

butn.addEventListener('click',function(event){

    event.preventDefault();

    let mostRel = "";

    while(contador < nomes.length){

        let media = (Number(bim1[contador]) + Number(bim2[contador]) + Number(bim3[contador]) + Number(bim4[contador]))/4

        mostRel+= `<p>Nome: ${nomes[contador]} |  Media: ${media}</p>`    
        
        resp.innerHTML = ""
        resp.innerHTML = mostRel
        contador++
    }
})