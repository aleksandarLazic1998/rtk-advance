import React from 'react';

import { useGetRandomRecipes } from 'services/recipesApiSlice';

export const Dashboard = () => {
	useGetRandomRecipes({ number: 10 });

	return <div>Dashboard</div>;
};
