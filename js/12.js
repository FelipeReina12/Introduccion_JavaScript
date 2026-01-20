// "use strict";  // Modo estricto para que el código sea más seguro
// nos marcará errores que de otra forma no se verían

const producto = {
  nombreProducto: "Monitor de 20' Pulgadas",
  precio: 300,
  disponible: true,
  color: "rojo",
  tamaño: 30,
};

// Object.freeze(producto);  // Congela el objeto, no permite agregar, modificar o eliminar propiedades
// producto.imagen = "foto_producto.jpg";

Object.seal(producto);  // sella el objeto, no permite agregar o eliminar propiedades, pero si modificar las existentes
producto.precio = "Nuevo Precio";

// console.log(Object.isFrozen(producto));  // Verifica si el objeto esta congelado y devuelve true o false
console.log(producto);