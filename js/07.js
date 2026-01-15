// Orden de las operaciones
let resultado;

resultado = 20 + 30 * 2;
// primero se haga la suma y luego la multiplicación
// Colocar en un paréntesis la operación que se quiere que se ejecute primero
resultado = (20 + 30) * 2;

// Calculando el iva de un producto

let producto, iva;

producto = 500;
iva = producto * .19;
producto = producto + iva; // nuevo valor del producto con iva incluido

// console.log(resultado);
// alert("EL resultado es: " + resultado);  //Solo como ejemplo para mostrar una alerta

// console.log(producto);
// alert("EL resultado es: " + producto);  //Solo como ejemplo para mostrar una alerta

// Incrementos
let puntaje = 10;
// puntaje++; // puntaje = puntaje + 1
// puntaje--;  // puntaje = puntaje - 1

// Para hacer el incremento o decremento en un console.log
// console.log(++puntaje); // Incremento antes de mostrar
// console.log(puntaje++); // Incremento después de mostrar

// Hacer un incremento o decremento con un valor específico
puntaje += 5; // puntaje = puntaje + 5
puntaje -= 3; // puntaje = puntaje - 3

console.log(puntaje);