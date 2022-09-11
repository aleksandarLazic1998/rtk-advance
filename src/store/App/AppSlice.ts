import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ModalTypes } from '../../typescript/interfaces/IModal';

interface IState {
	modal: ModalTypes | '';
	status: 'idle' | 'loading' | 'complete';
}

const initialState: IState = {
	modal: '',
	status: 'idle',
};

export const AppNamespace = '[app]';

export const AppSlice = createSlice({
	name: AppNamespace,
	initialState,
	reducers: {
		setModalComponentAC: (state, action: PayloadAction<IState['modal']>) => {
			state.modal = action.payload;
		},
		setLoading: (state, action: PayloadAction<IState['status']>) => {
			state.status = action.payload;
		},
	},
});

export const { setLoading, setModalComponentAC } = AppSlice.actions;
