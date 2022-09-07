import { createEntityAdapter } from '@reduxjs/toolkit';

import { IPerson } from '../../../typescript/models/personModel';

export const peopleAdapter = createEntityAdapter<IPerson>({
	selectId: (person) => person.id,
});
