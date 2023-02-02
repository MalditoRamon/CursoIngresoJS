/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let precioUno = document.getElementById("txtIdPrecioUno").value 
    let precioDos = document.getElementById("txtIdPrecioDos").value
    let precioTres = document.getElementById("txtIdPrecioTres").value
    alert(parseInt(precioUno) + parseInt(precioDos) + parseInt (precioTres))

}
function Promedio () 
{
    let precioUno = document.getElementById("txtIdPrecioUno").value
    let precioDos = document.getElementById("txtIdPrecioDos").value
    let precioTres = document.getElementById("txtIdPrecioTres").value
    alert( (parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres)) / 3)
}
function PrecioFinal () 
{
	let precioUno = parseInt(document.getElementById("txtIdPrecioUno").value)
	let precioDos = parseInt(document.getElementById("txtIdPrecioDos").value)
	let precioTres = parseInt(document.getElementById("txtIdPrecioTres").value)
    alert((precioUno + precioDos + precioTres) * 21 / 100 + precioUno + precioDos + precioTres)
}