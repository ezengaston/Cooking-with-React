import React, { useContext } from "react";
import RecipeIngredientEdit from "./RecipeIngredientEdit";
import RecipeCreatedByEdit from "./RecipeCreatedByEdit";
import { RecipeContext } from "./App";
import { uuid } from "uuidv4";

export default function RecipeEdit({ recipe }) {
  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext);

  function handleChange(changes) {
    handleRecipeChange(recipe.id, { ...recipe, ...changes });
  }

  function handleIngredientChange(id, ingredient) {
    const newIngredients = [...recipe.ingredients];
    const index = newIngredients.findIndex((i) => i.id === id);
    newIngredients[index] = ingredient;
    handleChange({ ingredients: newIngredients });
  }

  function handleIngredientAdd() {
    const newIngredient = {
      id: uuid(),
      name: "",
      amount: "",
    };

    handleChange({ ingredients: [...recipe.ingredients, newIngredient] });
  }

  function handleIngredientDelete(id) {
    handleChange({
      ingredients: recipe.ingredients.filter((i) => i.id !== id),
    });
  }

  function handleAuthorsChange(id, authors) {
    const newAuthors = [...recipe.createdBy];
    const index = newAuthors.findIndex((i) => i.id === id);
    newAuthors[index] = authors;
    handleChange({ createdBy: newAuthors });
  }

  function handleAuthorAdd() {
    const newAuthor = {
      id: uuid(),
      name: "",
    };
    handleChange({ createdBy: [...recipe.createdBy, newAuthor] });
  }

  function handleAuthorDelete(id) {
    handleChange({
      createdBy: recipe.createdBy.filter((i) => i.id !== id),
    });
  }

  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button
          className="btn recipe-edit__remove-button"
          onClick={() => handleRecipeSelect(undefined)}
        >
          &times;
        </button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onChange={(e) => handleChange({ name: e.target.value })}
          className="recipe-edit__input"
        ></input>
        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={recipe.cookTime}
          onChange={(e) => handleChange({ cookTime: e.target.value })}
          className="recipe-edit__input"
        ></input>
        <label htmlFor="servings" className="recipe-edit__label">
          Servings
        </label>
        <input
          type="number"
          min="1"
          name="servings"
          id="servings"
          value={recipe.servings}
          onChange={(e) =>
            handleChange({ servings: parseFloat(e.target.value) || "" })
          }
          className="recipe-edit__input"
        ></input>
        <label htmlFor="instructions" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          value={recipe.instructions}
          onChange={(e) => handleChange({ instructions: e.target.value })}
          className="recipe-edit__input"
        ></textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {recipe.ingredients.map((ingredient) => (
          <RecipeIngredientEdit
            key={ingredient.id}
            ingredient={ingredient}
            handleIngredientChange={handleIngredientChange}
            handleIngredientDelete={handleIngredientDelete}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={() => handleIngredientAdd()}
        >
          Add Ingredient
        </button>
      </div>
      <br />
      <label className="recipe-edit__label">Created By</label>
      <div className="recipe-edit__author-grid">
        <div>Name</div>
        <div></div>
        {recipe.createdBy.map((authors) => (
          <RecipeCreatedByEdit
            key={authors.id}
            authors={authors}
            handleAuthorsChange={handleAuthorsChange}
            handleAuthorDelete={handleAuthorDelete}
          />
        ))}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary" onClick={() => handleAuthorAdd()}>
          Add Author
        </button>
      </div>
    </div>
  );
}
