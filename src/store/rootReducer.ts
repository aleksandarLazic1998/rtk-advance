import { apiSlice } from '../services/rootApiSlice';
import { AppSlice, PeopleSlice } from './slices';

export const rootReducer = {
	[apiSlice.reducerPath]: apiSlice.reducer,
	app: AppSlice.reducer,
	people: PeopleSlice.reducer,
};
