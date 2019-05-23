var Ataques = [];

document.addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addAttack").addEventListener("click", function(){
        const descricao = document.querySelector("#texto").value;

        Ataques.push(descricao);
        AtualizarLista();
    })
});

function AtualizarLista(){
    var elements = document.querySelectorAll("li.item");

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].id != "itemBase") {
            elements[i].remove();
        }
    }

    for (let i = 0; i < Ataques.length; i++) {
        const cloneItem = document.querySelector("#itemBase").cloneNode(false);
        const parent = document.querySelector("#ataques");
        parent.appendChild(cloneItem);
        cloneItem.classList.remove("oculto");
        cloneItem.id = 'item-'+ i;
        cloneItem.classList.add("current-item");
        cloneItem.textContent = Ataques[i];
    }
}