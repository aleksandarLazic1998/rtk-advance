import React, { ReactNode } from 'react';
import { Route } from 'react-router';

interface IProps {
	children: ReactNode;
	path: string;
}

export const PrivateRoute = ({ children, path }: IProps) => {
	return <Route path={path} element={children} />;
};
