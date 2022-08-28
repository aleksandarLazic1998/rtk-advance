import React, { ReactNode } from 'react';

import { Route } from 'react-router';

interface IProps {
	element: ReactNode;
	path: string;
}

export const PrivateRoute = ({ element, path }: IProps) => {
	return <Route path={path} element={element} />;
};
