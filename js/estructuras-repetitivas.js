//Ejercicio #1: Suma 10 numeros (while)
/*var i = 1;
var suma = 0;
var resta = 10;
while(i <= 10){
	var numero = parseInt(prompt("Ingrese un número. Le quedan " + resta + " numeros por ingresar"));
	suma = suma + numero;
	i ++;
	resta --;
}
alert("El total de la suma de los diez numeros es: " + suma);*/

//Ejercicio #2: Suma 10 numeros (do while)
/*var i = 1;
var suma = 0;
var resta = 10;
do{
	var numero = parseInt(prompt("Ingrese un número. Le quedan " + resta + " numeros por ingresar"));
	suma = suma + numero;
	i ++;
	resta --;
}while(i <=10)
alert("El total de la suma de los diez numeros es: " + suma);*/

//Ejercicio #3: Suma 10 numeros (for)
/*var i = 1;
var suma = 0;
var resta = 10;
for (i = 1; i <=10; i++) {
	var numero = parseInt(prompt("Ingrese un número. Le quedan " + resta + " numeros por ingresar"));
	suma = suma + numero;
	resta --;
}
alert("El total de la suma de los diez numeros es: " + suma);*/

//Ejercicio #4: Edad promedio
/*var i = 1;
var cantidad_de_alumnos = parseFloat(prompt("Ingrese una cantidad de alumnos"));
var suma_de_edades = 0;

while(i <=cantidad_de_alumnos){
	var edades = parseFloat(prompt("Ingrese la edad del alumno"));
	var suma_de_edades = suma_de_edades + edades;
	var promedio = suma_de_edades / cantidad_de_alumnos;
	i ++;
}
alert("El promedio de las edades de los alumnos es: " + promedio);*/

//Ejercicio #5: Numeros pares 0-100
var i = 1;
for (i = 1; i <=100; i++) {
	if (i % 2 === 0 ) {
		console.log("Los numeros pares son: " + i + "<br>")
	}
};
