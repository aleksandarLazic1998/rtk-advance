import { apiSlice } from './rootApiSliceService';

export const peopleApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getPeople: builder.query({
			query: () => '/people',
		}),
	}),
});

/* Fetch Hooks */
export const useGetPeople = peopleApi.endpoints.getPeople.useQuery;
