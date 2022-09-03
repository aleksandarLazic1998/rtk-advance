import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { peopleAdapter } from '../pages/Peoples/store/peopleAdapter';
import { apiSlice } from '../services/rootApiSlice';
import { rootReducer } from './rootReducer';

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware);
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;

/* Global Selectors For Create Entity Adapter */
export const peoplesSelector = peopleAdapter.getSelectors<RootState>(
	(state) => state.people.peoples
);
