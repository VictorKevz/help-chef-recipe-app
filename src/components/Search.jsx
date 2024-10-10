import { SearchOutlined } from "@mui/icons-material";
import React from "react";
import "../css/recipes.css";

function Search({ setQuery, query }) {
  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  return (
    <fieldset className="search-wrapper">
      <label htmlFor="query"></label>
      <input
        type="search"
        value={query}
        id="query"
        onChange={handleChange}
        className="search-input"
        placeholder="search for meals by name..."
        autoComplete="off"
      />
      <button type="button" className="search-btn">
      <SearchOutlined fontSize="large" className="search-icon" />
      </button>
    </fieldset>
  );
}

export default Search;
