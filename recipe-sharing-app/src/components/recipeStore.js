import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: "",
  filteredRecipes: [],
  favorites: [],
  recommendations: [],
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
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),
  generateRecommendations: () =>
    set((state) => {
      // Simple mock: recommend recipes not in favorites, random selection
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) &&
          state.favorites.length > 0 &&
          state.favorites.some((favId) => {
            const favRecipe = state.recipes.find((r) => r.id === favId);
            // Recommend if same ingredient or similar title (simple logic)
            if (!favRecipe) return false;
            return (
              (favRecipe.ingredients &&
                recipe.ingredients &&
                favRecipe.ingredients.some((ing) =>
                  recipe.ingredients?.includes(ing)
                )) ||
              recipe.title
                .toLowerCase()
                .includes(favRecipe.title.toLowerCase().split(" ")[0])
            );
          })
      );
      // If no recommendations, just pick a few random recipes not in favorites
      const fallback = state.recipes.filter(
        (recipe) => !state.favorites.includes(recipe.id)
      );
      return {
        recommendations:
          recommended.length > 0
            ? recommended.slice(0, 3)
            : fallback.slice(0, 3),
      };
    }),
}));
