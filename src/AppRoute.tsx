import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';
import { Dashboard } from './pages/Dashboard/Dashboard';

export const AppRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
};
