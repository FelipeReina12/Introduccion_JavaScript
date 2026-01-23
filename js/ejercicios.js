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


// Arrays
// Crear un array con los videojugos favoritos 
const videojuegos = [
    {nombre: "The Legend of Zelda: Breath of the wild", plataforma: "Nintendo Switch", año: 2017},
    {nombre: "Super Mario Odyssey", plataforma: "Nintendo Switch", año: 2017},
    {nombre: "Grand Theft Auto V", plataforma: "Multiplataforma", año: 2013},
    {nombre: "The Witcher 3: Wild Hunt", plataforma: "Multiplataforma", año: 2015},
    {nombre: "Red Dead Redemption 2", plataforma: "Multiplataforma", año: 2018},
    {nombre: "Minecraft", plataforma: "Xbox, Pc", año: 2011},
]
// console.log(videojuegos);

// Verificar si un videojuego existe en el array
videojuegos.forEach (juego => {
    if(juego.nombre == "Minecraft"){
        console.log("Minecraft si está descargado");
    }
});

// Filtrar videojuegos que sean de Nintendo Switch
const nintendo = videojuegos.filter(juego => juego.plataforma === "Nintendo Switch");
console.log(nintendo);

// Estructura de control
const dinero = 910;

if(dinero >= 1000){
    console.log("Tienes suficientes fondos para realizar la compra");
}else{
    console.log("Saldo insuficiente para realizar la compra");
}

const universidad = "Estudiante";
let pago = 5000;

if(universidad === "Director"){
    console.log(`El pago para el ${universidad} es de ${pago}`);
} else if(universidad === "Decano"){
    console.log(`El pago para el ${universidad} es de ${pago + 1000}`);
} else if(universidad === "Estudiante"){
    let matricula = 900;
    console.log(`El ${universidad} no recibe pago, al contrario debe pagar ${matricula} de matricula`)
} else {
    console.log("No pertenece a la universidad");
}

// comparación con switch
const musico = "saxofonista";
switch(musico) {
    case "guitarrista":
        console.log("Tienes ensayo el dia lunes");
        break;
    case "bajista":
        console.log("Tienes ensayo el dia martes");
        break;
    case "saxofonista":
        console.log("Tienes ensayo el dia miércoles");
        break;
    default:
        console.log("No tienes ensayos esta semana");
}

// for Loop
// Identificar números pares del 0 al 100
for(let num = 0; num <= 100; num++){
    if(num % 2 === 0){
        console.log(`El número ${num} es par`)
    } else {
        console.log(`El número ${num} es impar`);
    }
}

//Recorrer el array de videojuegos e imprimir sus nombres
for(let j = 0; j < videojuegos.length; j++){
    console.log(videojuegos[j].nombre);
}

//While Loop
// Tabla de multiplicar del 5
let contador = 1;

while(contador <= 10){
    console.log(`5 x ${contador} = ${5 * contador}`);
    contador++;
}

let potencia = 2;

while(potencia <=20){
    console.log(`La potencia de ${potencia} es ${potencia * potencia}`);
    potencia++;
}

// Uso de This en objetos
const empresa = {
    nombre: "Tech Solutions",
    empleados: 150,
    capital: 500000,
    ubicacion: "Bogotá",
    info: function(){
        console.log(`La empresa ${this.nombre} tiene ${this.empleados} empleados, un capital de ${this.capital} y está ubicada en ${this.ubicacion}`);
    }
}
empresa.info();

// Programación Orientada a Objetos (POO)
// Object constructor 
function Clase(titulo, duracion, precio){
    this.titulo = titulo;
    this.duracion = duracion;
    this.precio = precio;
}
// Agregamos una propiedad al objeto
const clase1 = new Clase("JavaScript desde cero", "8 horas", 12);
const clase2 = new Clase("HTML y CSS", "6 horas", 10);

// Con prototype agregamos un método al objeto
Clase.prototype.detallesClase = function() {
    return `La clase ${this.titulo} tiene una duración de ${this.duracion} y cuesta $${this.precio}`;
}
console.log(clase1.detallesClase());
console.log(clase2.detallesClase());

// Clases en JavaScript
class Apple {
    constructor(modelo, almacenamiento, precio){
        this.modelo = modelo;
        this.almacenamiento = almacenamiento;
        this.precio = precio;
    }
    formatearApple(){
        return `El modelo ${this.modelo} tiene un almacenamiento de ${this.almacenamiento} y cuesta $${this.precio}`;
    }
}
const iphone = new Apple("Iphone 13 Pro", "256GB", 999);
const ipad = new Apple("Ipad Air", "128GB", 599);
const macbook = new Apple("Macbook Pro", "1TB", 1250);

console.log(iphone.formatearApple());
console.log(ipad.formatearApple());
console.log(macbook.formatearApple());

// Herencia
//Heredamos el constructor y métodos de otra clase 
class MercadoLibre extends Apple {
    constructor(modelo, almacenamiento, precio, tienda){
        super(modelo, almacenamiento, precio);
        this.tienda = tienda;
    }
    formatearApple(){
        return `${super.formatearApple()} y está disponible en la tienda ${this.tienda}`;
    }
}
const productoMl = new MercadoLibre("Iphone 17 Pro Max", "1TB", 1599, "WillTech");
console.log(productoMl.formatearApple());


// Promise
const registroUsuario = new Promise( (resolve, reject) => {
    const registrado = false;
    if(registrado){
        resolve("Usuario registrado exitosamente");
    } else {
        reject("Error al registrar el usuario");
    }
});
registroUsuario
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))
