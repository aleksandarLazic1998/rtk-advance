import React, { PropsWithChildren } from 'react';

import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { cloneDeep } from 'lodash';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { reducers } from 'store/rootReducer';
import { AppStore } from 'typescript/types/AppStore';
import { RootState } from 'typescript/types/RootState';

// As a basic setup, import your same slice reducers

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

const cloneOfReducer = cloneDeep(reducers);

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = configureStore({ reducer: cloneOfReducer, preloadedState }),
		...renderOptions
	}: ExtendedRenderOptions = {}
) {
	// eslint-disable-next-line @typescript-eslint/ban-types
	function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
		return (
			<Provider store={store}>
				<Router>{children}</Router>
			</Provider>
		);
	}

	return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
