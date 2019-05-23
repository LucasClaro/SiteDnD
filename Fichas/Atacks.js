var Ataques = [];
var Magias = [];
var MagiasTxt = [];

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addAttack").addEventListener("click", function(){
        let descricao = "";

        descricao += document.querySelector("#AttackNome").value;
        descricao += " ( " + document.querySelector("#AttackBonus").value + " ) ";
        descricao += document.querySelector("#AttackDano").value + " - ";
        descricao += document.querySelector("#AttackTipo").value;

        Ataques.push(descricao);
        AtualizarListaAtaques();
    })

    document.querySelector("#addMagia").addEventListener("click", function(){
        const nome = document.querySelector("#textoMagia").value;
        const descricao = document.querySelector("#txtMagia").value;

        Magias.push(nome);
        MagiasTxt.push(descricao);
        AtualizarListaMagias();
    })

});

function AtualizarListaAtaques(){
    var elements = document.querySelectorAll("li.item");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id != "AtckBase") {
            elements[i].remove();
        }
    }

    for (let i = 0; i < Ataques.length; i++) {
        const cloneItem = document.querySelector("#AtckBase").cloneNode(true);
        const parent = document.querySelector("#ataques");
        parent.appendChild(cloneItem);
        cloneItem.classList.remove("oculto");
        cloneItem.id = 'attack-'+ i;
        cloneItem.classList.add("current-item");
        cloneItem.querySelector("span").textContent = Ataques[i];
        cloneItem.querySelector("button").id = 'btnA-' + i;
        cloneItem.querySelector("button").addEventListener("click", RemoverAttack);
    }
}

function RemoverAttack(e){    
    const identificador = parseInt(e.target.id.substring(5));
    Ataques.splice(identificador, 1);
    AtualizarListaAtaques();
}

function AtualizarListaMagias(){
    var elements = document.querySelectorAll("div.item");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id != "MagiaBase") {
            elements[i].remove();
        }
    }

    for (let i = 0; i < Magias.length; i++){
        const cloneItem = document.querySelector("#MagiaBase").cloneNode(true);
        const parent = document.querySelector("#accordionExample");
        parent.appendChild(cloneItem);
        cloneItem.classList.remove("oculto");
        cloneItem.id = 'magia-' + 1;
        cloneItem.querySelector("#btnNomeMagia").textContent = Magias[i];
        cloneItem.querySelector("#btnRemoverMagia").addEventListener("click", RemoverMagia);
        cloneItem.querySelector("#divDescricaoMagia").textContent = MagiasTxt[i];
        cloneItem.querySelector("#collapseOne").id = "collapse" + i;
        cloneItem.querySelector("#btnNomeMagia").dataset.target = "#collapse" + i;
        cloneItem.querySelector("#btnRemoverMagia").id = "btnM-" + i;
    }
}

function RemoverMagia(e){    
    const identificador = parseInt(e.target.id.substring(5));
    Magias.splice(identificador, 1);
    MagiasTxt.splice(identificador, 1);
    AtualizarListaMagias();
}