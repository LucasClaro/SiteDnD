var Personagem = new Object();

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#Salvar").addEventListener("click", salvar);
})

function salvar() {
    var xmltext = montarObj();
    var pom = document.createElement('a');


    var filename = pegarNome() + ".json";
    var pom = document.createElement('a');
    var bb = new Blob([xmltext], { type: 'text/plain' });

    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);

    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');

    pom.click();
}

function montarObj(){
    Personagem.Nome = pegarNome();
    Personagem.Raca = document.querySelector("#Raca").value;
    Personagem.Classe = document.querySelector("#Classe").value;
    Personagem.Tendencia = document.querySelector("#Tendencia").value;

    Personagem.xpAtual = document.querySelector("#xpAt").value;
    Personagem.xpMax = document.querySelector("#xpMax").value;

    Personagem.For = document.querySelector("#ForHab").value;
    Personagem.Des = document.querySelector("#DesHab").value;
    Personagem.Con = document.querySelector("#ConHab").value;
    Personagem.Int = document.querySelector("#IntHab").value;
    Personagem.Sab = document.querySelector("#SabHab").value;
    Personagem.Car = document.querySelector("#CarHab").value;

    Personagem.Ca = document.querySelector("#Ca").value;
    Personagem.Bonus = document.querySelector("#bonus").value;
    Personagem.Desloc = document.querySelector("#Desloc").value;
    Personagem.Inspiracao = document.querySelector("#Inspiracao").value;
    Personagem.Iniciativa = document.querySelector("#Iniciativa").value;
    Personagem.PercepPassiva = document.querySelector("#PerPass").value;

    Personagem.PVAtual = document.querySelector("#PVsAtual").value;
    Personagem.PVAtualNotes = document.querySelector("#PVsAtualNotes").value;
    Personagem.PVTemp = document.querySelector("#PVsTemp").value;
    Personagem.PVTempNotes = document.querySelector("#PVsTempNotes").value;
    Personagem.DadosVidaTotais = document.querySelector("#DadosVidaTot").value;
    Personagem.DadosVidaNotes = document.querySelector("#DadosVidaNotes").value;

    Personagem.sucessos = CalcSucessos();
    Personagem.fracassos = CalcFracassos();
    
    Personagem.Habilidades = CalcHab();

    Personagem.Pericias = CalcPericias();

    Personagem.Persona = document.querySelector("#Persona").value;
    Personagem.Ideais = document.querySelector("#Ideais").value;
    Personagem.Ligacoes = document.querySelector("#Ligacoes").value;
    Personagem.Defeitos = document.querySelector("#Defeitos").value;

    Personagem.Ataques = CalcAtac();
    
    return JSON.stringify(Personagem);;

}

function pegarNome(){
    let nome = document.querySelector("#Nome").value;
    return nome;
}

function CalcSucessos(){
    var marcas = 0;
    document.querySelectorAll(".sucesso").forEach(
        function(element){
            if(element.checked)
                marcas++;
        }
    )
    return marcas;
}

function CalcFracassos(){
    var marcas = 0;
    document.querySelectorAll(".fracasso").forEach(
        function(element){
            if(element.checked)
                marcas++;
        }
    )
    return marcas;
}

function CalcHab(){
    var vetor = [];
    document.querySelectorAll(".Hab").forEach(
        function(element){
            vetor.push(element.checked);
        }
    )
    return vetor;
}

function CalcPericias(){
    var vetor = [];
    document.querySelectorAll(".perBox").forEach(
        function(element){
            vetor.push(element.checked);
        }
    )
    return vetor;
}

function CalcAtac(){
    var vetor = [];
    document.querySelectorAll(".atack").forEach(
        function(element){
            vetor.push(element.firstChild.textContent);
        }
    )
    return vetor;
}