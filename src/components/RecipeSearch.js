import React from "react";

export default function RecipeSearch({ handleSearch }) {
  return (
    <div className="search-bar__container">
      <input
        className="search-bar"
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
    </div>
  );
}
