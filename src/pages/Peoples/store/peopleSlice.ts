import { createSlice } from '@reduxjs/toolkit';

import { IPerson } from '../../../typescript/models/personModel';

interface IState {
	peoples: IPerson[];
}

const initialState: IState = {
	peoples: [],
};

export const PeopleNamespace = '[people]';

export const PeopleSlice = createSlice({
	name: PeopleNamespace,
	initialState,
	reducers: {},
});
