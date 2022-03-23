import { useState } from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";


// const defaultTodos = [
//   {
//     "id": "ccw-1",
//     "name": "Coding Challenge White",
//     "completed": true,
//     "brand": "Coding Challenge Brewery"
//   }, {
//     "id": "sw-1",
//     "name": "Share White",
//     "completed": false,
//     "brand": "Share",
//   }, {
//     "id": "bspa-1",
//     "name": "Beer Sans Pale Ale",
//     "completed": true,
//     "brand": "Beer Sans Brewery"
//   }, {
//     "id": "ccb-1",
//     "name": "Coding Challenge Brown",
//     "completed": false,
//     "brand": "Coding Challenge Brewery"
//   }, {
//     "id": "ccw-2",
//     "name": "Coding Challenge Wheat",
//     "completed": true,
//     "brand": "Coding Challenge Brewery"
//   }];

function App() {

  const localStorageTodos = localStorage.getItem("TODOS_V1");

  let parsedTodos;

  if (!localStorageTodos) {

    localStorage.setItem("TODOS_V1", JSON.stringify([]));

  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [searchValue, setSearchValue] = useState('')
  const [todos, setTodos] = useState(parsedTodos)

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (searchValue.length <= 1) {
    searchedTodos = todos;
  } else {

    searchedTodos = todos.filter(todo => {
      const todoName = todo.name.toLowerCase();
      const todoBrand = todo.brand.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoName.includes(searchText) || todoBrand.includes(searchText);
    })
  }

  const changeTodos = (newTodos) => {
    const stringifiedTodos = JSON.stringify(newTodos);
    localStorage.setItem('TODOS_V1', stringifiedTodos);
    setTodos(newTodos);
  }


  const completeTodo = (id) => {

    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;
    changeTodos(newTodos);
  }

  const deleteTodo = (id) => {

    const todoIndex = todos.findIndex(todo => todo.id === id);
    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);
    changeTodos(newTodos);
  }


  return (
    <>
      <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList todos={searchedTodos} onComplete={completeTodo} onDelete={deleteTodo} />

      <CreateTodoButton />
    </>
  );
}

export default App;
