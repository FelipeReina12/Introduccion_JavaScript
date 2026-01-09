// Tipos de datos en JavaScript
// String o cadena de texto 
// Pueden ser con comillas dobles o sencillas
const producto = "Monitor de 20 pulgadas";
// si quiero usar comillas dentro de un string uso el escape \
const producto1 = "Monitor de 22\" "
const producto2 = String("Monitor de 24 pulgadas");
// typeof nos muestra el tipo de dato de la variable
const producto3 = new String("Monitor de 30 pulgadas");  // es un objeto
console.log(typeof producto3);


// Mostrar el numero de caracteres de un string con .length
const tweet = "Aprendiendo JavaScripr con el curso de Desarrollo Web completo ";
console.log(tweet.length);

// Verificar si hay una palabra dentro de un string con .includes()
const email = "felipe12.reina@gmail.com";
console.log(email.includes("@"));  // Devulve true

// Validar la posición de una palabra o letra dentro de un string con .indexOf()
const palabra = "Hola mundo, bienvenidos al curso de Desarrollo Web completo";
console.log(palabra.indexOf("mundo"));  // Devuelve la posición inicial de la palabra, si no la encuentra devuelve -1
// Includes retorna true o false
console.log(palabra.includes("mundo"));  // Devuelve true