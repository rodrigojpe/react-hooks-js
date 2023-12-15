import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef()

    const onClick = () => {
        inputRef.current.select()
    
    }


  return (
    <>
        <h1>Focus Screen</h1>
    
    <input
    ref={ inputRef }
     className="form-control"
     placeholder="Ingrese su nombre"
     type="text"
      />

    <button
     className="btn btn-primary mt-2"
     type="button"
     onClick={ onClick }
     >
        Set Focus
    </button>
    
    </>
  )
}
