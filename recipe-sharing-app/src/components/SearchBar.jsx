import React from 'react';
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useRecipeStore();

  return (
    <input
      type="text"
      value={searchTerm}
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-input"
    />
  );
};

export default SearchBar;
