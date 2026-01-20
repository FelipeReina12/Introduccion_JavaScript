// Objetos 

// const nombreProducto = "Monitor de 20' Pulgadas";
// const precio = 300;
// const disponible = true;

//Parcido a los dictionarios en Python
const producto = {
    nombreProducto: "Monitor de 20' Pulgadas",
    precio: 300,
    disponible: true,
}

// Para acceder a las propiedades de un objeto
console.log(producto.nombreProducto);

// Otra forma de acceder a las propiedades de un objeto 
console.log(producto["precio"]);

// Agregar propiedades a objeto
producto.imagen = "imgaen.jpg";
producto.calidad= "Alta";

// Eliminar propiedades a objeto
delete producto.disponible; 

console.log(producto);