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
console.log(true && true);
console.log(true && !false);