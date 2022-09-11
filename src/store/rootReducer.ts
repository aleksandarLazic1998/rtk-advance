import { apiSlice } from '../services/rootApiSlice';
import { AppSlice } from './slices';

export const rootReducer = {
	[apiSlice.reducerPath]: apiSlice.reducer,
	app: AppSlice.reducer,
};
