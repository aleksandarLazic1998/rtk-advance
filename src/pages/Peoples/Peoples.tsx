import React from 'react';

import { useGetPeople } from '../../services/peopleApiSlice';
import { useGlobalState } from '../../store/hooks';
import { peoplesSelector } from '../../store/store';

export const Peoples = () => {
	useGetPeople({});

	const listOfPeoples = useGlobalState(peoplesSelector.selectAll);

	return (
		<h1>
			{listOfPeoples.map((person) => (
				<p key={person.id}>{person.name}</p>
			))}
		</h1>
	);
};
