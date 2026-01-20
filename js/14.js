// Arrays o arreglos de objetos, sirven para agrupar varios objetos
// Los arrays en JS son similares a las listas de Pyhton

const numeros = [10, 20, 30, 40, 50];
// Para ver mas claro los elementos del array en una tabla con indice y valor
// console.table(numeros);

const arreglo = ["Hola", 20, true, null, {nombre: "Juan", trabajo: "Desarrollador de software"}, [1, 4, 8, "Hola"]];
// console.log(arreglo);

// Acceder a los valores de un array
// console.log(numeros[4]);  // Pasamos el indice del valor que queremos acceder

// Conocer la cantidad de elementos que tiene un array
// console.log(meses.length);

// Recorrer los elementos de un array
// numeros.forEach(function(numero){  // forEach es un metod que recorre cada uno de los elementos del array y numero es el parametro que imprime cada elemento
//     console.log(numero);
// });

// Agregar o modificar elementos al array de una manera poco común
// numeros[5] = 60;  // Agrega el valor 60 en la posicion 5 del array numeros
// numeros[2] = 35;  // Modifica el valor en la posicion 2 del array

// Otra forma de hacerlo es con el método push para agregar elementos al final del array
numeros.push(70);
numeros.push(80);
// Tambien se pueden agregar multiples elementos al final del array
numeros.push(90, 100, 110); 

// Ahora agregar elementeos al inicio del array con el metodo unshift
numeros.unshift(-10);
// De igual manera se pueden agregar multiples elementos al inicio del array
numeros.unshift(-20, -30);


// Eliminar elementos del array
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
// meses.pop();  // Elimina el ultimo elemento del array
// meses.shift();  // Elimina el primer elemento del array
// meses.splice(2, 1);  // Recorre el array hasta la posicion 2 y elimina 1 elemento (Marzo)
// console.table(meses);

// No es recomendable eliminar o agregar elementos de un array de esta manera 
// Lo mejor es crear un nuevo array con los elementos que queremos y ahi agregar o eliminar elementos
// Para ello copiamos el array original con ...
// A esto se le llama Rest o Spread Operator

const nuevoArreglo = [...meses, "Junio"];  // Copiamos el array meses y agregamos un nuevo elemento al final es parecido a push
const nuevoArreglo2 = ["Diciembre", ...meses];  // Es similar solo que cambia el orden y esto agrega elementos al inicio parecido a unshift

console.table(nuevoArreglo2);