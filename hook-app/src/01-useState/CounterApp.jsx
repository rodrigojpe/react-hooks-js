

import { useState } from "react";

export const CounterApp = () => {

    const [{state}, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;


   
    return (
        <> 
            <h1>CounterApp : { counter1 }</h1>
            <h1>CounterApp : { counter2 }</h1>
            <h1>CounterApp : { counter3 }</h1>


            <button
                className="btn"
                onClick={ () => setCounter( { counter1: counter1 + 1, ...state   }  ) }
            >+1</button>
        
        
        </>
    )



}