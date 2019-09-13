var Ataques = [];
var Magias = [];

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#addAttack").addEventListener("click", function () {
        let descricao = "";

        descricao += document.querySelector("#AttackNome").value;
        descricao += " ( " + document.querySelector("#AttackBonus").value + " ) ";
        descricao += document.querySelector("#AttackDano").value + " -> ";
        descricao += document.querySelector("#AttackTipo").value;

        Ataques.push(descricao);
        AtualizarListaAtaques();
    })

    document.querySelector("#addMagia").addEventListener("click", function () {
        const nome = document.querySelector("#textoMagia").value;
        const descricao = document.querySelector("#txtMagia").value;

        let item = new Object();
        item.nome = nome;
        item.descricao = descricao;
        item.favorito = false;

        var guias = document.querySelectorAll("#nav-tabContent3 .fade");
        for (let i = 0; i < guias.length; i++) {
            if (guias[i].classList.contains("active")) {
                item.pai = guias[i].id;
            }
        }

        Magias.push(item);
        AtualizarListaMagias();
    })

});

function AtualizarListaAtaques() {
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
        cloneItem.id = 'attack-' + i;
        cloneItem.classList.add("current-item");
        cloneItem.classList.add("atack");
        cloneItem.querySelector("span").textContent = Ataques[i];
        cloneItem.querySelector("button").id = 'btnA-' + i;
        cloneItem.querySelector("button").addEventListener("click", RemoverAttack);
    }
}

function RemoverAttack(e) {
    const identificador = parseInt(e.target.id.substring(5));
    Ataques.splice(identificador, 1);
    AtualizarListaAtaques();
}

function AtualizarListaMagias() {
    var elements = document.querySelectorAll("div.item");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id != "MagiaBase") {
            elements[i].remove();
        }
    }

    for (let i = 0; i < Magias.length; i++) {
        const cloneItem = document.querySelector("#MagiaBase").cloneNode(true);
        let busca = "#" + Magias[i].pai + " > div";
        const parent = document.querySelector(busca);
        parent.appendChild(cloneItem);
        cloneItem.classList.remove("oculto");
        cloneItem.id = 'magia-' + i;
        cloneItem.classList.add("magia");
        cloneItem.querySelector("#btnNomeMagia").textContent = Magias[i].nome;
        cloneItem.querySelector("#btnRemoverMagia").addEventListener("click", RemoverMagia);
        cloneItem.querySelector("#btnFavoritarMagia").addEventListener("click", FavoritarMagia);
        cloneItem.querySelector("#divDescricaoMagia").textContent = Magias[i].descricao;
        cloneItem.querySelector("#collapseOne").id = "collapse" + i;
        cloneItem.querySelector("#btnNomeMagia").dataset.target = "#collapse" + i;
        cloneItem.querySelector("#btnRemoverMagia").id = "btnM-" + i;
        cloneItem.querySelector("#btnFavoritarMagia").id = "btnMagiaFav-" + i;

        if (Magias[i].favorito) {
            cloneItem.querySelector("#btnMagiaFav-" + i).classList.remove("btn-outline-warning");
            cloneItem.querySelector("#btnMagiaFav-" + i).classList.add("btn-warning");
            cloneItem.querySelector("#btnMagiaFav-" + i).textContent = "Desfavoritar"

            const cloneFav = document.querySelector("#MagiaBase").cloneNode(true);
            const favoritos = document.querySelector("#accordionFav");
            favoritos.appendChild(cloneFav);
            cloneFav.classList.remove("oculto");
            cloneFav.id = 'fav-' + i;
            cloneFav.querySelector("#btnNomeMagia").textContent = Magias[i].nome;
            cloneFav.querySelector("#btnRemoverMagia").classList.add("oculto");
            cloneFav.querySelector("#btnFavoritarMagia").classList.add("oculto");
            cloneFav.querySelector("#divDescricaoMagia").textContent = Magias[i].descricao;
            cloneFav.querySelector("#collapseOne").id = "collapse" + i + "F";
            cloneFav.querySelector("#btnNomeMagia").dataset.target = "#collapse" + i + "F";

        }

    }
}

function RemoverMagia(e) {
    const identificador = parseInt(e.target.id.substring(5));
    Magias.splice(identificador, 1);
    AtualizarListaMagias();
}

function FavoritarMagia(e) {
    const identificador = parseInt(e.target.id.substring(12));
    Magias[identificador].favorito = !Magias[identificador].favorito;
    
    AtualizarListaMagias();
}

function CalcMagias(){
    return Magias;
}