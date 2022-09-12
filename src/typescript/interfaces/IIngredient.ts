import { Consistency } from 'typescript/types/Consistency';

export interface IIngredient {
	id: number;
	aisle: string;
	image: string;
	consistency: Consistency;
	name: string;
	nameClean: string;
	original: string;
	originalName: string;
	amount: 2;
	unit: string;
	meta: string[];
	measures: {
		us: {
			amount: number;
			unitShort: string;
			unitLong: string;
		};
		metric: {
			amount: number;
			unitShort: string;
			unitLong: string;
		};
	};
}
