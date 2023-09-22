
function saludar(nombre) {
    console.log(arguments);
    console.log('Hola' + nombre);
    return 10;
}

const saludar2 = function(nombre) {
    console.log('Hola' + nombre);
}

const saludarFlecha = () => {
    console.log('Hola Flecha')
}

const saludarFlecha2 = (nombre) => {
    console.log('Hola' + nombre)
}


const retornoDeSaludar = saludar ('Erik', 25, true, 'Monterrey')
console.log({retornoDeSaludar});




saludarFlecha()
saludarFlecha2()