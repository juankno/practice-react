import { TodoItem } from "./TodoItem"
import '../assets/TodoList.css'


export const TodoList = ({ todos }) => {
  return (
    <div className="TodoList">
    <h3>Todo list</h3>
      <ul>
        {todos.map( todo => (<TodoItem key={todo.id} todo={todo}  />))}
      </ul>
    </div>
  )
}
