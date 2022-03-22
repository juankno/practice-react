import React from 'react'
import '../assets/CreateTodoButton.css';

export const CreateTodoButton = () => {

  const greet = (message) => {
    alert(message);
  }

  return (
    <>
      <button className="CreateTodoButton" onClick={() => greet('open modal')}>+</button>
    </>
  )
}
