import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div
              style={{
                minHeight: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                background: "linear-gradient(135deg, #f9fafb 60%, #dbeafe 100%)",
                padding: 0,
                margin: 0,
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: 800,
                  margin: "2rem auto 0 auto",
                  background: "#fff",
                  borderRadius: 16,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                  padding: "2rem 1.5rem 2.5rem 1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{
                    textAlign: "center",
                    color: "#2563eb",
                    marginBottom: "2rem",
                    fontSize: "2.5rem",
                    fontWeight: 700,
                    letterSpacing: "-1px",
                  }}
                >
                  Recipe Sharing App
                </h1>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
                <FavoritesList />
                <RecommendationsList />
              </div>
            </div>
          }
        />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
