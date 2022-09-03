import { apiSlice } from '../services/rootApiSliceService';
import { AppSlice, PeopleSlice } from './slices';

export const rootReducer = {
	[apiSlice.reducerPath]: apiSlice.reducer,
	app: AppSlice.reducer,
	people: PeopleSlice.reducer,
};
