let FormBimestre = document.getElementById('form-media');

FormBimestre.addEventListener('submit', function(event){
    event.preventDefault()

    let nome = FormBimestre.nome.value;
    let disciplina = FormBimestre.disciplina.value;
    let bim1 = Number(FormBimestre.nota1.value);
    let bim2 = Number(FormBimestre.nota2.value);
    let bim3 = Number(FormBimestre.nota3.value);
    let bim4 = Number(FormBimestre.nota4.value);

    let media = ((bim1 + bim2 + bim3 + bim4)/4)

    resultado = document.getElementById('res')

    if(nome == ""){
        alert("Digite seu Nome")
    }else if(disciplina == ""){
        alert("Selecione a Materia")
    }
    else if(bim1 == ""){
        alert("Digite a Nota do Bimestre 1")
    }
    else if(bim2 == ""){
        alert("Digite a Nota do Bimestre 2")
    }
    else if(bim3 == ""){
        alert("Digite a Nota do Bimestre 3")
    }
    else if(bim4 == ""){
        alert("Digite a Nota do Bimestre 4")
    }else{
        if (media >= 6){
            resultado.innerHTML =  `Em  ${disciplina} O aluno  <span class="nomee">${nome}</span>  está <b id="aprov">APROVADO</b> sua Media foi: ${media}`
        }
        else if (media >=4 && media <=6){
            resultado.innerHTML = `Em ${disciplina} O aluno <span class="nomee">${nome}</span> está em <b id="recup">RECUPERAÇÃO</b> sua Media foi: ${media}`
        }
        else{
            resultado.innerHTML = `Em ${disciplina} O aluno <span class="nomee">${nome}</span> está <b id="reprov">REPROVADO</b> sua Media foi: ${media}`
        }
    }
    
});
