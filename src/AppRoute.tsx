import React from 'react';

import { Dashboard } from 'pages/pageRoutes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

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
