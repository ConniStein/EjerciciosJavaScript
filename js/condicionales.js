//Ejercicio #1: Aprobado o reprobado
/*var nota1 = parseFloat(prompt("Ingrese su primera nota"));
var nota2 = parseFloat(prompt("Ingrese su segunda nota"));
var nota3 = parseFloat(prompt("Ingrese su tercera nota"));
var promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 6) {
	alert("Felicitaciones! Usted ha aprobado, su promedio es: " + promedio)
}
else{
	alert("Lo sentimos, usted ha reprobado, su promedio es: " + promedio)
};*/


//Ejercicio #2: ¿Cuál es el número más grande?
/*var numero1 = parseFloat(prompt("Ingrese el primer número"));
var numero2 = parseFloat(prompt("Ingrese el segundo número"));

if (numero1 > numero2) {
	alert("El primer número ingresado es mayor");
}
else if (numero2 > numero1) {
	alert("El segundo número ingresado es mayor");
}
else{
	alert("Ambos números son iguales")
};*/


//Ejercicio #3: Positivo o Negativo 
/*var numero = parseFloat(prompt("Ingrese un número para poder verificar si es Positivo ó Negativo"));

if (numero >= 0) {
	alert("El número es positivo");
}
else if (numero < 0) {
	alert("El número es negativo");
};*/


//Ejercicio #4: Almacenes "El Harapiento distinguido" (calcular valor de descuento)
/*var valor_de_compra = parseFloat(prompt("Ingrese el valor de su compra"));
var desc_15 = (valor_de_compra * 15) / 100;
var desc_8 = (valor_de_compra * 8) / 100;
var precio_final_1 = valor_de_compra - desc_15;
var precio_final_2 = valor_de_compra - desc_8;

if (valor_de_compra >= 2500) {
	alert("El descuento aplicado a su compra fue de: " + desc_15);
	alert("Y el valor de su compra con el descuento aplicado es en total: " + precio_final_1);
}
else if (valor_de_compra < 2500) {
	alert("El descuento aplicado a su compra fue de: " + desc_8);
	alert("Y el valor de su compra con el descuento aplicado es en total: " + precio_final_2);
};*/

//Ejercicio #5: El mayor de los números (comparación de tres numeros)
/*var numero1 = parseInt(prompt("Ingrese el primer número"));
var numero2 = parseInt(prompt("Ingrese el segundo número"));
var numero3 = parseInt(prompt("Ingrese el tercer número"));

if (numero1 > numero2 && numero1 > numero3) {
	alert("El primer numero ingresado es mayor");
}
else if (numero2 > numero3 && numero2 > numero1) {
	alert("El segundo numero ingresado es mayor");
}
else if (numero3 > numero2 && numero3 > numero1) {
	alert("El tercer numero ingresado es mayor");
}
else if (numero1 === numero2) {
	alert("El tercer valor ingresado es mayor");
}
else if (numero2 === numero3) {
	alert("El primer valor ingresado es mayor");	
}
else if (numero3 === numero1) {
	alert("El segundo valor ingresado es mayor");
};*/


//Ejercicio #6: Banquetes "La langosta ahumada"
/*var personas = parseInt(prompt("Ingrse el número de personas que desea invitar a su evento"));
var costo_normal = 95.00;
var costo_desc_1 = 85.00;
var costo_desc_2 = 75.00;

if (personas <= 200) {
	alert("El costo de su cotización es: " + (costo_normal * 95.00));
}
else if (personas > 200 && personas <= 300) {
	alert("El costo de su cotización es: " + (costo_desc_1 * 85.00));
}
else if (personas > 300) {
	alert("El costo de su cotización es: " + (costo_desc_2 * 75.00));
};*/

