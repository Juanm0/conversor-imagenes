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
console.log("Tipo de dato de numeroString:"+ typeof numeroString + " y tipo de dato de numeroFlotante:" + typeof numeroFlotante)
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


if (edad >= 18){
  console.log("Eres mayor de edad")
}else{
  console.log("Eres menor de edad")
}

if (dia == "viernes 5"){
  edad = edad + 1
  console.log("Feliz cumpleaños " + nombre + " ahora tienes " + edad + " años")
}else{
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


function conteoDeEdad(edadIngresada, nombreIngresado){
  console.log(`Tenes ${edadIngresada} años de edad, y tu nombre es ${nombreIngresado}`)

}

conteoDeEdad(edad, nombre)


