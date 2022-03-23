import '../assets/TodoSearch.css';

export const TodoSearch = ({ searchValue, setSearchValue }) => {

  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <>
      <div className="container">
        <input type="search" className="TodoSearch" placeholder="Buscar..." value={searchValue} onChange={onSearchValueChange} />
      </div>
    </>
  )
}
