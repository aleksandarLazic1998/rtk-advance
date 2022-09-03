import { configureStore } from '@reduxjs/toolkit';

import { apiSlice } from '../services/rootApiSlice';
import { rootReducer } from './rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware);
	},
});
