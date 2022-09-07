import React from 'react';

import { useGetPeople } from '../../services/peopleApiSlice';
import { useGlobalState } from '../../store/hooks';
import { getListOfEntityAdapterObject } from '../../utils/helpers/getListOfEntityAdapterObject';
import { SinglePerson } from './SinglePerson';
import './Peoples.css';

export const Peoples = () => {
	useGetPeople({});

	const { peoples } = useGlobalState((state) => state.people);

	const listOfPeoples = getListOfEntityAdapterObject(peoples);

	return (
		<div className="characters">
			{listOfPeoples.map((person) => (
				<SinglePerson key={person?.id} person={person} />
			))}
		</div>
	);
};
