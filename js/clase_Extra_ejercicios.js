/* 

🟢 NIVEL PRINCIPIANTE (solo JavaScript, sin HTML ni CSS)

Suma simple: pide dos números con prompt() y muestra la suma con alert().

Par o impar: pide un número y muestra si es par o impar.

Mayor de tres: pide tres números y muestra cuál es el mayor.

Contador de letras: pide una palabra y muestra cuántas letras tiene.

Conversor de temperatura: convierte grados Celsius a Fahrenheit.

Tabla de multiplicar: muestra la tabla de multiplicar de un número (del 1 al 10).

Array de nombres: pide 5 nombres y guárdalos en un array, luego muéstralos en consola.

Buscar en array: pide un nombre y verifica si existe en el array anterior.

Promedio: calcula el promedio de un array de números [10, 5, 8, 7, 9].

Contador de vocales: pide una palabra y muestra cuántas vocales tiene.



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

let palabraIngresada = [prompt("ingrese una palabra")];
console.log(palabraIngresada.length);