//Ejercicio #7: Viaje Escolar
/*var alumnos_ingresados = parseInt(prompt("Ingrese número de alumnos que viajarán"));
var alumnos_100 = 65.00;
var alumnos_50_99 = 70.00;
var alumnos_30_49 = 95.00;
var alumnos_30 = alumnos_ingresados / 4000;// <--- ahí hay algo mal (?) 
var total_1 = alumnos_ingresados * alumnos_100;
var total_2 = alumnos_ingresados * alumnos_50_99;
var total_3 = alumnos_ingresados * alumnos_30_49;
var total_4 = alumnos_ingresados * alumnos_30;

if (alumnos_ingresados >= 100) {
	alert("El valor que cada alumno deberá pagar es: " + alumnos_100);
	alert("Y el valor total a pagar a la compañía de autobuses es: " + total_1);
}
else if (alumnos_ingresados >=50 && alumnos_ingresados <= 99) {
	alert("El valor que cada alumno deberá pagar es: " + alumnos_50_99);
	alert("Y el valor total a pagar a la compañía de autobuses es: " + total_2);
}
else if (alumnos_ingresados >=30 && alumnos_ingresados <= 49) {
	alert("El valor que cada alumno deberá pagar es: " + alumnos_30_49);
	alert("Y el valor total a pagar a la compañía de autobuses es: " + total_3);
}
else if (alumnos_ingresados < 30) {
	alert("El valor que cada alumno deberá pagar es: " + alumnos_30);
	alert("Y el valor total a pagar a la compañía de autobuses es: " + total_4);
};*/

//Ejercicio #8: Companía de autobuses
var A = 2.0;
var B = 2.5;
var C = 3.0;
var buses = ["A","B","C"];
var km_recorridos = parseInt(prompt("Ingrese la cantidad de kilómetros que necesita recorrer"));
var tipo_de_bus = prompt("Indique qué bus se utilizará (A,B,C)");
var cantidad_personas = parseInt(prompt("Indique cuántas personas subirán al bus"));
var costo_persona_A = A * km_recorridos;
var costo_persona_B = B * km_recorridos;
var costo_persona_C = C * km_recorridos;
var costo_bus1 = (cantidad_personas * A) * km_recorridos;
var costo_bus2 = (cantidad_personas * B) * km_recorridos;
var costo_bus3 = (cantidad_personas * C) * km_recorridos;

if (buses = A ) {
	alert("El costo del viaje por persona es: $" + costo_persona_A);
	alert("Y la ganancia total para el bus será de: $" + costo_bus1);
}
else if (buses = B ) {
	alert("El costo del viaje por persona es: $" + costo_persona_B);
	alert("Y la ganancia total para el bus será de: $" + costo_bus2);
}
else if (buses = C ) {
	alert("El costo del viaje por persona es: $" + costo_persona_C);
	alert("Y la ganancia total para el bus será de: $" + costo_bus3);
};


//Ejercicio #9: Hamburguesas "El náufrago satisfecho"
/*var sencilla = 20.00;
var doble = 25.00;
var triple = 28.00;
var tipo_de_hamburguesa = ["sencilla", "doble", "triple"];
var cantidad_de_hamburguesas = parseInt(prompt("¿Cuántas hamburguesas desea ordenar?"));
var pregunta_tipo = prompt("Desea que su hamburguesa sea sencilla, doble o triple?");
var cargo_1 = (sencilla * 5) /100;
var cargo_2 = (doble * 5)/100;
var cargo_3 = (triple * 5)/100;
var total_con_cargo1 = (cantidad_de_hamburguesas * sencilla) + cargo_1; 
var total_con_cargo2 = (cantidad_de_hamburguesas * doble) + cargo_2; 
var total_con_cargo3 = (cantidad_de_hamburguesas * triple) + cargo_3;

if (tipo_de_hamburguesa = sencilla) {
	alert("El total de su compra es: $" + total_con_cargo1);
}
else if (tipo_de_hamburguesa = doble) {
	alert("El total de su compra es: $" + total_con_cargo2);
}
else if (tipo_de_hamburguesa = triple) {
	alert("El total de su compra es: $" + total_con_cargo3);
};*/