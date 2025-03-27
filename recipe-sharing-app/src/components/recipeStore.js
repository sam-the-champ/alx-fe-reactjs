import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  
  addFavorite: (recipeId) => set(state => ({
    favorites: [...new Set([...state.favorites, recipeId])], // Avoid duplicates
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  recommendations: [],
  
  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.3
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
