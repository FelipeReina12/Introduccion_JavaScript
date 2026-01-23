// Try catch
// El código de JavaScript se ejecuta de arriba hacia abajo
// Cuando hay un error, se detiene la ejecución y no se ejecuta el código que sigue
const numero1 = 20;
const numero3 = 40;

console.log(numero1);

try {  // Se utiliza para intentar ejecutar un código que puede fallar 
    console.log(numero2);
    
} catch (error) {
    console.log(error);
}

console.log(numero3);