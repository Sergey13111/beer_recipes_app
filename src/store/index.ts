import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { RecipesStateType } from '../models/RecipesStateType';
import axios from '../helpers/axios';
import { RecipeItemType } from '../models/RecipeItemType';

const useRecipeStore = create<RecipesStateType>()(
	devtools(
		// persist(
		(set, getState) => ({
			recipes: [],
			currentPage: 1,
			// limit: 5,
			visibleRecipes: [],
			isLoading: true,
			errors: [],

			deleteItem: (id) =>
				set((state) => ({
					recipes: state.recipes.filter((recipe) => recipe.id !== id),
				})),

			deleteSelectedRecipes: (selectedItems) => {
				const { recipes } = getState();
				const updatedRecipes = recipes.filter((recipe) => !selectedItems.includes(recipe.id));
				set({ recipes: updatedRecipes });
			},

			setRenderRecipes: (startIndex, endIndex) => {
				set({ isLoading: true });
				const { recipes } = getState();

				const newRecipes = recipes.slice(startIndex, endIndex);

				set({ visibleRecipes: [...newRecipes] });
				set({ isLoading: false });
			},

			addPage: () => {
				set({ isLoading: true });
				set((state) => ({ currentPage: state.currentPage + 1 }));
			},

			fetchRecipes: async () => {
				try {
					set({
						isLoading: true,
					});
					const { currentPage } = getState();
					const data: RecipeItemType[] = await axios.get('/', {
						params: {
							page: currentPage,
						},
					});
					// const renderRecipes = data.slice(0, 15);
					// const allRecipes = [...renderRecipes];
					set((state) => ({
						recipes: [...state.recipes, ...data],
					}));
				} catch (error: any) {
					set({ isLoading: false, errors: [error.message] });
					console.error('Error fetching recipes:', error);
				}
			},
		})
		// {
		// 	name: 'recipe-storage',
		// }
		// )
	)
);

export default useRecipeStore;
