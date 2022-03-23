import { TodoItem } from "./TodoItem"
import '../assets/TodoList.css'


export const TodoList = ({ todos, onComplete, onDelete }) => {
  return (
    <div className="TodoList">
      <h3>Todo list</h3>
      <ul>
        {todos.map(todo => (<TodoItem key={todo.id} todo={todo} completeTodo={() => onComplete(todo.id)} deleteTodo={() => onDelete(todo.id)} />))}
      </ul>
    </div>
  )
}
