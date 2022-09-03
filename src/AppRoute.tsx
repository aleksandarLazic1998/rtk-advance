import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ErrorBoundary from './components/ErrorBoundaries/ErrorBoundaries';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Peoples } from './pages/Peoples/Peoples';

export function AppRoute() {
	return (
		<ErrorBoundary>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<PrivateRoute>
								<Peoples />
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</ErrorBoundary>
	);
}
