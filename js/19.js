function sumar(n1, n2) {
    return n1 + n2;  // Se usa return para devolver un valor desde la función y poder almacenarlo en una variable
}
const resultado = sumar(2, 3);  // Aquí almacenamos el valor devuelto por la función en la variable resultado
console.log(resultado);

// Ejemplo mas avanzado
let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularImpuesto(total) {
    return total * 1.15;
}


total = agregarCarrito(300);
total = agregarCarrito(500);
console.log(total);

const totalPagar = calcularImpuesto(total);
// console.log("El total a pagar con impuesto es: " + totalPagar.toFixed(2));  // toFixed(2) es un método para limitar los decimales, en este caso a 2
console.log(`El total a pagar con impuesto es: $${totalPagar.toFixed(0)}`);  // Usando template strings