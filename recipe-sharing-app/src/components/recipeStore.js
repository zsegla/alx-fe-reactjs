import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            )
          : updatedRecipes,
      };
    }),
  setRecipes: (recipes) =>
    set((state) => ({
      recipes,
      filteredRecipes: state.searchTerm
        ? recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : recipes,
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? { ...recipe, ...updatedRecipe }
          : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            )
          : updatedRecipes,
      };
    }),
  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) =>
              recipe.title
                .toLowerCase()
                .includes(state.searchTerm.toLowerCase())
            )
          : updatedRecipes,
      };
    }),
  searchTerm: "",
  setSearchTerm: (term) =>
    set((state) => {
      return {
        searchTerm: term,
        filteredRecipes: term
          ? state.recipes.filter((recipe) =>
              recipe.title.toLowerCase().includes(term.toLowerCase())
            )
          : state.recipes,
      };
    }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.searchTerm
        ? state.recipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : state.recipes,
    })),
}));
