import { combineReducers } from '@reduxjs/toolkit';

import { apiSlice } from '../services/rootApiSlice';
import { AppSlice, RecipesSlice } from './slices';

export const reducers = {
	[apiSlice.reducerPath]: apiSlice.reducer,
	app: AppSlice.reducer,
	recipe: RecipesSlice.reducer,
};

export const rootReducer = combineReducers(reducers);
