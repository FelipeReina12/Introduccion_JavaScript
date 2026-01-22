// Arrow functions
// Solo funciona para la expresión de funciones es decir cuando se asigna una función a una variable o constante
const sumar2 =  (numero1, numero2) => console.log(numero1 + numero2);  // Cambiamos la palabra function por una flecha => y quitamos las llaves {}
sumar2(3, 4);

const aprendiendoJs = tecnologia => console.log(`Aprendiendo ${tecnologia}`);  // Cuando solo es una linea de código se pueden quitar las llaves {}
// Cuando solo hay un parámetro se pueden quitar los paréntesis ()
aprendiendoJs("JavaScript");
aprendiendoJs("React JS");

// Array methods
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

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

// Verificar si un elemento existe en un array
meses.forEach (mes => {
    if(mes == "Marzo"){
        console.log("Marzo si existe");
    }
});

let resultado;
// some se usa para verificar si un elemento existe en un arreglo de objetos
resultado = carrito.some(producto => producto.nombre == "Celular");

//reduce para sumar los valores de un arreglo
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);  // El 0 es el valor inicial de total

// // Filter para filtrar valores de un array
resultado = carrito.filter(producto => producto.precio > 400);

resultado = carrito.filter(producto =>producto.nombre !== "Tablet");

console.log(resultado);



