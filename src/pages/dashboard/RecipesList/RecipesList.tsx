import React from 'react';

import { useGlobalState } from 'store/hooks';

export const RecipesList = () => {
	const { recipes } = useGlobalState((state) => state.recipe);

	return (
		<div>
			{recipes.length > 0 && (
				<div>
					{recipes.map((recipe) => {
						return (
							<p data-testid="recipe" key={recipe.id}>
								{recipe.title}
							</p>
						);
					})}
				</div>
			)}
		</div>
	);
};
