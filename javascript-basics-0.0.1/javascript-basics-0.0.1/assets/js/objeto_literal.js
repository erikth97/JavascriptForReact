let personaje = {
    name: 'Tony Stark',
    codeNmae: 'Iron Man',
    alive: false,
    age: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    suits: ['Mark I', 'Mark V', 'Hulkbuster'],
    address: {
        zip: '1080, 9026',
        location: 'Malibu CA'
    },
    ultima_pelicula: 'Infinity War',
};

console.log ( personaje );
console.log( 'Nombre', personaje['name']);
console.log('Edad', personaje.age);

console.log('Coors', personaje.coords);
console.log('Lat', personaje.coords.lat);

console.log('siutsNumber', personaje.suits.length);
console.log('lastSiut', personaje.suits[personaje.suits.length -1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula', personaje['ultima-pelicula']);
