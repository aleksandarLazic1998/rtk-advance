import React from 'react';

import ErrorBoundary from 'components/ErrorBoundaries/ErrorBoundaries';

import { AppRoute } from './AppRoute';

function App() {
	return (
		<ErrorBoundary>
			<AppRoute />
		</ErrorBoundary>
	);
}

export default App;
