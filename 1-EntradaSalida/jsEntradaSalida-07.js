/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/
function sumar() {
	let n1;
	let n2;
	
	n1 = document.getElementById("txtIdNumeroUno").value
	n2 = document.getElementById("txtIdNumeroDos").value
	
	alert(parseInt(n1) + parseInt(n2));
}

function restar() {
	let n1;	
	let n2;
	
	n1 = document.getElementById("txtIdNumeroUno").value
	n2 = document.getElementById("txtIdNumeroDos").value
	alert(parseInt(n1) - parseInt(n2));

}

function multiplicar() {
	let n1;
	let n2;
	n1 = document.getElementById("txtIdNumeroUno").value
	n2 = document.getElementById("txtIdNumeroDos").value
	alert(parseInt(n1) * parseInt(n2));
}

function dividir() {
	let n1;
	let n2; 
	n1 = document.getElementById("txtIdNumeroUno").value
	n2 = document.getElementById("txtIdNumeroDos").value
	alert(parseInt(n1) / parseInt(n2));
}

