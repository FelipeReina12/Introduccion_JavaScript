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
meses.forEach(function(mes){
    if(mes == "Marzo"){
        console.log("Marzo si existe");
    }
});

// Includes es la otra forma de virificar si un elemento existe en un arra pero a diferencia de forEach este retorna true o false
// Includes funciona bien en un arreglo plano por que busca un valor especifico
let resultado = meses.includes("Marzo");  // let es una variable que almacena el resultado de la busqueda y se puede reutilizar
console.log(resultado);  // true

// Some es ideal para arreglos de objetos ya que podemos hacer busquedas mas complejas
const busqueda = carrito.some(function(producto){  // Utilizamos una variable para almacenar el resultado, llamamos al arreglo carrito y usamos el metodo some
    return producto.nombre == "Celular";
});

// .Reduce para sumar los valores de un arreglo
resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);  // El 0 es el valor inicial de total

// Filter para filtrar valores de un array
resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre == "Tablet"
});

// Filtar valores que sean diferentes a "Celular"
resultado = carrito.filter(function(producto){
    return producto.nombre != "Celular"
})


console.log(resultado);
