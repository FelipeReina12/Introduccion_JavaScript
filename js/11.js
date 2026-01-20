const producto = {
    nombreProducto: "Monitor de 20' Pulgadas",
    precio: 300,
    disponible: true,
    color: "rojo",
    tamaño: 30, 
}

// Agregar propiedades a objeto
producto.imagen = "foto.jpg";

// Forma anterior
// const precioProducto = producto.precio;  // Aquí accedemos a la propiedad 'precio' del objeto 'producto' con una nueva variable
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);

// Dsetructuring
const {precio} = producto;  // Creamos la variable y extraemos el valor de la propiedad 'precio' del objeto 'producto' de una manera mas sencilla
const {nombreProducto, imagen, disponible} = producto;  // Podemos crear varias variables al mismo tiempo
// Con destructuring las variables deben llamarse igual que las popiedades del objeto



console.log(precio);
console.log(nombreProducto);
console.log(imagen);
console.log(disponible);





