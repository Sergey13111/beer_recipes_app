import { RecipeBeerType } from './RecipeBeerType';

export interface IRecipesState {
	recipes: RecipeBeerType[];
	visibleRecipes: RecipeBeerType[];
	currentPage: number;
	indexBeer: number;
	limit: number;
	isLoading: boolean;
	errors?: string[];
	fetchRecipes: () => void;
	deleteItem: (id: number) => void;
}
