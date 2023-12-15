import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"



export const  getPokemons = ( page = 0 ) => {

    return async ( dispash, getState  ) => {

        dispash(startLoadingPokemons())


        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`);
        
        const { data } = resp;
 
        dispash( setPokemons({  pokemons: data.results, page: page + 1 }))
    }
}
