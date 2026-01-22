// POO
// Object Literal
const producto = {
    nombre: "Tablet",
    precio: 200,
}

// Otra forma es Object Constructor
// Más dinamico pero poco usado

// Una clase es una forma en la que podemos almacenar datos y funciones de un objeto
function Producto(nombre, precio, origen){  // La clase tiene que ser en mayuscula
    this.nombre = nombre;
    this.precio = precio;
    this.origen = origen;
}

const producto2 = new Producto('Monitor curvo de 49 pulgadas', 800, "China");  // Instanciar una clase
const producto3 = new Producto('Laptop', 2500, "Estados Unidos");  
const producto4 = new Producto('Ps Vita', 300, "Corea del norte");  


console.log(producto2);
console.log(producto3);
console.log(producto4);