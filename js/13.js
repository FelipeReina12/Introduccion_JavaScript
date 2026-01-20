// Unir dos objetos

const producto = {
  nombreProducto: "Monitor de 20' Pulgadas",
  precio: 300,
  disponible: true,
  color: "rojo",
  tamaño: 30,
}

const medidas = {
    peso: "1Kg",
    medida: "1m", 
}
// Lo recomendable es no modificar los objetos originales, sino crear uno nuevo que los una 

const nuevoProducto = {...producto, ...medidas};

console.log(producto);
console.log(medidas);
console.log(nuevoProducto);