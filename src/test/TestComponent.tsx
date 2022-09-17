import React, { PropsWithChildren } from 'react';

import type { PreloadedState } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { setupStore } from 'store/store';
import { AppStore } from 'typescript/types/AppStore';
import { RootState } from 'typescript/types/RootState';

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	preloadedState?: PreloadedState<RootState>;
	store?: AppStore;
}

export function renderWithProviders(
	ui: React.ReactElement,
	{
		preloadedState = {},
		store = setupStore(preloadedState),
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
