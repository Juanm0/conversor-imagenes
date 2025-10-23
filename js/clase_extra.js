const contenedor = document.getElementById("productos");

/* 


const contenedor = document.getElementById("productos");

document es el objeto que representa la página web (DOM).

getElementById("productos") busca en el HTML un elemento con id="productos".

Ejemplo en HTML: <div id="productos"></div>

const contenedor guarda esa referencia para poder insertar HTML dentro de esa caja más adelante.

const significa que la variable no será reasignada (no vas a hacer contenedor = otraCosa).

*/

const PRODUCTOS = [
    { id: 1, nombre: "zapatilla", precio: 1600, imagen: "https://nikearprod.vtexassets.com/arquivos/ids/1643232-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 2, nombre: "remera", precio: 2500, imagen: "https://nikearprod.vtexassets.com/arquivos/ids/1290725-1200-1200?width=1200&height=1200&aspect=true" },
    { id: 3, nombre: "gorra", precio: 1400, imagen: "https://nikearprod.vtexassets.com/arquivos/ids/1265910-1200-1200?width=1200&height=1200&aspect=true" }
];

/* 

const PRODUCTOS = [ ... ]

Aquí definís un array llamado PRODUCTOS. Un array es una lista ordenada.

Cada elemento del array es un objeto con propiedades: id, nombre, precio, imagen.

Un objeto es { clave: valor, ... }.

Este array representa los productos que vas a mostrar en la página.

*/

const getCard = (item) => {
    return (`
    <div class="card" style="width: 18rem;">
        <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
        <div class="card-body">
            <h5 class="card-title">${item.nombre}</h5>
            <p class="card-text">$${item.precio}</p>
            <a href="#" class="btn btn-primary">Comprar</a>
        </div>
    </div>
        `);
};

/* 
const getCard = (item) => { ... }

getCard es una función flecha (arrow function).

Forma: const nombre = (param) => { ... }

Recibe un item (un objeto producto) y devuelve (return) un bloque de HTML en formato string.

Observá que usa template literals (comillas invertidas `...`) que permiten:

Multilínea (el HTML en varias líneas).

Interpolación: ${item.nombre}, ${item.precio}, ${item.imagen} para insertar valores dentro del string.

Resultado: getCard(producto) devuelve algo como:

<div class="card" style="width: 18rem;">
  <img src="https://..." alt="zapatilla">
  ...
</div>

*/

const cargarProductos = (datos, contenedor) => {
    let acumulador = "";
    datos.forEach((elemento) => {
        acumulador += getCard(elemento);
    });
    contenedor.innerHTML = acumulador;
}

/* 

const cargarProductos = (datos, contenedor) => { ... }

Otra función flecha que recibe:

datos: un array (ej. PRODUCTOS).

contenedor: la caja del DOM donde vamos a poner las tarjetas.

Dentro:

let acumulador = "";
datos.forEach((elemento) => {
    acumulador += getCard(elemento);
});
contenedor.innerHTML = acumulador;


let acumulador = "" empieza una cadena vacía donde vamos a acumular el HTML.

datos.forEach(...) recorre cada elemento del array (es como un for).

Por cada elemento (cada producto), hace acumulador += getCard(elemento);

+= concatena: añade al final del string actual la tarjeta HTML.

Finalmente contenedor.innerHTML = acumulador; inserta ese HTML completo dentro del elemento del DOM.

innerHTML reemplaza el contenido HTML existente por la cadena que le pasás.
*/

cargarProductos(PRODUCTOS, contenedor)
//llamamos a la funcion para que arranque


/* 
Flujo de ejecución (qué pasa cuando carga la página)

El script obtiene el elemento #productos del DOM.

Define la lista PRODUCTOS.

Define getCard (la plantilla HTML por producto).

Define cargarProductos (la función que arma todo).

Llama cargarProductos(...), que:

Recorre cada producto.

Genera con getCard el HTML de cada uno.

Junta todo en acumulador.

Inserta el HTML final con innerHTML.

Resultado visual: en la página aparecen las tarjetas (cards) con imagen, nombre, precio y botón.



Conceptos clave para entender bien (resumen)

Arrow functions: (param) => { ... } igual que function(param) { ... } pero con sintaxis más corta.

Arrays: lista de elementos; forEach recorre cada elemento.

Objetos: { id: 1, nombre: 'zapa' } con propiedades.

Template literals: `Hola ${nombre}` para meter variables dentro de strings y usar multilínea.

DOM: document.getElementById obtiene elementos del HTML; element.innerHTML = ... escribe HTML.

Concatenación: acumulador += getCard(elemento) agrega más HTML a la cadena.

*/