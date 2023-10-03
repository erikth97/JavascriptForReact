

const erik = {
    nombre: 'Tamayo',
    edad: '25',
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

const fabian = {
    nombre: 'Heredia',
    edad: '24',
    imprimir() {
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
    }
}

// erik.imprimir()
// Se debe de crear con la palabra new

function Persona(nombre, edad) {
    console.log('Se ejecuto esta linea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`Nombre; ${this.nombre} - edad: ${this.edad}`);
    }

}

const maria  = new Persona('Maria', 18);
const melissa = new Persona('Melissa', 35);
// console.log(maria);
maria.imprimir();
melissa.imprimir();