import React from 'react';
import { useRecipeStore } from '../store/recipeStore';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const { filteredRecipes } = useRecipeStore();

  return (
    <div>
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No matching recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
