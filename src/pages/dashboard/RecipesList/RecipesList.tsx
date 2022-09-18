import React from 'react';

import { useGlobalState } from 'store/hooks';

export const RecipesList = () => {
	const { recipes } = useGlobalState((state) => state.recipe);
	const isListEmpty = recipes.length === 0;

	return (
		<div>
			{!isListEmpty ? (
				<div>
					{recipes.map((recipe) => {
						return (
							<p data-testid="recipe" key={recipe.id}>
								{recipe.title}
							</p>
						);
					})}
				</div>
			) : (
				<p>There are no recipes yet...</p>
			)}
		</div>
	);
};
