import React from 'react';

import { IPerson } from '../../typescript/models/personModel';

interface IProps {
	person: IPerson | undefined;
}

export const SinglePerson = ({ person }: IProps) => {
	return <p key={person?.id}>{person?.name}</p>;
};
