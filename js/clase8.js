

// let saludo = document.getElementById("saludo")

// console.log(saludo.innerHTML);

// saludo.innerHTML = "hola juan";

// console.log(saludo.innerHTML);

// //se esta pasando por referencia

// saludo.innerHTML = "<h1>Hola Juan 2</h1>";
//le agregamos una etiqueta h1 osea cambiamos en el div saludo pusimos un h1 que dice hola juan, esto es por el innerHTML, si fuera innerText solo cambia el contenido
// console.log(saludo.innerHTML);

// let saludo = document.getElementById("saludo")
// saludo.className = "color"

//le ponemos una clase, para el directo por el javascript

/*
 1 crear la etiqueta
 2 agregamos el contenido a la etiqueta
 3 ubicar la etiqueta en mi html
*/

//1
let nombre = document.createElement("p");
//2
nombre.innerHTML = "<h1>CREAMOS PARRAFo</h1>";
//3
document.body.append(nombre);

//ahora vamos a eliminar algo

let saludo = document.getElementById("saludo");
saludo.remove();

// pasamos los arrays desde javascript (ya no usamos prompt)

let personas = ["juan","juan2","pedro","ivan"];

let padre = document.getElementById("padre");

for (const persona of personas){
    let li = document.createElement("li");
    li.innerHTML = persona;
    padre.append(li);
}

