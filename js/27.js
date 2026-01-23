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
// Aqui agrega una nueva propiedad a la clase Producto
const producto2 = new Producto('Monitor curvo de 49 pulgadas', 800, "China");  // Instanciar una clase
const producto3 = new Producto('Laptop', 2500, "Estados Unidos");  
const producto4 = new Producto('Ps Vita', 300, "Corea del norte");  

// Prototype ya no se usa mucho con la llegada de las clases 
// Prototype nos permmite crear funciones que solo se utilizan en  un objeto especifico
Producto.prototype.formatearProducto = function() {
    return `El prducto ${this.nombre} tiene un precio de ${this.precio} y proviene de ${this.origen}`;
}

console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

// Ahora con Cliente
function Cliente(nombre, apellido, saldo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.saldo = saldo;
}
const cliente1 = new Cliente("Juan", "Reina", 500);
const cliente2 = new Cliente("Pedro", "Torres", 1000);

Cliente.prototype.formatearCliente = function() {
    return `El cliente ${this.nombre} ${this.apellido} tiene un saldo de ${this.saldo}`;
}
console.log(cliente1.formatearCliente());
console.log(cliente2.formatearCliente());