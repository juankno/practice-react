import React from 'react'
import '../assets/TodoCounter.css';


export const TodoCounter = ({ totalTodos, completedTodos }) => {
  return (
    <>
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </>
  )
}
