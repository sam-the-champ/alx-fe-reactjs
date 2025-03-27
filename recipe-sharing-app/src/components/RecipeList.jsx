import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';
import RecipeItem from './RecipeItem';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.length === 0 ? <p>No recipes yet</p> : null}
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3><Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link></h3>
          <p>{recipe.description}</p>
        </div>
      ))}
      
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
      ) : (
        <p>No matching recipes found.</p>
      )}
    
    </div>
    
  );
};

export default RecipeList;

