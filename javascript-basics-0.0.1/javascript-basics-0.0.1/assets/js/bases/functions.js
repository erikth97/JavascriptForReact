
function saludar(nombre) {
    console.log(arguments);
    console.log('Hola' + nombre);
    return [1,2,3,4,5]



    console.log('Soy un codigo que esta despues del return')
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
console.log(retornoDeSaludar[0], retornoDeSaludar[1]);


//saludarFlecha()
//saludarFlecha2()

//function sumar (a, b) {
//    return a + b;
//}

const sumar2 = (a,b) => a + b;

console.log(sumar2(2,2));



console.log(sumar2(2,2) );

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2())