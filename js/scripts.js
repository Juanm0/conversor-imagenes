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

