import React from 'react'
import '../assets/TodoItem.css'

export const TodoItem = ({ todo }) => {

  const { id, name, completed, brand } = todo;

  const onComplete = (id) => {
    alert('item Completado');
  }

  const onDelete = (id) => {
    alert('item eliminado');
  }

  return (
    <>
      <li className="TodoItem">
        <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={() => onComplete(id)}>
          √
        </span>
        <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
          {name}
        <small>{brand}</small>
        </p>
        <span className="Icon Icon-delete" onClick={() => onDelete(id)}>
          X
        </span>
      </li>
    </>
  )
}
