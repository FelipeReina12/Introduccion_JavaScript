// for Loop
// for (let i = 0; i <= 10; i++) {  // for tiene 3 partes: 
//     // 1. Inicialización: se ejecuta una vez al inicio del bucle. se declara e inicializa la variable de control i = 0;
//     // 2. Condición: se evalúa antes de cada iteración. mientras i sea menor o igual a 10, el bucle continúa
//     // 3. Incremento: se ejecuta al final de cada iteración. aumenta el valor de i en 1 después de cada validación
//     console.log(i);
// }

// Identificar números pares del 0 al 100
// for(let i = 1; i <= 100; i++) {
//     if(i % 2 === 0) {
//         console.log(`El número ${i} es par`);
//     } else {
//         console.log(`El número ${i} es impar`);
//     }
// }

const carrito = [
    {nombre: "Monitor 20 pulgadas", precio: 500},
    {nombre: "Televisión 50 pulgadas", precio: 700},
    {nombre: "Tablet", precio: 300},
    {nombre: "Audifonos", precio: 100},
    {nombre: "Teclado", precio: 50},
    {nombre: "Celular", precio: 450},
    {nombre: "Laptop", precio: 600},
    {nombre: "Bocina", precio: 200},
    {nombre: "Mouse", precio: 20},
];

// for(let i = 0; i < carrito.length; i++) {
//     console.log(carrito[i].nombre);
// } 

// while Loop
// let i = 1;  // Indice o valor inicial

// while (i < 100) {  // Condición
//     if (i % 2 === 0) {
//         console.log(`El número ${i} es par`);
//     } else {
//         console.log(`El número ${i} es impar`);   
//     }
//     i++;  // Incremento
// }

// let j = 0;

// while(j < carrito.length) {
//     console.log(carrito[j].nombre);
//     j++;
// }

// do while Loop  
// Esto ejecuta el código al menos una vez, y luego verifica la condición aunque la condición no se cumpla
// Por eso i sera 100 y se imprimirá 100 una vez
let i = 100;

do {
    console.log(i);
    i ++;
} while(i < 10);


