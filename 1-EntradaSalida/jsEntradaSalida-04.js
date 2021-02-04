/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// Reservo espacio en memoria para guardar el nombre del usuario
	let nombreIngresado

	// Guardo en la variable nombreIngresado el texto que escribió el usuario dentro de la ventana prompt
	nombreIngresado = prompt("Ingrese su nombre", "Ejemplo: Romina");

	// Copio el nombre que tengo guardado en la variable nombreIngresado dentro de la caja de texto embebida en la página HTML
	document.getElementById("txtIdNombre").value = nombreIngresado;
}
/*
Entradas: prompt - id.value o document.getElementById("...").value
Procesos: concatenar (+)
Salidas: console.log - alert - document.write - document.getElementById("...").value
*/