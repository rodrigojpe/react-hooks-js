import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"




export const CallbackHook = () => {

    const [ counter, setCounter] = useState(1)


    const incrementFather = useCallback(
        () => {
            setCounter( counter + 1 )
        },
        [counter],
    )
    

    // const incrementFather = ( ) => {
    //     setCounter( counter + 1 )
    
    // }


  return (
    <>
      <h1>Callback Hook : { counter }</h1>
      <hr />
    
      <ShowIncrement increment={ incrementFather } />

    </>
  )
}
