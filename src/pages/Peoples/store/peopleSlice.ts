import {
	createSlice,
	EntityId,
	EntityState,
	PayloadAction,
} from '@reduxjs/toolkit';

import { peopleApiSlice } from '../../../services/peopleApiSlice';
import { IPerson } from '../../../typescript/models/personModel';
import { peopleAdapter } from './peopleAdapter';

interface IState {
	peoples: EntityState<IPerson>;
}

const initialState: IState = {
	peoples: peopleAdapter.getInitialState(),
};

export const PeopleNamespace = '[people]';

export const PeopleSlice = createSlice({
	name: PeopleNamespace,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addMatcher(
			peopleApiSlice.endpoints.getPeople.matchFulfilled,
			(state, action: PayloadAction<Record<EntityId, IPerson>>) => {
				peopleAdapter.setAll(state.peoples, action.payload);
			}
		);
	},
});
