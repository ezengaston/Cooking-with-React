import React from "react";

export default function RecipeCreatedByEdit(props) {
  const { authors, handleAuthorsChange, handleAuthorDelete } = props;

  function handleChange(changes) {
    handleAuthorsChange(authors.id, { ...authors, ...changes });
  }

  return (
    <>
      <input
        type="text"
        className="recipe-edit__input"
        onChange={(e) => handleChange({ name: e.target.value })}
        value={authors.name}
      />
      <button
        onClick={() => handleAuthorDelete(authors.id)}
        className="btn btn--danger"
      >
        &times;
      </button>
    </>
  );
}
