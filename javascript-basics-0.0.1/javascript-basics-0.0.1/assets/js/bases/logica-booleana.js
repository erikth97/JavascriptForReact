const regresaTrue =() => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());


console.warn('And'); // true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && !false); //true

console.log('=======')
console.log( regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log('==== & =====');
regresaFalse() && regresaTrue();

console.log( '4 condiciones', true && true && true && false); // false


console.warn('OR'); //true
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log( '4 condiciones', true || true || true || false); //true



console. warn('Asignaciones');

const soyUndefined = undefined;
const souNull = null;
const soyFalso = false;

const a1 = false && 'Hola Mundo' && 150; //?
const a2 = 'Hola' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || souNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5})

if (true || true || true || false ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}



















