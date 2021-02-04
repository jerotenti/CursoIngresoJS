/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
       let precioUno;
       let precioDos;
       let precioTres;
       let resultado;

       precioUno = document.getElementById('txtIdPrecioUno').value;
       precioDos = document.getElementById('txtIdPrecioDos').value;
       precioTres = document.getElementById('txtIdPrecioTres').value;
       
       precioUno = parseFloat(precioUno);
       precioDos = parseFloat(precioDos);
       precioTres = parseFloat(precioTres); 

       resultado = precioUno + precioDos + precioTres;

       resultado = resultado.toFixed(2);

       alert("La suma total es: $" + resultado);
}
function Promedio () 
{
	let precioUno;
       let precioDos;
       let precioTres;
       let resultado;

       precioUno = document.getElementById('txtIdPrecioUno').value;
       precioDos = document.getElementById('txtIdPrecioDos').value;
       precioTres = document.getElementById('txtIdPrecioTres').value;
       
       precioUno = parseFloat(precioUno);
       precioDos = parseFloat(precioDos);
       precioTres = parseFloat(precioTres); 

       resultado = precioUno + precioDos + precioTres;

       promedio = resultado / 3;

       promedio = promedio.toFixed(2);

       alert("El promedio es: $" + promedio);
}
function PrecioFinal () 
{
	let precioUno;
       let precioDos;
       let precioTres;
       let resultado;
       let precioFinal

       precioUno = document.getElementById('txtIdPrecioUno').value;
       precioDos = document.getElementById('txtIdPrecioDos').value;
       precioTres = document.getElementById('txtIdPrecioTres').value;
       
       precioUno = parseFloat(precioUno);
       precioDos = parseFloat(precioDos);
       precioTres = parseFloat(precioTres); 

       resultado = precioUno + precioDos + precioTres;

       precioFinal = resultado * 1.21;

       precioFinal = precioFinal.toFixed(2);

       alert("El precio final es: $" + precioFinal);
}