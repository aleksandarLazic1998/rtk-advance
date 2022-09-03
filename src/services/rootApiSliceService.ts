import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.BASE_URL,
		prepareHeaders: (headers) => {
			/* Set Headers Token */
			return headers;
		},
		credentials: 'include',
	}),
});
