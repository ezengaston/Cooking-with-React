import React, { useContext } from "react";
import IngredientList from "./IngredientList";
import { RecipeContext } from "./App";
import CreatedByList from "./CreatedByList";

export default function Recipe(props) {
  const {
    id,
    name,
    cookTime,
    servings,
    instructions,
    ingredients,
    visible,
    createdBy,
  } = props;

  const { handleRecipeDelete, handleRecipeSelect } = useContext(RecipeContext);

  function hide() {
    if (visible === true) {
      return "recipe";
    } else {
      return "recipe hidden";
    }
  }

  return (
    <div className={hide()}>
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button
            className="btn btn--primary mr-1"
            onClick={() => handleRecipeSelect(id)}
          >
            Edit
          </button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients}></IngredientList>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Created By:</span>
        <div className="recipe__value recipe__value--indented">
          <CreatedByList createdBy={createdBy} />
        </div>
      </div>
    </div>
  );
}
