import { heroes } from '../data/heroes'
/**
 * 
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async(element) => {

    const id1 = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1ccb2';

    try {
        const hero1 = await findHero (id1);
        const hero2 = await findHero(id2);

        element.innerHTML = `${name1} / ${name2}`;

    } catch (error) {
        element.innerHTML = error;
    }


}


const findHero = async(id) => {

    const hero = heroes.find(hero => hero.id === id);
    if (!hero)
        throw `Hero not found`;

        return hero;
}
