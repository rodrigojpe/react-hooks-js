import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-usereducer/todoReducer"


export const useTodo = () => {

    const init = () => {
        let dataInLocal = localStorage.getItem("todos");
      return dataInLocal ? JSON.parse(dataInLocal) : [];
    }
 
    // eslint-disable-next-line no-undef
    const [todos, dispatch] = useReducer( todoReducer , [], init)


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos) )
   
    }, [todos])
    

    const handleNewTodo = ( todo ) => {

        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }
        dispatch(action)
    }

  /*   const todosCount = (todos) => {
       return  todos.length
    }

    const pendingTodosCount = (todos) => {
        return  todos.filter(todo => !todo.done).length
    } */

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id
        })
    }

   
    

    return {
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        todosCount: todos.length ,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        todos
    }

}
