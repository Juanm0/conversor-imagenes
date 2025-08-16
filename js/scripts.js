console.log("Hola mundo desde scripts.js")

let number = 42
let palabra = "JavaScript"
let booleanValue = true
let nullValue = null
let undefinedValue
let objectValue = { key: "value" }

let arreglo = [number, palabra, booleanValue, nullValue, undefinedValue, objectValue]

console.log("Largo del array?:", arreglo.length)

for (let i = 0; i < arreglo.length; i++) {
  console.log(`Tipo de dato de ${arreglo[i]}`, typeof arreglo[i])
}

let numeroString = "123456"
let numeroFlotante = "3.14"
console.log("Número como string:" + numeroString + " y número flotante como string:" + numeroFlotante)
console.log("Tipo de dato de numeroString:" + typeof numeroString + " y tipo de dato de numeroFlotante:" + typeof numeroFlotante)
let numeroConvertido = parseInt(numeroString)


console.log("Número convertido:", numeroConvertido)
console.log("Tipo de dato de numeroConvertido:", typeof numeroConvertido)
console.log("Número flotante convertido a entero:", numeroConvertido = parseInt(numeroFlotante))
console.log("Tipo de dato de numeroConvertido:", typeof numeroFlotante)


console.log("Número flotante convertido a flotante:", numeroConvertido = parseFloat(numeroFlotante))
console.log("Tipo de dato de numeroFlotante:", numeroConvertido)
console.log("Tipo de dato de numeroConvertido:", typeof numeroConvertido)


let numeroDecimal = 3.14
console.log("Número decimal:", typeof numeroDecimal)

let edad = 24
let nombre = "Juan"
let esEstudiante = true
let dia = "viernes 4"


if (edad >= 18) {
  console.log("Eres mayor de edad")
} else {
  console.log("Eres menor de edad")
}

if (dia == "viernes 5") {
  edad = edad + 1
  console.log("Feliz cumpleaños " + nombre + " ahora tienes " + edad + " años")
} else {
  console.log("Hoy no es tu cumpleaños " + nombre)
}

let susbstraccion = edad - 2
console.log("Tu edad menos 2 es: " + susbstraccion)

let multiplicacion = edad * 2
console.log("Tu edad multiplicada por 2 es: " + multiplicacion)

let division = edad / 2
console.log("Tu edad dividida por 2 es: " + division)

let resto = edad % 2
console.log("El resto de tu edad dividido por 2 es: " + resto)

dia = "jueves"
switch (dia) {
  case "jueves":
    console.log("Hoy es jueves, casi fin de semana")
    break
  case "viernes":
    console.log("Hoy es viernes, fin de semana a la vista")
    break
  case "default":
    console.log("Hoy no es un día de la semana válido")
    break
}
// let edadInput = prompt("Ingresa tu edad:")

// while (edadInput >= 18){
//   console.log("Eres mayor de edad")
//   edadInput = prompt("Ingresa tu edad:")
// }

// let colorFavorito = ""

// do{
//   colorFavorito = prompt("¿Cuál es tu color favorito?")

// }while (colorFavorito != "azul")


function saludar(nombre) {
  console.log("Hola " + nombre + ", bienvenido al curso de JavaScript")
}

saludar("Juan")


function conteoDeEdad(edadIngresada, nombreIngresado) {
  console.log(`Tenes ${edadIngresada} años de edad, y tu nombre es ${nombreIngresado}`)

}

conteoDeEdad(edad, nombre)


let hobbies = ['Surfear', 'Jugar', 'Stremear', 'Hablar', 'Comer', 'Dormir']
console.log(`Tamaño de Hobbies ANTES: ${hobbies.length}`)
console.log(`Hobbies ANTES del PUSH: ${hobbies}`)
//añadir elemento al final .push
//eliminar elemento del final .pop
//añadir elemento al inicio .unshift
//conocer la cantidad de elementos .length
hobbies.push('Jugar al Counter', 'Cocinar', 'Tomar Cerveza')
console.log(`Hobbies DESPUES del PUSH: ${hobbies}`)
hobbies.pop()
console.log(`Hobbies DESPUES del POP: ${hobbies}`)
hobbies.unshift('Fumar')
console.log(`Hobbies DESPUES del UNSHIFT: ${hobbies}`)
console.log(`Tamaño de Hobbies FINAL: ${hobbies.length}`)

console.log('-----------------------------------')
console.log('---- FUNCION FLECHA => ------')
//Crear un nuevo array con la condicion que le pasemos .filter
let edades = [24, 23, 35, 25, 26, 17, 16, 15, 14]
console.log(`Edades: ${edades}`)
console.log("Creamos la funcion flecha con el metodo .filter: const mayoresDeEdad = edades.filter(edades => edades >= 18)")
const mayoresDeEdad = edades.filter(edades => edades >= 18)
console.log(`Mayores de edad (metodo .filter): ${mayoresDeEdad}`)

console.log("Callbacks")

function pedirComida(plato, callback) {
  console.log(`Tu pedido de ${plato} fue tomado...`)
  let pedido = 5;
  // Simulamos que tarda en estar listo
  while (pedido >= 0) {
    console.log(`Tu pedido va a estar listo en... ${pedido}`)
    pedido--
  }

  if (pedido == -1) {// Llamamos a la función callback
    console.log(`${plato} está listo 🍕(Funcion callback llamada)`)
    callback()
  } else {
    console.log("Ocurrio un error en la funcion en el pedido")
  }
}

function comer() {
  console.log("Ahora estoy comiendo 🍽️")
}

pedirComida("Sorrentinos", comer)


//metodo .map()

let arrNumberString = ["Casa", 23, 3.14, 'Juan']

let arrNuevoStringNumber = arrNumberString.map(numero => numero * 2)

console.log(arrNuevoStringNumber)

const suma = [10, 20, 30].reduce((a, b) => a * b)

console.log(suma)

const USUARIOS = {}

function registrarUsuario() {
  let nombre = prompt("Ingrese su nombre: ")
  if(USUARIOS[nombre]){
    console.log("❌El nombre de usuario ya existe. Intente con otro.")
    return
  }
  let password = prompt("Ingrese su contraseña: ")
  USUARIOS[nombre] = password
  alert("✅Usuario registrado con éxito.")

}

function mostrarUsuarios(){
  console.log("--------------------")
  console.log("Usuarios Registrados")
  console.log("--------------------")

  if (Object.keys(USUARIOS).length === 0){
    console.log("No hay usuarios registrados.")
  }else{
    for(let nombre in USUARIOS){
      console.log(`👤Usuario: ${USUARIOS[nombre]}`)
    }
  }
}


function menu() {

  while (true) {
    console.log("--------------------------")
    console.log("---   MENÚ PRINCIPAL   ---")
    console.log("--------------------------")
    console.log("1. Registrar Usuario")
    console.log("2. Mostrar Usuarios Registrados")
    console.log("3. Iniciar Sesión")
    console.log("4. Salir")

    opcion = prompt("Seleccione una opción: ")

    if (opcion == "1") {
      registrarUsuario()
    }
    else if (opcion == "2") {
      mostrarUsuarios()
    }
    else if (opcion == "3") {
      login()
    }
    else if (opcion == "4") {
      console.log("👋 Saliendo...")
      break
    }
    else {
      console.log("❌⚠️ Opción inválida. Intente nuevamente.❌⚠️")
    }



  }


}
// #ejecutar
menu()


