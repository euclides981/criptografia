document.getElementById("ctrlc").addEventListener("click", copiaECola);

document.getElementById("limp").addEventListener("click", limpeza);

async function copiaECola() {
	
	let text = document.getElementById("saida").value;
	await navigator.clipboard.writeText(text);
	document.getElementById("saida").value = "";
	document.getElementById("entrada").value = text;
	document.getElementById("aviso").innerHTML = "&nbsp";
	document.getElementById("entrada").focus();
	}

function limpeza(){
	document.getElementById("saida").value = "";
	document.getElementById("entrada").value = "";
	document.getElementById("aviso").innerHTML = "&nbsp";
	document.getElementById("entrada").focus();
}

function share(){
	if (navigator.share !== undefined) {
		navigator.share()/* {
			title: "",
			text: "",
			url: "",
		}) */
	}
};
