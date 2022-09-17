import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { recipesApiSlice } from 'services/recipesApiSlice';
import { IRecipe } from 'typescript/interfaces/IRecipe';

interface IState {
	recipes: IRecipe[];
}

const initialState: IState = {
	recipes: [],
};
export const RecipesNamespace = '[recipes]';

export const RecipesSlice = createSlice({
	name: RecipesNamespace,
	initialState,
	reducers: {
		setRecipesAC: (state, action: PayloadAction<IState['recipes']>) => {
			state.recipes = action.payload;
		},
	},
	extraReducers(builder) {
		builder.addMatcher(
			recipesApiSlice.endpoints.getRandomRecipes.matchFulfilled,
			(state, action) => {
				state.recipes = action.payload.recipes;
			}
		);
	},
});

export const { setRecipesAC } = RecipesSlice.actions;
