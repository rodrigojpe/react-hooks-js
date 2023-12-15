import { useForm } from "../hooks";




export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm} =  useForm({
        description: ''
    })


    const onFormSubmit = ( event ) => {
        event.preventDefault();

        if( description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }
        onNewTodo( newTodo)
        onResetForm()
    } 


  return (
    <>
      <form onSubmit={ onFormSubmit }>
        <input
          type="text"
          placeholder="que hay que hacer ?"
          className="form-control"
          name="description"
          value={ description}
          onChange={ onInputChange }
        />

        <button type="submit" className="btn btn-primary mt-1">
          Add
        </button>
      </form>
    </>
  );
};
