import React from 'react';

interface RecipeCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default RecipeCard;