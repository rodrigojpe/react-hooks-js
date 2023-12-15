import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todos.map((todo) => (
            // eslint-disable-next-line react/jsx-key
            <TodoItem 
            todo={todo} 
            key={ todo.id} 
            onDeleteTodo={ onDeleteTodo }
            onToggleTodo={ onToggleTodo }
            />
        ))}
      </ul>
    </>
  );
};
