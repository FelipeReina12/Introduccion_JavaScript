function sumar(numero1, numero2) {  // Los parámetros de la función van entre el paréntesis
  console.log(numero1 + numero2);
}
sumar(10, 10);  // Donde se llama la función van los argumentos es decir los valores reales que se van a pasar a los parámetros
sumar(3, 3);
sumar(6, 9);
sumar(12, 18);

const sumar2 = function (n1, n2) {
  console.log(n1 + n2);
};
sumar2(5, 7);

// Parámetros por default
function saludar(nombre = "Desconocido", apellido = "Desconocido") {
    console.log("hola" + " " + nombre + " " + apellido);
}
saludar("Juan", "Reina");  // Si se pasan los argumentos se usan sus valores
saludar("Julian");  // Si no se pasa el segundo argumento se usa el valor por default que se definió en la función
saludar();  // Si no se pasan argumentos, se usan los dos valores por default