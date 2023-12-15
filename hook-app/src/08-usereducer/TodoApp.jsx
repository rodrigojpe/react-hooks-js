import { TodoList } from "./TodoList"
import { TodoAdd } from "./todoAdd"
import { useTodo } from "../hooks/useTodo"



export const TodoApp = () => {

   const { todos, todosCount,pendingTodosCount, handleDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();


  return (
    <>
        <h1>{todosCount }, <small> pendientes: {pendingTodosCount}</small>  </h1>
        <hr />
        <div className="row">
            <div className="col-7">
               <TodoList 
               todos={todos} 
               onDeleteTodo={ handleDeleteTodo }
               onToggleTodo={ handleToggleTodo }
               />
            </div>

            <div className="col-5">
                <h4>Add Todo</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo }/>


            </div>
        </div>
    
    </>
  )
}
