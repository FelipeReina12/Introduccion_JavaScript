// Funciones en JavaScript
// Permiten tenere un codigo mas ordenado y reutilizable

// JavaScript se ejecuta en dos etapas: 
// 1. Registro donde se crean las funciones y se almacenan en la memoria
// 2. Ejecución donde se ejecuta el código linea por linea

// Declaración de la función
function sumar() {
    console.log(10 + 10);
}
// Llamado de la función
sumar();  // Para esta sintaxis se puede llamar antes o después de la declaración de la función, a esto se le llama "hoisting"

// Expresión de la función
// Aquí si se llama primero la función se genera un error ya que no se ha declarado
const sumar2 = function() {  // Se considera mas una variable que una función 
    console.log(3 + 3);  
}
sumar2();  // En esta sintaxis no se puede llamar antes de la declaración de la función 

// IIFE - Immediately Invoked Function Expression
// Esta función evita que se ejecute otra variable que tengamos con el mismo nombre
// Protejer que no se mezcle las variables y funciones con otras librerías o plugins
(function() {
    console.log("Esto es una función que se ejecuta inmmediatamente");
})();