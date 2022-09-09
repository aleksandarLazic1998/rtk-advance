import React, { ReactNode } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store/store';

interface IProps {
	children: ReactNode;
}

export const TestComponent = ({ children }: IProps) => {
	return (
		<Provider store={store}>
			<Router>{children}</Router>
		</Provider>
	);
};
