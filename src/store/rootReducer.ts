import { combineReducers } from '@reduxjs/toolkit';

import { apiSlice } from '../services/rootApiSlice';
import { AppSlice } from './slices';

export const reducers = {
	[apiSlice.reducerPath]: apiSlice.reducer,
	app: AppSlice.reducer,
};

export const rootReducer = combineReducers(reducers);
