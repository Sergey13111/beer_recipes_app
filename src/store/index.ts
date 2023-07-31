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
			currentPage: 1, // текущая страница
			limit: 5, // количество рецептов на странице
			indexBeer: 0,
			visibleRecipes: [], // массив с отображаемыми рецептами
			isLoading: true,
			errors: [],
			deleteItem: (id) =>
				set((state) => ({
					recipes: state.recipes.filter((recipe) => recipe.id !== id),
				})),

			fetchRecipes: async () => {
				try {
					const { currentPage } = getState();
					const data: RecipeItemType[] = await axios.get('/', {
						params: {
							page: currentPage,
						},
					});
					const renderRecipes = data.slice(0, 5);
					set({ recipes: renderRecipes });
					set({ isLoading: false });
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
