
document.getElementById("descriptografar").addEventListener("click", descriptar);

function descriptar(){
    
    var txtDigitado = document.getElementById("entrada");
    
    if (txtDigitado.value != "") {
        var txtCriptografado = txtDigitado.value.replace(/enter/g, "e");
        txtCriptografado = txtCriptografado.replace(/imes/g, "i");
        txtCriptografado = txtCriptografado.replace(/ai/g, "a");
        txtCriptografado = txtCriptografado.replace(/ober/g, "o");
        txtCriptografado = txtCriptografado.replace(/ufat/g, "u");
        
        document.getElementById("saida").value = txtCriptografado;
        document.getElementById("txtDigitado").value = "";
        document.getElementById("aviso").innerHTML = "&nbsp";
    } else {
        document.getElementById("aviso").innerHTML = "Digite ou Cole Algo Para Descriptografar";
    }
};