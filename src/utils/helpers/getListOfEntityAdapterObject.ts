import { EntityState } from '@reduxjs/toolkit';

export const getListOfEntityAdapterObject = <T>(selector: EntityState<T>) => {
	const listOfEntitiesArray = Object.entries(selector.entities).map(
		(entity) => entity[1]
	);

	return listOfEntitiesArray;
};
