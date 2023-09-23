
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
   // console.log({edad, args});
   return args;
}

const [ soltero, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Erik', 'Tamayo')
console.log({soltero, vivo, nombre, saludo})

const {apellido: nuevoApellido } = crearPersona( 'Erik', 'Tamayo');
console.log({ nuevoApellido })