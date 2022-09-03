import { EntityState } from '@reduxjs/toolkit';

export const getListOfEntityAdapterObject = <T>(selector: EntityState<T>) => {
	const listOfEntitiesObject = Object.entries(selector)[1].map(
		(item: [string, T]) => {
			return item;
		}
	);

	const listOfEntitiesArray = Object.entries(listOfEntitiesObject[1]).map(
		([_, value]) => {
			if (typeof value === 'string') return null;

			return value;
		}
	);

	return listOfEntitiesArray;
};
