import { configureStore, PreloadedState } from '@reduxjs/toolkit';
import { RootState } from 'typescript/types/RootState';

import { apiSlice } from '../services/rootApiSlice';
import { rootReducer } from './rootReducer';

export function setupStore(preloadedState?: PreloadedState<RootState>) {
	return configureStore({
		reducer: rootReducer,
		preloadedState,
		middleware: (getDefaultMiddleware) => {
			return getDefaultMiddleware().concat(apiSlice.middleware);
		},
	});
}
