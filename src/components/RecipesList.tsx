import useRecipeStore from '../store';
import { Box, List, SxProps } from '@mui/material';
import { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';
import SkeletonItem from './SkeletonItem';

export type ItemType = {
	id: number;
	image_url: string;
	description: string;
	name: string;
	sx?: SxProps;
	handleSelectedItems: (event: React.MouseEvent<unknown>, id: number) => void;
	selectedItems: number[];
};

const RecipesList: React.FC = () => {
	const recipeStore = useRecipeStore();
	const isLoading = recipeStore.isLoading;
	const recipes = recipeStore.recipes || [];
	const fetchRecipes = useRecipeStore((state) => state.fetchRecipes);
	const [selectedItems, setSelectedItems] = useState<number[]>([]);

	useEffect(() => {
		fetchRecipes();
	}, [fetchRecipes]);

	const handleSelectedItems = async (event: React.MouseEvent<unknown>, id: number) => {
		event.preventDefault();
		console.log(id);

		const isItemSelected = selectedItems.includes(id);

		// Если элемент уже выбран, удаляем его из списка выбранных, иначе добавляем
		if (isItemSelected) {
			setSelectedItems(selectedItems.filter((item) => item !== id));
			console.log('ondel', id);
		} else {
			setSelectedItems((selectedItems) => [...selectedItems, id]);
			console.log('selectedItems', selectedItems, id);
		}
	};

	return (
		<>
			<List sx={{ mb: 3 }}>
				<Box>{/* <Button onClick={handleDelete(id)}>Dell</Button> */}</Box>
				{recipes.map(({ id, name, description, image_url }) =>
					isLoading ? (
						<SkeletonItem />
					) : (
						<RecipeItem
							name={name}
							image_url={image_url}
							description={description}
							key={id}
							id={id}
							handleSelectedItems={handleSelectedItems}
							selectedItems={selectedItems}
						/>
					)
				)}
			</List>
		</>
	);
};

export default RecipesList;
