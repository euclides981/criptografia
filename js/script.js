
document.querySelector('#criptografar').addEventListener('click', () => {

    var txtDigitado = document.querySelector('#entrada');

    if (txtDigitado.value != "") {
    var txtCriptografado = txtDigitado.value.replace(/e/g, "enter");
        txtCriptografado = txtCriptografado.replace(/i/g, "imes");
        txtCriptografado = txtCriptografado.replace(/a/g, "ai");
        txtCriptografado = txtCriptografado.replace(/o/g, "ober");
        txtCriptografado = txtCriptografado.replace(/u/g, "ufat");

        document.querySelector('#saida').value = txtCriptografado;
        txtDigitado.value = "";
    } else {
        document.querySelector('#entrada').value = "";
    }
});


document.querySelector('#descriptografar').addEventListener('click', () => {

    var txtDigitado = document.querySelector('#entrada');

    if (txtDigitado.value != "") {
    var txtCriptografado = txtDigitado.value.replace(/enter/g, "e");
        txtCriptografado = txtCriptografado.replace(/imes/g, "i");
        txtCriptografado = txtCriptografado.replace(/ai/g, "a");
        txtCriptografado = txtCriptografado.replace(/ober/g, "o");
        txtCriptografado = txtCriptografado.replace(/ufat/g, "u");

        document.querySelector('#saida').value = txtCriptografado;
        txtDigitado.value = "";
    } else {
        
    }
});

/* Botão CTRL+C */

document.getElementById('ctrlc').addEventListener('click', clipboardCut);
async function clipboardCut() {
let text = document.querySelector("#saida").value;
await navigator.clipboard.writeText(text);
document.querySelector('#saida').value = "";
document.querySelector('#entrada').value = text;
}

/* Botão Limpar */

document.querySelector('#limp').addEventListener('click', () => {
document.querySelector('#saida').value = "";
document.querySelector('#entrada').value = "";
});
