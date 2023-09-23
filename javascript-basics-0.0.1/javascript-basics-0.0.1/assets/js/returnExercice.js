
function crearPersona(nombre, apellido) {
    return {nombre, apellido}
}
const crearPersona = ( nombre, apellido ) => ({nombre, apellido})



const persona = crearPersona ('Erik', 'Fabian');
console.log(persona); 


function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...args ) => {
    console.log({edad, args});
}

imprimeArgumentos2(10, true, false, 'Erik', 'Tamayo')