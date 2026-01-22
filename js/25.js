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

// for Each
// Solo se puede usar en arreglos (Arrays)
carrito.forEach(producto => console.log(producto));  // forEach recibe una función como parámetro para ejecutarla en cada iteración

// Map
arregloNuevo = carrito.map(producto => `${producto.nombre} - ${producto.precio}`);  // Map también recibe una función com parámetro pero retorna un nuevo arreglo con los resultados de la función
console.log(arregloNuevo);
// forEach sirve para imprimir un arreglo en consola
// map sirve para crear un nuevo arreglo con los resultados de la función que se le pasa como parámetro