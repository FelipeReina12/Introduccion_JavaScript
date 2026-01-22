// This
const reservacion = {
    nombre: "Juan Felipe",
    apellido: "Reina",
    habitacion: 303,
    total: 910,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó la habitacion ${this.habitacion} y el total a pagar es de ${this.total}`);
    }
}
reservacion.informacion();
// Lo que hace this es hacer referencia al objeto u objetos sobre el cual se está haciendo llamar la función

const reservacion2 = {
    nombre: "Javier",
    apellido: "Dominguez",
    habitacion: 405,
    total: 630,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} ${this.apellido} reservó la habitacion ${this.habitacion} y el total a pagar es de ${this.total}`);
    }
}
reservacion2.informacion();