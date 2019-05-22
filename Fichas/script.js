function attFor() {
    let hab = document.querySelector("#ForHab");//Valor de habilidade força
    let modificador = document.querySelector("#ForMod");//Moodificador de força
    let bonus = document.querySelector("#bonus");//Bônus de proeciência
    let check = document.querySelector("#ForCheck");//CheckBox de Save (Salva guarda)
    let teste = document.querySelector("#ForTest");//Valor do Save (Salva guarda)
    let pericias = document.querySelectorAll(".for .pericias");//Perícias que usam força
    let boxes = document.querySelectorAll(".for .perBox");//CheckBpx de perícias que usam força

    modificador.value = Math.floor((parseInt(hab.value) - 10) / 2);//Calcula o modificador

    teste.value = modificador.value;//Define o valor do Save (Salva guarda)
    if (check.checked)
        teste.value = parseInt(teste.value) + parseInt(bonus.value);//Soma o bonus nos Saves treinados

    for (let i = 0; i <= pericias.length; i++) {//Percorre todas as perícias
        pericias[i].value = modificador.value;//Define o valor base da perícia 
        if (boxes[i].checked)//Vê se a perícia é treinada
            pericias[i].value = parseInt(pericias[i].value) + parseInt(bonus.value);// Soma o bonus nas perícias treinadas
    }


}

function attDes() {
    let hab = document.querySelector("#DesHab");
    let modificador = document.querySelector("#DesMod");
    let bonus = document.querySelector("#bonus");
    let check = document.querySelector("#DesCheck");
    let teste = document.querySelector("#DesTest");
    let pericias = document.querySelectorAll(".des .pericias");
    let boxes = document.querySelectorAll(".des .perBox");

    modificador.value = Math.floor((parseInt(hab.value) - 10) / 2);

    teste.value = modificador.value;
    if (check.checked)
        teste.value = parseInt(teste.value) + parseInt(bonus.value);

    for (let i = 0; i <= pericias.length; i++) {
        pericias[i].value = modificador.value;
        if (boxes[i].checked)
            pericias[i].value = parseInt(pericias[i].value) + parseInt(bonus.value);
    }
}

function attCon() {
    let hab = document.querySelector("#ConHab");
    let modificador = document.querySelector("#ConMod");
    let bonus = document.querySelector("#bonus");
    let check = document.querySelector("#ConCheck");
    let teste = document.querySelector("#ConTest");
    let pericias = document.querySelectorAll(".con .pericias");
    let boxes = document.querySelectorAll(".con .perBox");

    modificador.value = Math.floor((parseInt(hab.value) - 10) / 2);

    teste.value = modificador.value;
    if (check.checked)
        teste.value = parseInt(teste.value) + parseInt(bonus.value);

    for (let i = 0; i <= pericias.length; i++) {
        pericias[i].value = modificador.value;
        if (boxes[i].checked)
            pericias[i].value = parseInt(pericias[i].value) + parseInt(bonus.value);
    }
}

function attInt() {
    let hab = document.querySelector("#IntHab");
    let modificador = document.querySelector("#IntMod");
    let bonus = document.querySelector("#bonus");
    let check = document.querySelector("#IntCheck");
    let teste = document.querySelector("#IntTest");
    let pericias = document.querySelectorAll(".int .pericias");
    let boxes = document.querySelectorAll(".int .perBox");

    modificador.value = Math.floor((parseInt(hab.value) - 10) / 2);

    teste.value = modificador.value;
    if (check.checked)
        teste.value = parseInt(teste.value) + parseInt(bonus.value);

    for (let i = 0; i <= pericias.length; i++) {
        pericias[i].value = modificador.value;
        if (boxes[i].checked)
            pericias[i].value = parseInt(pericias[i].value) + parseInt(bonus.value);
    }
}

function attSab() {
    let hab = document.querySelector("#SabHab");
    let modificador = document.querySelector("#SabMod");
    let bonus = document.querySelector("#bonus");
    let check = document.querySelector("#SabCheck");
    let teste = document.querySelector("#SabTest");
    let pericias = document.querySelectorAll(".sab .pericias");
    let boxes = document.querySelectorAll(".sab .perBox");

    modificador.value = Math.floor((parseInt(hab.value) - 10) / 2);

    teste.value = modificador.value;
    if (check.checked)
        teste.value = parseInt(teste.value) + parseInt(bonus.value);

    for (let i = 0; i <= pericias.length; i++) {
        pericias[i].value = modificador.value;
        if (boxes[i].checked)
            pericias[i].value = parseInt(pericias[i].value) + parseInt(bonus.value);
    }
}

function attCar() {
    let hab = document.querySelector("#CarHab");
    let modificador = document.querySelector("#CarMod");
    let bonus = document.querySelector("#bonus");
    let check = document.querySelector("#CarCheck");
    let teste = document.querySelector("#CarTest");
    let pericias = document.querySelectorAll(".car .pericias");
    let boxes = document.querySelectorAll(".car .perBox");

    modificador.value = Math.floor((parseInt(hab.value) - 10) / 2);

    teste.value = modificador.value;
    if (check.checked)
        teste.value = parseInt(teste.value) + parseInt(bonus.value);

    for (let i = 0; i <= pericias.length; i++) {
        pericias[i].value = modificador.value;
        if (boxes[i].checked)
            pericias[i].value = parseInt(pericias[i].value) + parseInt(bonus.value);
    }
}

function attXPTxt(){
    let atual = document.querySelector("#xpAt");
    let barra = document.querySelector("#xpBar");
    let max = document.querySelector("#xpMax");

    barra.value = map(parseInt(atual.value), 0, parseInt(max.value), 0, 100);
}

function attXPBar(){
    let atual = document.querySelector("#xpAt");
    let barra = document.querySelector("#xpBar");
    let max = document.querySelector("#xpMax");

    atual.value = Math.round(map(parseInt(barra.value), 1, 100, 0, parseInt(max.value))); 
}

function map(n, start1, stop1, start2, stop2){
    var newval = (n - start1) / (stop1 - start1) * (stop2 - start2) + start2;
    if (start2 < stop2) {
        return Math.max(Math.min(newval, stop2), start2);
    } else {
        return Math.max(Math.min(newval, start2), stop2);
    }
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll(".For").forEach(
        function(element) {
            element.addEventListener("change", attFor);
        }
    );
    document.querySelectorAll(".Des").forEach(
        function(element) {
            element.addEventListener("change", attDes);
        }
    );
    document.querySelectorAll(".Con").forEach(
        function(element) {
            element.addEventListener("change", attCon);
        }
    );
    document.querySelectorAll(".Int").forEach(
        function(element) {
            element.addEventListener("change", attInt);
        }
    );
    document.querySelectorAll(".Sab").forEach(
        function(element) {
            element.addEventListener("change", attSab);
        }
    );
    document.querySelectorAll(".Car").forEach(
        function(element) {
            element.addEventListener("change", attCar);
        }
    );
    document.querySelector("#bonus").addEventListener("change", attFor);
    document.querySelector("#bonus").addEventListener("change", attDes);
    document.querySelector("#bonus").addEventListener("change", attCon);
    document.querySelector("#bonus").addEventListener("change", attInt);
    document.querySelector("#bonus").addEventListener("change", attSab);
    document.querySelector("#bonus").addEventListener("change", attCar);

    document.querySelectorAll(".xp").forEach(
        function(element) {
            element.addEventListener("change", attXPTxt);
        }
    );

    document.querySelector("#xpBar").addEventListener("change", attXPBar);
})