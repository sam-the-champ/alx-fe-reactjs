import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const RecipeItem = ({ recipe }) => {
  const { favorites, addFavorite, removeFavorite } = useRecipeStore();

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div>
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>
      <button onClick={() => (isFavorite ? removeFavorite(recipe.id) : addFavorite(recipe.id))}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeItem;
