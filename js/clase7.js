// // // function mayorQue(n){
// // //     return (m) => m > n;
// // // }
// // // //funcion de orden superior por que retorna una funcion

// // // let mayorQueOnce = mayorQue(11);
// // // console.log(mayorQueOnce(4));
// // // //false porque el 4 no es mayor que 11

// // function asignarOperacion(op){
// //     if(op == "sumar"){
// //         return (a,b) => a+b;
// //     }else if (op == "restar"){
// //         return (a,b) => a-b;
// //     }
// // }

// // let suma = asignarOperacion("sumar");
// // console.log(suma(3,4));

// // let resta = asignarOperacion("restar");
// // console.log(resta(5,2));

// function porCadaUno(arreglo,funcion){
//     for (const elemento of arreglo){
//         funcion(elemento);
//     }
// }

// // console.log(console.log);

// porCadaUno([1,2,3,4,5],console.log);
// //le pasamos una funcion por parametro

// //metodos de busqueda y transformacion

const numeros = [1,2,3,4,5,6];
//va a hacer un for por cada uno
numeros.forEach((elem)=>{
    console.log(elem);
})

//simplifica hacer un for que recorre los elementos y los muestra, forEach es mas comodo

//metodo find, lo que hace es encontrar un elemento de un array

const cursos = [
    {nombre: "JavasScript" , precio: 30000 },
    {nombre: "ReactJS", precio: 30000 },
];

const result = cursos.find((elem) => elem.nombre === "JavasScript");

//console.log(result);

//filter filtra los elemetos



