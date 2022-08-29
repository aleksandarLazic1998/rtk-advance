import React from 'react';

import { AppRoute } from './AppRoute';
import { Message } from './components/Message/Message';
import { Modal } from './components/Modal/Modal';

function App() {
	return (
		<>
			<Modal />
			<AppRoute />
			<Message />
		</>
	);
}

export default App;
