import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'rodrigo',
        email: 'rodirog@hmail.cpm'
    })

    const { username, email  }  = formState; 

    const onInputChange = ({target}) => {

        const { name , value } = target

        setFormState({
            ...formState,
            [ name ]: value
        });
    }



    useEffect(() => {

        console.log('useEffect called')
    }, []);

    useEffect(() => {

        console.log('formState change')
    }, [formState]);

    useEffect(() => {

        console.log('formState change')
    }, [email]);

  
    


  return (
    <>
      <h1> Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Introduce tu nombre"
        name="username"
        value={ username }
        onChange={ onInputChange }
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="Introduce tu Email"
        name="email"
        value={ email }
        onChange={ onInputChange }
        />
        {
            ( username === 'rodrigo2') && <Message/>
        }

    </>
  );
};
