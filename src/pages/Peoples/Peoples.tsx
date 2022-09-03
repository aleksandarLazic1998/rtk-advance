import React from 'react';

import { useGetPeople } from '../../services/peopleApiSlice';
import { useGlobalState } from '../../store/hooks';
import { getListOfEntityAdapterObject } from '../../utils/helpers/getListOfEntityAdapterObject';

export const Peoples = () => {
	useGetPeople({});

	const { peoples } = useGlobalState((state) => state.people);

	const listOfPeoples = getListOfEntityAdapterObject(peoples);

	return (
		<h1>
			{listOfPeoples.map((person) => (
				<p key={person?.id}>{person?.name}</p>
			))}
		</h1>
	);
};
