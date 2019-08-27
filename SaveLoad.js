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

    

    
    return JSON.stringify(Personagem);;

}

// function criarTexto(){
//     let inicio = "<Personagem>\n";
    
//     let nome = "<Nome>" + pegarNome() + "</Nome>\n";
//     let raca = "<Raca>" + document.querySelector("#Raca").value + "</Raca>\n";
//     let classe = "<Classe>" + document.querySelector("#Classe").value + "</Classe>\n";

//     let tendencia = "<Tendencia>" + document.querySelector("#Tendencia").value + "</Tendencia>\n"

//     let xp = "<Xp>\n<Atual>" + document.querySelector("#xpAt").value + "</Atual>\n<Max>" + document.querySelector("#xpMax").value + "</Max>\n</Xp>\n";

//     let fim = "</Personagem>";

//     return inicio + nome + raca + classe + tendencia + xp + fim;
// }

function pegarNome(){
    let nome = document.querySelector("#Nome").value;
    return nome;
}