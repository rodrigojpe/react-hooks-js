import { HeroCard } from "./HeroCard"
import { getHeroesByPublsher } from "../helpers"


export const HeroList = ({  publisher }) => {
  
  const heroes = getHeroesByPublsher( publisher)
  
    return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
         
            {
                heroes.map(hero => (
                   <HeroCard key={ hero.id} {...hero}/>

                ))
            }
    </div >
  )
}
