

function encriptar() {
    let texto = document.getElementsByClassName("texto")[0].value;
    let textoR = document.getElementsByClassName("texto-resultado")[0];

    if (texto != "") {
        if (!texto.match(/[A-Z]/) && !texto.match(/[áéíóú]/)){

        textoR.textContent = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

        document.getElementById("nulll").style.display = "none";
        document.getElementById("resultado").style.display = "flex";
    } 
    }
}

function desencriptar() {
    let texto = document.getElementsByClassName("texto")[0].value;
    let textoR = document.getElementsByClassName("texto-resultado")[0];

    if (texto != "") {
        if (!texto.match(/[A-Z]/) && !texto.match(/[áéíóú]/)){

        textoR.textContent = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

        document.getElementById("nulll").style.display = "none";
        document.getElementById("resultado").style.display = "flex";
    } 
    }
}

function copiar() {
    let textoAcopiar = document.getElementsByClassName("texto-resultado")[0];
    var areaDeTexto = document.createElement("textarea");

    areaDeTexto.value = textoAcopiar.textContent;

    document.body.appendChild(areaDeTexto);
    areaDeTexto.select(); 
    document.execCommand("copy");
    document.body.removeChild(areaDeTexto);

    alert("¡Texto copiado al portapapeles!");
}