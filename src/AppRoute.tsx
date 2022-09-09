import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Peoples } from './pages/Peoples/Peoples';

export function AppRoute() {
	return (
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
	);
}
