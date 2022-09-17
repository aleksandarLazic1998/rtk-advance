import React from 'react';

import { useGetRandomRecipes } from 'services/recipesApiSlice';

import { RecipesList } from './RecipesList/RecipesList';

export const Dashboard = () => {
	useGetRandomRecipes({ number: 10 });

	return (
		<div>
			<RecipesList />
		</div>
	);
};
