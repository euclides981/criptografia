function encriptar(){

    var txtDigitado = document.getElementById("entrada").value;

    if (txtDigitado != "") {
        var txtCripto = txtDigitado.split(/e/g).join("enter").split(/i/g).join("imes").split(/a/g).join("ai").split(/o/g).join("ober").split(/u/g).join("ufat");
        document.getElementById("saida").value = txtCripto;
        document.getElementById("entrada").value = "";
        document.getElementById("aviso").innerHTML = "&nbsp";
    } else {
        document.getElementById("aviso").innerText = "Digite ou Cole Algo Para Criptografar";
    }
};