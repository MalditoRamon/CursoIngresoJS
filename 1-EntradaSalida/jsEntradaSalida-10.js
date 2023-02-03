/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe 
	let resultado
	
	importe = document.getElementById("txtIdImporte").value 
	resultado = document.getElementById("txtIdResultado")
	
	parseInt(importe)
	resultado.value = importe - importe * 25 / 100 

	
}
