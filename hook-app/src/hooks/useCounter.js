import { useState } from "react"



export const useCounter = (initialValue = 10) => {

    const  [counter, setCounter] = useState(initialValue);

    const increment = (value = 1) => {
        setCounter(counter + value);
    
    }

    const drecrement = (value = 1) => {
        if(counter > 0){
            setCounter(counter - value);

        }else{
            initialValue = 0;
            setCounter(initialValue);
        }
    }

    const reset = () => {
        initialValue = 0;
        setCounter(initialValue);
    
    }

    return {
        counter,
        increment,
        drecrement,
        reset
    }
}