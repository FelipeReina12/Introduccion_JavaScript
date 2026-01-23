// Promises en JavaScript
// En los promises existen 3 valores posibles
// 1. Pending: No se ha cumplido pero tampoco se ha rechazado
// 2. Fulfilled: Ya se cumplió
// 3. Rejected: Se ha rechazado o no se puede cumplir
const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false;

    if(auth) {
        resolve("Usuario autenticado");
    } else {
        reject("No se pudo autenticar el usuario")
    }
});
usuarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))
