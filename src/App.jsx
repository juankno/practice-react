import { useState } from "react";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoCounter } from "./components/TodoCounter";
import { TodoList } from "./components/TodoList";
import { TodoSearch } from "./components/TodoSearch";
import { useLocalStorage } from "./hooks/useLocalStorage";


function App() {

  const { items, changeItems, loading, error } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('')

  const completedItems = items.filter(todo => !!todo.completed).length;
  const totalItems = items.length;

  let searchedItems = [];

  if (searchValue.length <= 1) {
    searchedItems = items;
  } else {

    searchedItems = items.filter(todo => {
      const todoName = todo.name.toLowerCase();
      const todoBrand = todo.brand.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoName.includes(searchText) || todoBrand.includes(searchText);
    })
  }


  const completeTodo = (id) => {

    const todoIndex = items.findIndex(todo => todo.id === id);
    const newItems = [...items];

    newItems[todoIndex].completed = true;
    changeItems(newItems);
  }

  const deleteTodo = (id) => {

    const todoIndex = items.findIndex(todo => todo.id === id);
    const newItems = [...items];

    newItems.splice(todoIndex, 1);
    changeItems(newItems);
  }


  return (
    <>
      <TodoCounter totalTodos={totalItems} completedTodos={completedItems} />

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList
        todos={searchedItems}
        onComplete={completeTodo}
        onDelete={deleteTodo} loading={loading}
        error={error} />

      <CreateTodoButton />
    </>
  );
}

export default App;
