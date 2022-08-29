import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from '../ErrorBoundaries/ErrorBoundaries';

export const Message = () => {
	return (
		<ErrorBoundary>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</ErrorBoundary>
	);
};
