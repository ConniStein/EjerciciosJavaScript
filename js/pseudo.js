//EJERCICIO FUNCION 
/*function metros_a_pulgadas (metros){
	var pulgadas;
	pulgadas= metros/ 0.0254;
	return pulgadas;
}

var metros;
var pulgadas;

metros=prompt("Por favor ingrese los metros", "");

pulgadas = metros_a_pulgadas(metros);
alert ("Las pulgadas son: " + pulgadas);*/

//Ejercicio #1: Suma de dos números.
/*var numero1 = parseInt(prompt("Ingresa un número"));
var numero2 = parseInt(prompt("Ingresa otros número"));
var total = numero1 + numero2;
alert("La suma de estos números es: " + total);*/

//Ejercicio #2: Promedio de 3 números.
/*var numero1 = parseFloat(prompt("Ingresa un número"));
var numero2 = parseFloat(prompt("Ingresa un número"));
var numero3 = parseFloat(prompt("Ingresa un número"));
var total = (numero1 + numero2 + numero3) / 3;
alert("El promedio de estos tres valores es: " + total);*/

//Ejercicio #3: Cálculo del área de un triángulo.
/*var base = parseFloat(prompt("Ingresa un valor"));
var altura = parseFloat(prompt("Ingresa otro valor"))
var total = (base * altura) / 2;
alert("El área de éste triángulo es: " + total);*/

//Ejercicio #4: Calcular cantidad de galones de leche.


//Ejercicio #5: Calcular sueldo semanal.
/*var horasTrabajadas = parseInt(prompt("Ingrese el número de horas que usted trabaja al día"));
var pagoPorHora = parseInt(prompt("Ingrese el pago por hora que usted recibe"));
var diasTrabajados = parseInt(prompt("Ingrese el numero de días que usted trabaja a la semana"));
var pagoPorDia = pagoPorHora * horasTrabajadas;
var pagoSemanal = pagoPorDia * diasTrabajados;
alert("El sueldo que usted recibe semanalmente es: " + pagoSemanal);*/

//Ejercicio #6: Conversión medidas de la tela (de metros a pulgadas);
/*var metros = parseFloat(prompt("Ingresa los metros de tela que necesitas"));
var pulgadas = 0.0254;
var metros_a_pulgadas = metros / pulgadas;
alert("La cantidad de pulgadas que equivale a los metros ingresados es " + metros_a_pulgadas);*/

//Ejercicio #7: Pinturas "La brocha gorda" (cobro por m2)
/*var m = parseFloat(prompt("Ingrese el número de metros que requiere convertir a m2"));
var m2 = m * m;
var cobro_por_m2 = parseFloat(prompt("Ingrese el cobro por metro cuadrado que desea realizar")) * m2;
var cliente = parseFloat(prompt("Ingrese el número de metros cuadrados que su cliente quiere que sean pintados"));
var total = cobro_por_m2 * cliente;
alert("Lo que usted debe cobrar por pintar esta propiedad es: " + total);*/

//Ejercicio #8: Autobuses "La curva loca" (costo pasaje)
/*var km_recorrer = parseInt(prompt("Ingrese el numero de kilómetros que debe recorrer"));
var costo_por_km = parseInt(prompt("Ingrese costo del kilómetro recorrido"));
var valor_boleto = km_recorrer * costo_por_km;
alert("El valor de su boleto es: " + valor_boleto);*/

//Ejercicio #9: Llamada telefónica (costo llamada)
/*var minuto = parseInt(prompt("Ingrese la cantidad de minutos que dura su llamada"));
var costo_minuto = 100;
var costo_llamada = minuto * costo_minuto;
alert("El valor total de su llamada es: " + costo_llamada);*/
//ver cómo calcular el valor de la llamada si es que se ingresan segundos en ves de minutos

//Ejercicio #10: Hotel "Cama Arena" (costo estadía)
/*var horas = parseInt(prompt("Ingrese el número de horas que desea quedarse en el hotel"));
var valor_hora = 1000;
var estadia = horas * 1000;
alert("El valor de su estadía en el hotel es: " + estadia);*/
