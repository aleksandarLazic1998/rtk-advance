import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Dashboard } from './pages/Dashboard/Dashboard';

export function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
