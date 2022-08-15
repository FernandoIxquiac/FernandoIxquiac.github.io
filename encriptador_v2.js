function encriptar() {
    var text = document.getElementById("input-text").value.toLowerCase();

    var textCifrado = text.replace(/e/igm,"enter");
    var textCifrado = textCifrado.replace(/o/igm,"ober");
    var textCifrado = textCifrado.replace(/i/igm,"imes");
    var textCifrado = textCifrado.replace(/a/igm,"ai");
    var textCifrado = textCifrado.replace(/u/igm,"ufat");

    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("texto2").innerHTML = textCifrado;
    document.getElementById("botonCopiar").style.dispaly = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function desencriptar() {
    var text = document.getElementById("input-text").value.toLowerCase();

    var textCifrado = text.replace(/enter/igm,"e");
    var textCifrado = textCifrado.replace(/ober/igm,"o");
    var textCifrado = textCifrado.replace(/imes/igm,"i");
    var textCifrado = textCifrado.replace(/ai/igm,"a");
    var textCifrado = textCifrado.replace(/ufat/igm,"u");

    document.getElementById("imagen-derecha").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("texto2").innerHTML = textCifrado;
    document.getElementById("botonCopiar").style.dispaly = "show";
    document.getElementById("botonCopiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copio");
    location.reload(true);
}