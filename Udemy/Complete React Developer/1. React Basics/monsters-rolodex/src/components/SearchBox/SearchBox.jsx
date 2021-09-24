import React from "react";
import "./SearchBox.css";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Search Monsters"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
