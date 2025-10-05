import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

const Home: React.FC = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            const response = await fetch('https://api.example.com/recipes'); // Replace with your API endpoint
            const data = await response.json();
            setRecipes(data);
        };

        fetchRecipes();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Recipe Sharing Platform</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {recipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Home;