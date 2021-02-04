/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombreIngresado;
	
	nombreIngresado = document.getElementById('txtIdNombre').value;
	// Opción alternativa: nombre = txtIdNombre.value;
	
	alert(nombreIngresado);

	nombreIngresado = document.getElementById('txtIdNombre').value = "";
}

/*
Entradas: prompt, document.getElementById
Procesos: -
Salidas: alert, console.log, document.getElementById, document.write 
*/
