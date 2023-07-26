import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { IRecipesState } from '../models/IRecipesState';
import axios from 'axios';

const useRecipeStore = create<IRecipesState>()(
	devtools(
		// persist(
		(set, get) => ({
			recipes: [],
			currentPage: 1, // текущая страница
			limit: 5, // количество рецептов на странице
			indexBeer: 0,
			visibleRecipes: [], // массив с отображаемыми рецептами
			isLoading: false,
			errors: [],
			deleteItem: (id) =>
				set((state) => ({
					recipes: state.recipes.filter((recipe) => recipe.id !== id),
				})),

			fetchRecipes: async () => {
				try {
					// set({ isLoading: true });
					const recipes = await axios.get('https://api.punkapi.com/v2/beers', {
						params: {
							page: 1,
						},
					});
					const renderRecipes = recipes.data.slice(0, 5);
					set({ recipes: renderRecipes });
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
