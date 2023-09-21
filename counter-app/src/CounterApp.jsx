
import PropTypes from 'prop-types'
import { useState } from 'react'



export const CounterApp = ({value}) => {

    const  [counter,setCounter] = useState( value );

    const handleAdd = () => {
        setCounter(counter + 1);
    }

    const handleRest = () => {
        if(counter > 0){

            setCounter(counter - 1);
        }else{
            setCounter(0);
        }
    }

    const resetCounter = () => {
        setCounter(value);
    }
  

    return (
        <>
            <h1> CounterApp  </h1>
            <h2>{ counter } </h2>

            <button onClick={ (event) =>handleAdd(event, 1) }>
                +1
            </button>
            <button onClick={ (event) =>handleRest(event, -1) }
            
             >
                --1
            </button>
            <button onClick={ () =>resetCounter() }>
                reset
            </button>
    
        </>
      )
}

CounterApp.protoType = {
    value: PropTypes.number.isRequired,
  }
  // se inicializan properties por defecto
  CounterApp.defaultProps = {
    value:1,
  }