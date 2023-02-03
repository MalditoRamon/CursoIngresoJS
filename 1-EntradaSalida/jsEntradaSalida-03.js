/* Lucas Ramón Div D.
Se ingresará por id el valor de una compra de productos para el hogar. 
Se deberá agregar el iva (21%) y  luego se deberá restar el 5% en concepto de compra mayorista. 
El programa deberá mostrar por alert importe bruto, el iva, el importe con iva, 
el valor del descuento y el total a pagar.*/


function mostrar() {
	let valorDeProducto;
	let iva;
	let descuento;
	let sumaIva;
	let restaDescuento;
	let total;


	valorDeProducto = document.getElementById("txtIdNombre").value;
	valorDeProducto = parseFloat(valorDeProducto);

	iva = valorDeProducto * 21 / 100;

	sumaIva = valorDeProducto + iva;

	descuento = sumaIva * -5 / 100;

	restaDescuento = valorDeProducto - descuento;

	total = sumaIva + descuento;



	alert(" Valor del producto:" + valorDeProducto + " Iva del 21%:" + sumaIva + " Descuento del 5%:" + descuento + " Total a pagar:" + total)


}


