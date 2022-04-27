document.getElementById("criptografar").addEventListener("click", encriptar);

function encriptar(){

    var txtDigitado = document.getElementById("entrada").value;
    if (txtDigitado != "") {
    var txtCripto = txtDigitado.split(/e/i).join("enter").split(/i/i).join("imes").split(/a/i).join("ai").split(/o/i).join("ober").split(/u/i).join("ufat");

    document.getElementById("saida").value = txtCripto;
    document.getElementById("entrada").value = "";
    document.getElementById("aviso").innerHTML = "&nbsp";
    } else {
    document.getElementById("aviso").innerText = "Digite ou Cole Algo Para Criptografar";
    }
    console.log(txtCripto);
};