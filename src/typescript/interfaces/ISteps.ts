import { IInstructionEquipment } from './IInstructionEquipment';
import { IInstructionIngredient } from './IInstructionIngredient';

export interface ISteps {
	number: number;
	step: string;
	ingredients: IInstructionIngredient[];
	equipment: IInstructionEquipment[];
}
