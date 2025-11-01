/* 

🟢 NIVEL PRINCIPIANTE (solo JavaScript, sin HTML ni CSS)

1Suma simple: pide dos números con prompt() y muestra la suma con alert().

2Par o impar: pide un número y muestra si es par o impar.

3Mayor de tres: pide tres números y muestra cuál es el mayor.

4) Contador de letras: pide una palabra y muestra cuántas letras tiene.

5) Conversor de temperatura: convierte grados Celsius a Fahrenheit.

6) Tabla de multiplicar: muestra la tabla de multiplicar de un número (del 1 al 10).

7) Array de nombres: pide 5 nombres y guárdalos en un array, luego muéstralos en consola.

8) Buscar en array: pide un nombre y verifica si existe en el array anterior.

9) Promedio: calcula el promedio de un array de números [10, 5, 8, 7, 9].

10) Contador de vocales: pide una palabra y muestra cuántas vocales tiene.



🟠 NIVEL MEDIO (HTML mínimo + JS + algo de CSS básico)

Contador: botón que al hacer clic aumenta un número mostrado en pantalla.

Reiniciar contador: agrega otro botón para reiniciar el contador.

Cambio de color: botón que cambia el color del fondo entre negro y blanco.

Mostrar texto: input + botón → al presionar, muestra el texto escrito debajo.

Lista de tareas: input + botón → agrega una tarea a una lista visible.

Eliminar tareas: agrega la opción de borrar una tarea haciendo clic sobre ella.

Mostrar imagen: botón que cambia entre dos imágenes.

Mini calculadora: suma, resta, multiplica o divide dos inputs.

Validar edad: input → si es menor de 18, muestra “acceso denegado”.

Reloj digital: muestra la hora actual y se actualiza cada segundo.



🔴 NIVEL DIFÍCIL (HTML + CSS leve + JS avanzado)

Conversor de moneda: convierte pesos a dólares o euros (input + select).

Galería simple: al hacer clic en una miniatura cambia la imagen principal.

Buscador de productos: filtra una lista de productos por nombre (usa .filter()).

Carrito básico: muestra productos, botón “agregar” y cuenta cuántos hay en el carrito.

Simulador de notas: pide varias notas y muestra promedio, aprobado o reprobado.

Juego adivina el número: el usuario intenta adivinar un número aleatorio entre 1 y 100.

Generador de contraseñas: crea una contraseña aleatoria de letras y números.

Mini trivia: muestra una pregunta con 3 opciones, y avisa si es correcta.

To-do avanzado: permite marcar tareas como hechas (tachadas) y borrarlas.

Memotest simple: 6 cartas (3 pares) que se dan vuelta y deben coincidir.

*/

//1) Suma simple: pide dos números con prompt() y muestra la suma con alert().

/* function suma (a,b){
    return a + b;
}

let parametroA = parseInt(prompt("Ingrese un numero: "));
let parametroB = parseInt(prompt("ingrese otro numero: "));
let respuesta = suma(parametroA,parametroB);

respuesta = alert(`el resultado de la suma es ${respuesta}`); 

APROBADOO
*/

//2) Par o impar: pide un número y muestra si es par o impar.

/* let ingresarNumero = parseInt(prompt("Ingrese un numero para ver si es par o impar: "));

if(ingresarNumero % 2 == 0){
    alert(`El numero ingresado ${ingresarNumero} es par.`);
}else{
    alert(`El numero ingresado ${ingresarNumero} es impar.`);
}
APROBADOOOO    
*/

//3) Mayor de tres: pide tres números y muestra cuál es el mayor.

/* let primerNumero = prompt("Ingrese el primer numero: ");
let segundoNumero = prompt("Ingrese el segundo numero: ");
let tercerNumero = prompt("Ingrese el tercer numero: ");

if(primerNumero > segundoNumero && (primerNumero > tercerNumero)){
    alert(`El numero ingresado (primero) ${primerNumero} es el mas alto.`);
}else if(segundoNumero > primerNumero && (segundoNumero > tercerNumero)){
    alert(`El numero ingresado (segundo) ${segundoNumero} es el mas alto.`);
}else{
    alert(`El numero ingresado (tercero) ${tercerNumero} es el mas alto.`);
} 

APROBADOOOOOOOOOOOO
*/

//4) Contador de letras: pide una palabra y muestra cuántas letras tiene.

/* let palabraIngresada = prompt("ingrese una palabra");
alert(`La palabra que acaba de ingresar (${palabraIngresada}) tiene ${palabraIngresada.length} letras`);



APROBADOOO

 */

//5) Conversor de temperatura: convierte grados Celsius a Fahrenheit.


/* let grados  = prompt("Ingrese sus grados en celsius: ");

function convertirCelsiusAFahrenheit (gradosCelsius){
    let resultadoFahrenheit = (parseFloat(gradosCelsius) * (9/5)) + 32;
    return resultadoFahrenheit;
}

let gradosConvertidos = convertirCelsiusAFahrenheit(grados);
alert(`Los grados que usted ingresó son igual a ${gradosConvertidos}°F`);

APROBADOO
*/

//6) Tabla de multiplicar: muestra la tabla de multiplicar de un número (del 1 al 10).

/* let ingreseNumero = parseFloat(prompt("Ingrese un numero y te hago la tabla de multiplicar (del 1 al 10): "));


alert(`    ${ingreseNumero} X 1 = ${ingreseNumero * 1}\n
    ${ingreseNumero} X 2 = ${ingreseNumero * 2}\n
    ${ingreseNumero} X 3 = ${ingreseNumero * 3}\n
    ${ingreseNumero} X 4 = ${ingreseNumero * 4}\n
    ${ingreseNumero} X 5 = ${ingreseNumero * 5}\n
    ${ingreseNumero} X 6 = ${ingreseNumero * 6}\n
    ${ingreseNumero} X 7 = ${ingreseNumero * 7}\n
    ${ingreseNumero} X 8 = ${ingreseNumero * 8}\n
    ${ingreseNumero} X 9 = ${ingreseNumero * 9}\n
    ${ingreseNumero} X 10 = ${ingreseNumero * 10}\n`) 
    
    
    
DESAPROBADOOO, LA VERSION PRO ES LA SIGUENTE: 

*******************VERSION CON ALERT*************************

const numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

let mensaje = `Tabla del ${numero}:\n`;

for (let i = 1; i <= 10; i++) {
  mensaje += `${numero} x ${i} = ${numero * i}\n`;
}

alert(mensaje);

******SEGUNDA FORMA DE HACERLO (CON console.log)************

const numero = parseInt(prompt("Ingrese un número para ver su tabla de multiplicar:"));

console.log(`\nTabla del ${numero}:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

*/

// 7) Array de nombres: pide 5 nombres y guárdalos en un array, luego muéstralos en consola.

