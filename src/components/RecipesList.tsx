import useRecipeStore from '../store';
import { Box, List, SxProps } from '@mui/material';
import { useEffect } from 'react';
import RecipeItem from './RecipeItem';

export interface IItem {
	id: number;
	image_url: string;
	description: string;
	name: string;
	sx?: SxProps;
}

const RecipesBeer: React.FC = () => {
	const recipeStore = useRecipeStore();
	const recipes = recipeStore.recipes;
	const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);

	useEffect(() => {
		fetchRecipes();
	}, [fetchRecipes]);

	return (
		<>
			{/* в List без sx не працюе :-) */}
			<List sx={{ mb: 3 }}>
				<Box>{/* <Button onClick={handleDelete(id)}>Dell</Button> */}</Box>
				{recipes.map(({ id, name, description, image_url }) => (
					<RecipeItem
						name={name}
						image_url={image_url}
						description={description}
						key={id}
						id={id}
					/>
				))}
			</List>
		</>
	);
};

export default RecipesBeer;
