import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
// import { Message } from "./Message";

export const FormWithCustomHook = () => {

  // eslint-disable-next-line no-unused-vars
  const { formState , onInputChange, username , email, password, onResetForm } = useForm(
    {
      username: '',
      email: '',
      password: ''
  })

 


  return (
    <>
      <h1> Formulario con customHooks </h1>
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
       
       <input
        type="password"
        className="form-control mt-2"
        placeholder="Introduce tu Password"
        name="password"
        value={ password }
        onChange={ onInputChange }
        />

      <button onClick={ onResetForm } className="btn btn-primary mt-2" >Borrar</button>
    </>
  );
};
