import axios from "axios";
import handleInterceptorErrors from "./handleInterceptorErrors";

const httpClient = axios.create({ baseURL: process.env.REACT_APP_API_URL });

httpClient.interceptors.request.use(
	(config) => config,
	(error) => {
		Promise.reject(error);
	}
);

httpClient.interceptors.response.use(
	(response) => response,
	(error) => {
		const originalRequest = error.config;

		const isRequestRetryFailed =
			error.response.status === 401 &&
			originalRequest.url === "http://127.0.0.1:3000/v1/auth/token";

		if (isRequestRetryFailed) return handleInterceptorErrors(error);

		const isRequestFailed =
			error.response.status === 401 && !originalRequest._retry;

		if (isRequestFailed) {
			originalRequest._retry = true;
			// Todo: Send Request For Refresh Token
		}

		const errorHasStatus422 = error.status !== 422;
		if (errorHasStatus422) handleInterceptorErrors(error.status);
		else throw error;
	}
);

export default httpClient;
