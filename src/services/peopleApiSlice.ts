import { apiSlice } from './rootApiSlice';

export const peopleApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPeople: builder.query({
			query: () => '/character',
		}),
	}),
});

/* Fetch Hooks */
export const useGetPeople = peopleApiSlice.endpoints.getPeople.useQuery;
