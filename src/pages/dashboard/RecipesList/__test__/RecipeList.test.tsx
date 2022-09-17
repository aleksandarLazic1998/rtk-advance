import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { MockRecipeList } from 'test/mockupData/MockRecipeList';
import { renderWithProviders } from 'test/TestComponent';

import { RecipesList } from '../RecipesList';

describe('Should display all logic for recipes list', () => {
	test('Should display list of random recipes', () => {
		renderWithProviders(<RecipesList />, {
			preloadedState: { recipe: { recipes: MockRecipeList } },
		});

		const element = screen.getAllByTestId('recipe');
		expect(element).toHaveLength(2);
	});

	test('Should display zero state', () => {
		renderWithProviders(<RecipesList />, {
			preloadedState: { recipe: { recipes: [] } },
		});

		const element = screen.getByText(/There are no recipes yet.../i);
		expect(element).toBeVisible();
	});
});
