//Métodos de propiedad
const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción con el id: ${id}`);
    },
    pausar: function() {
        console.log(`Pausando canción.....`);
    },
    crearPlaylist: function(nombrePlaylist = "Unknown") {
        console.log(`Creando la playlist: ${nombrePlaylist}`);
    },
    reproducirPlaylist: function(nombrePlaylist = "Unknown") {
        console.log(`Reproduciendo la la playlist: ${nombrePlaylist}`);
    },

}
// Podemos agregar metodos a un objeto ya creado y darle una función
reproductor.borrarCancion = function(id) {  
    console.log(`Borrando la cancion con el id: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(30);
reproductor.crearPlaylist("Rock 90's");
reproductor.reproducirPlaylist("Rock 90's");


// Ejemplo con carrito de compras
// const carrito = {
//     agregarProducto : function(nombre, precio) {
//         console.log(`Agregando al carrito el producto: ${nombre} con un precio de $${precio}`);
//     }
// }
// carrito.agregarProducto("camisa", 10);