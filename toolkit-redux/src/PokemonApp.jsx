import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';


export const PokemonApp = () => {


const dispatch = useDispatch();

const { isLoading, pokemons = [], page  } = useSelector(state => state.pokemon)

useEffect(() => {
  dispatch(getPokemons ()) ;

  
}, [])




  return (
    <>
        <h1>PkemonApp</h1>
        <hr />

        <span>Loading: { isLoading ? 'True' : 'False'}</span>

        <ul>
          {
            pokemons.map( ({name}) => ( 
              <li key={ name }>{ name }</li>
              ))
          }
        </ul>

        <button
          disabled={ isLoading }
          onClick={ () => dispatch( getPokemons( page ) ) }
        >
          Next
        </button>
    
    </>
  )
}
