// Async / await
function descargarNuevosClientes() {
    return new Promise( resolve => {
        console.log('Descargando clientes... espere ...')

        setTimeout( () => {
            resolve('Los clientes fueron descargados')
        }, 5000)
    });
}

function descargarUltimosPedidos() {
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere ...')

        setTimeout( () => {
            resolve('Los pedidos fueron descargados')
        }, 3000)
    });
}

// Dos llamados independientes
async function app() {
    try {
        // const clientes = await descargarNuevosClientes();
        // const pedidos = await descargarUltimosPedidos();
        // console.log(clientes);
        // console.log(clientes);

        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
        // console.log('Este código sí se bloquea');  // Se ejecuta hasta que se reusuelva la promesa de await
    } catch (error) {
        console.log('app lista')
    }
}
app();

// console.log('Este código no se bloquea');





// setTimeout( () => {  // Simula el tiempo de descarga
//     console.log("SetTimeout....")
// }, 1000)

// setInterval( () => {  // cada cierto tiempo se muestra el mensaje
//     console.log("SetInterval....")
// }, 3000)