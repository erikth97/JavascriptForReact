




// Entra a un sitio web para consultar si esta abierto hoy...
const dia = 0; // 0 = domingo ....
const horaActual = 10;


let horaApertura;
let mensaje // Abierto o cerrado, abrimos a las xxxx

if (dia === 0 || dia === 6) {
    console.log('Fin de semana');
    horaApertura = 9;
} else {
    console.log('Dia de semana');
    horaApertura = 11;
}


if (horaActual >= horaApertura) {
    mensaje = 'Esta abierto';
} else {
    mensaje = `Esta cerrado, hoy abirmos a las ${horaApertura}`;
}



console.log({horaApertura})
