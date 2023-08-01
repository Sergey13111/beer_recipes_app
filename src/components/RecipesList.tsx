import useRecipeStore from '../store';
import { Box, Button, List } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import RecipeItem from './RecipeItem';
import SkeletonItem from './SkeletonItem';

export type ItemType = {
	id: number;
	image_url: string;
	description: string;
	name: string;
	handleSelectedItems: (event: React.MouseEvent<unknown>, id: number) => void;
	selectedItems: number[];
};

const RecipesList: React.FC = () => {
	const recipeStore = useRecipeStore();
	const fetchRecipes = recipeStore.fetchRecipes;
	const isLoading = recipeStore.isLoading;
	const recipes = recipeStore.recipes || [];
	const deleteSelectedRecipes = recipeStore.deleteSelectedRecipes;
	const [selectedItems, setSelectedItems] = useState<number[]>([]);

	useEffect(() => {
		fetchRecipes();
	}, [fetchRecipes]);

	const handleSelectedItems = (event: React.MouseEvent<unknown>, id: number) => {
		event.preventDefault();
		const isItemSelected = selectedItems.includes(id);
		// Если элемент уже выбран, удаляем его из списка выбранных, иначе добавляем
		if (isItemSelected) {
			setSelectedItems(selectedItems.filter((item) => item !== id));
		} else {
			setSelectedItems((selectedItems) => [...selectedItems, id]);
		}
	};

	const handleDeleteSelected = () => {
		deleteSelectedRecipes(selectedItems);
		setSelectedItems([]);
	};

	return (
		<>
			<List sx={{ mb: 3 }}>
				<Box
					mb={2}
					style={{ display: selectedItems.length > 0 ? 'block' : 'none' }}>
					<Button
						onClick={handleDeleteSelected}
						variant='outlined'
						startIcon={<DeleteIcon />}>
						Delete
					</Button>
				</Box>
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
