// Funciones en JavaScript
// Crea una función que reciba dos números y una operación (+, -, *, /) y retorne el resultado.
function calcular(numero1, numero2) {
    console.log(numero1 + numero2);
}
calcular(6, 4);

// Ahora con expresión de la función
// let sumar = ((numero1 , numero2) => console.log(numero1 + numero2));
// sumar(10, 5);

// Crea una función que reciba una edad y retorne si es "Menor de edad", "Mayor de edad" o "Adulto mayor" (65+).
// function verificarEdad(edad) {
//     switch (true) {
//         case(edad < 18):
//             console.log("Menor de edad");
//             break;
//         case(edad >= 18 && edad < 65):
//             console.log("Mayor de edad");
//             break;
//         case(edad >= 65):
//             console.log("Adulto mayor");
//             break;
//         default:
//             console.log("Edad no valida");
//     }
// }
// verificarEdad(23);

// Ahora con expresión de la función
let verificarEdad = (edad => {
    switch (true) {
        case(edad < 18):
            console.log("Menor de edad");
            break;
        case(edad >= 18 && edad < 65):
            console.log("Mayor de edad");
            break;
        case(edad >= 65):
            console.log("Adulto mayor");
            break;
        default:
            console.log("Edad no valida");
    }
})
verificarEdad(70);

// Descripción: Crea una función que reciba una temperatura y un tipo ("C" para Celsius o "F" para Fahrenheit) y convierta:
// De Celsius a Fahrenheit: (C × 9/5) + 32
//De Fahrenheit a Celsius: (F - 32) × 5/9

function convertirTemperatura(temperatura, tipo) {
    if(tipo === "C") {
        let farenheit = (temperatura * 9/5) + 32;
        console.log(`${temperatura}°C son ${farenheit}°F`);
    } else if(tipo === "F") {
        let celcius = (temperatura - 32) * 5/9;
        console.log(`${temperatura}°C son ${celcius}°f`);
    }
}
convertirTemperatura(25, "C");
convertirTemperatura(77, "F");

// Ahora con expresión de la función
let conversorTemperatura2 = ((temperatura, tipo) => {
    if(tipo === "C") {
        let farenheit = (temperatura * 9/5) + 32;
        console.log(`${temperatura}°C son ${farenheit}°F`);
    } else if(tipo === "F") {
        let celcius = (temperatura - 32) * 5/9;
        console.log(`${temperatura}°C son ${celcius}°f`);
    }
})
conversorTemperatura2(25, "C");
conversorTemperatura2(77, "F");

// Funciones con valor de retorno
function sumar(n1, n2) {
    return n1 +n2;  // El return nos permite almacanar el valor en una variable
}
const resultado = sumar(2, 3);
console.log(resultado);

// Crea una función que reciba un número y retorne su doble.
function doble(numero) {
    return numero * 2;
}
const resultadoDoble = doble(8);
console.log(resultadoDoble);

// Con expresión de la función
let doble2 = (numero => numero *2);
const resultadoDoble2 = doble2(10);
console.log(resultadoDoble2);

// Métodos de propiedad 
const persona = {
    nombre: "Juan",
    edad: 23,
    ciudad: "Machetá",
    saludar: function(saludo) {
        console.log(`${saludo}, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}`);
    }
}
persona.saludar("Hola, buenos dias")
