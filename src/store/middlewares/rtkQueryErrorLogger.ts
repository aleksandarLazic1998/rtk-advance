import { isRejectedWithValue, PayloadAction } from '@reduxjs/toolkit';
import type { Middleware } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const rtkQueryErrorLogger: Middleware =
	() => (next) => (action: PayloadAction<{ originalStatus: number }>) => {
		let retried: undefined | boolean;

		if (isRejectedWithValue(action)) {
			const isFailedWithRetry =
				action.payload.originalStatus === 401 && retried;
			if (isFailedWithRetry) {
				// Logout user
				toast.error('You are unauthorized and will be logged out.');
			}

			const isFailedFirstTime =
				action.payload.originalStatus === 404 && !retried;
			if (isFailedFirstTime) {
				retried = true;
				toast.error('You are unauthorized');

				try {
					// do refresh token logic and in success refresh token pass the same request to retry
					/* await refreshToken(action.meta.baseQueryMeta.request.url)  */
				} catch (err) {
					// Logout user
				}
			}
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return next(action);
	};
