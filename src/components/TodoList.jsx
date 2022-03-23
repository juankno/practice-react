import { TodoItem } from "./TodoItem"
import '../assets/TodoList.css'


export const TodoList = ({ todos, onComplete, onDelete, error , loading }) => {
  return (
    <div className="TodoList">
      <h3>Todo list</h3>
      {error && <span>Ups! ha ocurrido un error! 😫</span>}
      {loading && <span>🙄 Cargando tareas...</span>}
      {(!loading && !todos.length) && <span>🐱‍🏍 Ya puedes crear tu primer TODO</span>}
      <ul>
        {todos.map(todo => (<TodoItem key={todo.id} todo={todo} completeTodo={() => onComplete(todo.id)} deleteTodo={() => onDelete(todo.id)} />))}
      </ul>
    </div>
  )
}
