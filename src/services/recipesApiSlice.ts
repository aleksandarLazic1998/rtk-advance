import { IRecipeDTO } from 'typescript/dto/IRecipeDTO';
import { IRecipe } from 'typescript/interfaces/IRecipe';
import { queryBuilder } from 'utils/helpers/queryBuilder';

import { apiSlice } from './rootApiSlice';

export const recipesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getRandomRecipes: builder.query<IRecipe[], IRecipeDTO>({
			query: (dto) => {
				return queryBuilder({
					baseQuery: 'recipes/random',
					queryObject: { number: dto.number },
				});
			},
		}),
	}),
});

export const useGetRandomRecipes =
	recipesApiSlice.endpoints.getRandomRecipes.useQuery;
