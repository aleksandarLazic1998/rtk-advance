import React from 'react';

import { BrowserRouter, Routes } from 'react-router-dom';

import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Dashboard } from './pages/Dashboard/Dashboard';

export function AppRoute() {
	return (
		<BrowserRouter>
			<Routes>
				<PrivateRoute path="/" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}
