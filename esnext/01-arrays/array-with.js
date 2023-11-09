const state = [
    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Superman'
    },
    {
        id: 2,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    },
];


const index = 1;
const newName = 'Green Lantern';


const newState = state.copyWithin(index, {
    ...state.at(index),
    name: newName
});


state[0].name = 'Volcan negro';

console.table(newState);

console.log('El ultimo: ', state.at(-1));