import { heroes } from "../data/heroes"



export const getHeroByName = (text ='') => {

    text = text.toLowerCase().trim();
    if(text.length === 0) return [];

    return heroes.filter(hero => hero.superhero.toLowerCase().includes(text));


}