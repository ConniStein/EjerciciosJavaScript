//Verificar DNI mediante cálculo de letra

var numero_dni = parseInt(prompt("Ingrese los números de su DNI"));
var letra_dni = prompt("Ingrese la letra verificadora de su DNI");
var letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T'];

if (numero_dni < 0 || numero_dni > 99999999) {
	alert("¡El numero ingresado no es válido!")
};