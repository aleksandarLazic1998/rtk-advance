import { createSlice } from '@reduxjs/toolkit';

interface IState {
	globalNotification: boolean;
}

const initialState: IState = {
	globalNotification: false,
};

export const AppNamespace = '[app]';

export const AppSlice = createSlice({
	name: AppNamespace,
	initialState,
	reducers: {},
});
