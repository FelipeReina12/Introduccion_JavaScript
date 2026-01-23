// Seleccionar elemento del html
const boton = document.querySelector('#boton');
boton.addEventListener('click', () => {
    // Si el navegador soporta notificaciones, mostrar directamente
    if(Notification.permission === 'granted') {
        mostrarNotificacion();
    }
    // Si no, solicitar permiso al usuario
    else if(Notification.permission !== 'denied') {
        Notification.requestPermission()
            .then(resultado => {
                if(resultado === 'granted') {
                    mostrarNotificacion();
                }
            });
    }
    // Si ya fue rechazado
    else {
        alert("Has rechazado las notificaciones. Actívalas en la configuración del navegador. ");
    }
});

function mostrarNotificacion() {
    new Notification("Esta es una notificación", {
        icon: './img/ccj.png',
        body: 'Código con Juan - Los mejores tutoriales de programación'
    });
}