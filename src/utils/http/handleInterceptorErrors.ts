import ErrorMessages from '../../constants/ErrorMessaging';

const handleInterceptorErrors = (error: number) => {
	let errorMessage = ErrorMessages[error];
	if (!errorMessage) errorMessage = 'Unknown Error';

	// Todo: Set Global Notification for Error
};

export default handleInterceptorErrors;
