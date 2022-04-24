
document.querySelector('#entrada').focus();

document.querySelector('#criptografar').addEventListener('click', () => {

    document.querySelector('#entrada').focus();

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
        document.getElementById('aviso').innerHTML = "Digite Algo na Primeira Caixa para Criptografar";
    }
});


document.querySelector('#descriptografar').addEventListener('click', () => {

    document.querySelector('#entrada').focus();

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
        document.getElementById('aviso').innerHTML = "Cole um Texto Criptografado na Primeira Caixa para Descriptografar";
    }
});

/* Botão CTRL+C */

document.getElementById('ctrlc').addEventListener('click', clipboardCut);

async function clipboardCut() {
let text = document.querySelector("#saida").value;
await navigator.clipboard.writeText(text);
document.querySelector('#saida').value = "";
document.querySelector('#entrada').value = text;
document.querySelector('#entrada').focus();
}

/* Botão Limpar */

document.querySelector('#limp').addEventListener('click', () => {
document.querySelector('#saida').value = "";
document.querySelector('#entrada').value = "";
document.getElementById('aviso').innerHTML = "&nbsp;";
document.querySelector('#entrada').focus();
});

function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: '',
			text: '',
			url: '',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}
