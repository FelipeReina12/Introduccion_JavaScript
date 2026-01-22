// Estructura de control
// const puntaje = 1000;  // Un solo igual es de asignación

// if(puntaje === 1000) {  // Tres veces signo igual es de comparación
//     console.log("Si puntaje es 1000")
// } else {
//     console.log("No es igual")
// }

// if(puntaje != 500) {
//     console.log("No es igual")
// } else {
//     console.log("Si es igual")
// }

// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito) {
//     console.log("Pago realizado correctamente")
// } else {
//     console.log("Saldo insuficiente")
// }


const rol = "editor";

if(rol === "administrador") {
    console.log("Acceso a todo el sistema")
} else if(rol === "editor") {
    console.log("Eres editor, puedes entrar pero no puedes elminar")
} else {  // El else siempre va al final
    console.log("No tienes acceso")
}