/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
	let n1 = document.getElementById("txtIdNumeroDividendo").value
	let n2 = document.getElementById("txtIdNumeroDivisor").value
	let resultado = parseInt(n1) % parseInt(n2)
	alert(" el resto es " + resultado);
}
