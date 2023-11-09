const heroes = ['Batman', 'Superman', 'Flash', 'Aquaman'];
//heroes.sort();


const deleteHeroes = heroes.toSpliced(0, 2, 'Green Lanter');

console.table(heroes);
console.table(deleteHeroes);

