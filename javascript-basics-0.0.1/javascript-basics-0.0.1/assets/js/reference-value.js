let a = 10;
let b = a;
a = 30;

console.log({a, b});



let erik = {nombre: 'Erik'};
let ana = {...erik}
ana.nombre = 'Ana';

console.log({juan, ana})


const cambiaNomnre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNomnre(peter);

console.log({peter, tony});


//Arreglos
const frutas = ['Manzana', 'Pera', 'Pinia'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');


otrasFrutas.push('Mango');

console.log({frutas, otrasFrutas })

