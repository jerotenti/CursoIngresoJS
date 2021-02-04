/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var aumento;

	sueldo = txtIdSueldo.value
	sueldo = parseInt(sueldo);
	aumento = sueldo * 10/100;
	resultado = sueldo + aumento;

	txtIdResultado.value = resultado;
}
// txtIdSueldo
// txtIdResultado


/* 
1- git clone link
2- despues de modificar algo...
3- git add
4- git commit -m "mensaje"
5- git push (sube cambios)
*/