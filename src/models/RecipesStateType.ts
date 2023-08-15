import { RecipeItemType } from './RecipeItemType';

export type RecipesStateType = {
	recipes: RecipeItemType[];
	visibleRecipes: RecipeItemType[];
	currentPage: number;
	limit: number;
	isLoading: boolean;
	errors?: string[];
	fetchRecipes: () => void;
	deleteItem: (id: number) => void;
	deleteSelectedRecipes: (selectedItems: number[]) => void;
	setRenderRecipes: (startIndex: number, endIndex: number) => void;
	addPage: () => void;
};
