/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let unNumero;
	let otroNumero;
	let suma;

	
	// Opción 1
	unNumero = document.getElementById("txtIdNumeroUno").value; 
	otroNumero = document.getElementById("txtIdNumeroDos").value;

	unNumero = parseFloat(unNumero);
	otroNumero = parseFloat(otroNumero);
	
	suma = unNumero + otroNumero;
	
	alert("La suma es " + suma);
	
}

// Opción 2
/*
unNumero = parseInt(document.getElementById("txtIdNumeroUno").value); 

otroNumero = parseInt(document.getElementById("txtIdNumeroDos").value);
*/
