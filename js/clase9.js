/* 
eventos: acciones que los usuarios hacen

*/


let button = document.getElementById("btnPrincipal");

button.addEventListener("click", respuestaClick);
 
function respuestaClick(){
    console.log("click1");
    
}

// segunda forma de hacerlo (con onclick)

let button2 = document.getElementById("btnSecundario");
button2.onclick = () => {console.log("click2");
}

/* la ventaja de la forma 1, es que le podemos pasar una variable donde dice "click" para que sea mas dinamico y tal vez usemos otro evento en el futuro (tambien hay evento doble click que se llama "dblclick")
tambien existen los siguentes:
mousedown/mouseup: se oprime o suelta el boton del mouse sobre un elemento
mouseover/mouseout: el puntero del mouse se mueve sobre/sale del elemento
mousemove: el movimiento del mouse sobre el elemento activa el evento

abria que ver la clase devuelta para ver cositas como el keyup y eventos de ese estilo
*/
 


