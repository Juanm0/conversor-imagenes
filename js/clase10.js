/* 
LOCALSTORAGE
SESIONSTORAGE
JSON
*/

 localStorage.setItem("nombre","juan");
 localStorage.setItem("edad","15");
 localStorage.setItem("direccion","sarratea");

 for (let i=0; i < localStorage.length;i++){
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);

    console.log(`clave: ${clave} valor: ${valor}`);
    
 }

 /* 
 localStorage.clear() borra todo el localstorage

 localStorage.removeItem("nombre") borra solo el elemento que tenga esa clave, por lo tanto borra el valor tambien
 */

 localStorage.removeItem("nombre");