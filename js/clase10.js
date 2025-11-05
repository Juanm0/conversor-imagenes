/* 
LOCALSTORAGE
SESIONSTORAGE
JSON
*/
/* 
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

 //localStorage.removeItem("nombre");

 /* 
 vamos a almacenar un objeto en localstorage y despues lo vamos a traer devuelta
 
 const persona = {nombre: "maria", edad: 19};
 const personaJson = JSON.stringify(persona);

 localStorage.setItem("persona", personaJson); */

/* const personaRecuperada = localStorage.getItem("persona");

console.log(JSON.parse(personaRecuperada)); */

