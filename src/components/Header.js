import React from "react";
import Search from "./Search";

function Header({search, setSearch, sortBy, setSortBy}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        Gregslist
      </h1>
      <Search search={search} setSearch={setSearch} sortBy={sortBy}
      setSortBy={setSortBy}/>
    </header>
  );
}

export default Header;
