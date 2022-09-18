import { IRecipeDTO } from 'typescript/dto/IRecipeDTO';
import { IRecipe } from 'typescript/interfaces/IRecipe';
import { IResponse } from 'typescript/interfaces/IResponse';
import { queryBuilder } from 'utils/helpers/queryBuilder';

import { apiSlice } from './rootApiSlice';

export const recipesApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getRandomRecipes: builder.query<IResponse<IRecipe[]>, IRecipeDTO>({
			query: (dto) => {
				return queryBuilder({
					baseQuery: 'recipes/rando',
					queryObject: { number: dto.number },
				});
			},
		}),
	}),
});

export const useGetRandomRecipes =
	recipesApiSlice.endpoints.getRandomRecipes.useQuery;
