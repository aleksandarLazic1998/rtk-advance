import { Flag } from 'typescript/types/Flag';

import { IIngredient } from './IIngredient';
import { IInstruction } from './IInstruction';

export interface IRecipe {
	vegetarian: boolean;
	vegan: boolean;
	glutenFree: boolean;
	dairyFree: boolean;
	veryHealthy: boolean;
	cheap: boolean;
	veryPopular: boolean;
	sustainable: boolean;
	lowFodmap: boolean;
	weightWatcherSmartPoints: number;
	gaps: Flag;
	preparationMinutes: number;
	cookingMinutes: number;
	aggregateLikes: number;
	healthScore: number;
	creditsText: string;
	license: string;
	sourceName: string;
	pricePerServing: number;
	extendedIngredients: IIngredient[];
	id: number;
	title: string;
	readyInMinutes: number;
	servings: number;
	sourceUrl: string;
	image: string;
	imageType: string;
	summary: string;
	cuisines: string[];
	dishTypes: string[];
	diets: string[];
	occasions: string[];
	instructions: string;
	analyzedInstructions: IInstruction[];
	originalId: null | number;
	spoonacularSourceUrl: string;
}
