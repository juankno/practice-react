import React from 'react'
import '../assets/TodoItem.css'

export const TodoItem = ({ todo, completeTodo, deleteTodo }) => {

  const { name, completed, brand } = todo;


  return (
    <>
      <li className="TodoItem">
        <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={completeTodo}>
          √
        </span>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
          {name}
          <small>{brand}</small>
        </p>
        <span className="Icon Icon-delete" onClick={deleteTodo}>
          X
        </span>
      </li>
    </>
  )
}
