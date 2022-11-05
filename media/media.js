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
    materias.push(formedia.materia.value)
    bim1.push(Number(formedia.bime1.value))
    bim2.push(Number(formedia.bime2.value))
    bim3.push(Number(formedia.bime3.value))
    bim4.push(Number(formedia.bime4.value))

})

butn.addEventListener('click',function(event){

    event.preventDefault();

    let mostRel = "";

    for(let i = 0; i < nomes.length; i++){

        let media = (Number(bim1[i]) + Number(bim2[i]) + Number(bim3[i]) + Number(bim4[i]))/4
        console.log(media)

        mostRel += `<p>Nome: ${nomes[i]} | Disciplina: ${materias[i]} | Media: ${media}</p>`    
        
        resp.innerHTML = ""
        resp.innerHTML = mostRel

    }
})