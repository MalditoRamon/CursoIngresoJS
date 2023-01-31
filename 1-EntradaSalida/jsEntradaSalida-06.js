/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let n1 = document.getElementById("txtIdNumeroUno").value;
	let n2 = document.getElementById("txtIdNumeroDos").value;
	alert(parseInt(n1) + parseInt(n2));
}

