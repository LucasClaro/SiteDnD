document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#Salvar").addEventListener("click", salvar);
})

function salvar() {
    var xmltext = criarTexto();
    var pom = document.createElement('a');


    var filename = pegarNome() + ".xml";
    var pom = document.createElement('a');
    var bb = new Blob([xmltext], { type: 'text/plain' });

    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);

    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');

    pom.click();
}

function criarTexto(){
    let inicio = "<Personagem>\n";
    
    let nome = "<Nome>" + pegarNome() + "</Nome>\n";
    let raca = "<Raca>" + document.querySelector("#Raca").value + "</Raca>\n";
    let classe = "<Classe>" + document.querySelector("#Classe").value + "</Classe>\n";

    let tendencia = "<Tendencia>" + document.querySelector("#Tendencia").value + "</Tendencia>\n"

    let xp = "<Xp>\n<Atual>" + document.querySelector("#xpAt").value + "</Atual>\n<Max>" + document.querySelector("#xpMax").value + "</Max>\n</Xp>\n";

    let fim = "</Personagem>";

    return inicio + nome + raca + classe + tendencia + xp + fim;
}

function pegarNome(){
    let nome = document.querySelector("#Nome").value;
    return nome;
}