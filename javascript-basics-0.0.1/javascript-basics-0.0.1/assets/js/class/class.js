

class Persona {
    nombre = '';
    codigo = '';
    frase = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
    }

}



const spiderman = new Persona('Peter', 'Spider', 'Hola');
console.log(spiderman);