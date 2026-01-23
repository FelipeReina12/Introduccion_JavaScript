// Clases
// Las clases siempre van en mayúscula
class Producto { 
    constructor(nombre, precio, disponible){  // El constructor es un método especial para crear e inicializar un objeto creado a partir deuna calse
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    formatearProducto() {
        return `El prducto ${this.nombre} tiene un precio de ${this.precio}`;
    }
    verDisponible() {
        return `Producto ${this.nombre} ${this.disponible}`;
    }
}

const producto = new Producto("Monitor de 32 pulgadas", 400, "No disponible");
const producto2 = new Producto("Ayn Thor", 300 , "Disponible");

// console.log(producto);
// console.log(producto2);

// console.log(producto.formatearProducto());
// console.log(producto2.formatearProducto());

// console.log(producto.verDisponible());
// console.log(producto2.verDisponible());

// Herencia
// Podemos heredad el constructor y los métodos de otra clase
class Libro extends Producto{  // Aqui estamos heredando el constructor y los métodos de Producto
    constructor(nombre, precio, isbn){
        super(nombre, precio);  // Con super accedemos al constructor de la clase padre
        this.isbn = isbn;
    }
    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`;
    }
}
const libro = new Libro("Aprendiendo JavaScript", 20, "12345678-ABCD");
// console.log(libro.formatearProducto());

// Otra clase y con herencia
class Videojuego {
    constructor(nombre, tipoJuego, plataforma, precio){
        this.nombre = nombre;
        this.tipoJuego = tipoJuego;
        this.plataforma = plataforma;
        this.precio = precio;
    }
    obtenerInfo() {
        return `El videojuego ${this.nombre} es de tipo ${this.tipoJuego} y se juega en ${this.plataforma}`;
    }
}
const juego1 = new Videojuego("God of war", "Acción/Aventura", "PS4", 60);
const juego2 = new Videojuego("The legend of Zelda", "Plataformas", "Nintendo", 45);

console.log(juego1.obtenerInfo());
console.log(juego2.obtenerInfo());

class VideojuegoPc extends Videojuego{
    constructor(nombre, tipoJuego, plataforma, precio, peso, requisitos){
        super(nombre, tipoJuego, plataforma, precio);
        this.peso = peso;
        this.requisitos = requisitos;
    }
    obtenerInfo() {
        return `${super.obtenerInfo()}, pesa ${this.peso} GB y requiere ${this.requisitos} para funcionar correctamente.`;
    }
}
const juegoPc = new VideojuegoPc("Cyberpunk 2077", "RPG", "PC", 70, 120, "16GB RAM, GTX 1060");
const juegoPc2 = new VideojuegoPc("Halo 5", "Battle Royale", "PC", 30, 90, "32GB RAM, GTX 5090");

console.log(juegoPc.obtenerInfo());
console.log(juegoPc2.obtenerInfo());