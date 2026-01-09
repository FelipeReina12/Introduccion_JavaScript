// Objeto math en JavaScript
// window es para ver los objetos globales en en navegador
let resultado;  // let declara una variable que puede cambiar su valor

resultado = Math.PI;  // Número pi
resultado = Math.round(2.8);  // Redondea al entero más cercano
resultado = Math.ceil(2.1); // Redondea hacia arriba
resultado = Math.floor(2.9); // Redondea hacia abajo
resultado = Math.sqrt(144); // Raíz cuadrada
resultado = Math.abs(-500); // Retorna el valor absoluto
resultado = Math.min(3,5,1,6,7,-2); // Retorna el número menor
resultado = Math.max(3,5,1,6,7,-2); // Retorna el número mayor
resultado = Math.random(); // Número aleatorio entre 0 y 1
// Usando random y floor para obtener un número aleatorio entre 0 y 100
resultado = Math.floor( Math.random() *100 );



console.log(resultado);