document.getElementById("criptografar").addEventListener("click", encriptar);

    function encriptar(){

    var txtDigitado = document.getElementById("entrada");
    if (txtDigitado.value != "") {
    var txtCriptografado = txtDigitado.value.replace(/e/g, "enter");
        txtCriptografado = txtCriptografado.replace(/i/g, "imes");
        txtCriptografado = txtCriptografado.replace(/a/g, "ai");
        txtCriptografado = txtCriptografado.replace(/o/g, "ober");
        txtCriptografado = txtCriptografado.replace(/u/g, "ufat");

        document.getElementById("saida").value = txtCriptografado;
        document.getElementById("txtDigitado").value = "";
        document.getElementById("aviso").innerHTML = "&nbsp";
    } else {
        document.getElementById("aviso").innerHTML = "Digite ou Cole Algo Para Criptografar";
    }
};