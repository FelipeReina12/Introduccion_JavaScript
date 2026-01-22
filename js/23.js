// Switch
const metodoPago = "bitcoin";

switch(metodoPago) {  // Switch evalua la variable que le pasamos
    case "tarjeta":  // Si el método de pago es efectivo. si tenemos muchas verificaciones es mejor usar case en lugar de if else
        console.log(`Pagaste con tarjeta`);
        break;  // El brak es para que no siga evaluando los demás casos
    case "bitcoin":  
        console.log(`Pagaste con bitcoin`);
        break;
    case "efectivo":  
        console.log(`Pagaste con efectivo`);
        break;
    case "cheque":  
        console.log(`Pagaste con cheque`);
        break;
    default:  // Se ejecuta si no se cumple ningún case
        console.log("Aún no has pagado");
        break;  // Siempre es buena práctica poner un break en el default
}
