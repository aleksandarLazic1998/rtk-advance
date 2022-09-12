import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	tagTypes: [],
	reducerPath: 'api',
	endpoints: () => ({}),
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
		prepareHeaders: (headers) => {
			headers.append('Content-Type', 'application/json');
			return headers;
		},
	}),
});
