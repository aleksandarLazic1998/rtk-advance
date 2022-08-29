import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ModalTypes } from '../../typescript/interfaces/IModal';

interface IState {
	modal: ModalTypes | '';
}

const initialState: IState = {
	modal: '',
};

export const AppNamespace = '[app]';

export const AppSlice = createSlice({
	name: AppNamespace,
	initialState,
	reducers: {
		setModalComponentAC: (state, action: PayloadAction<IState['modal']>) => {
			state.modal = action.payload;
		},
	},
});

export const { setModalComponentAC } = AppSlice.actions;
