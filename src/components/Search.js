import React, {useState} from "react";

function Search({setSearch, sortBy, setSortBy}) {
  const [searchInput, setSearchInput] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(searchInput)
  } 

  function handleToggle() {
  setSortBy(sortBy=>!sortBy)
}

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit">🔍</button>

      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="AZ"
          name="sort"
          checked={!sortBy}
          onClick={handleToggle}
        />
        AZ by Location
      </label>
    </form>
  );
}

export default Search;
