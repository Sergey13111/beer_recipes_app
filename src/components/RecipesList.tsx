import useRecipeStore from '../store';
import { Badge, Box, Button, List } from '@mui/material';
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
	const recipes = recipeStore.recipes;
	const setRenderRecipes = recipeStore.setRenderRecipes;
	const visibleRecipes = recipeStore.visibleRecipes;
	const deleteSelectedRecipes = recipeStore.deleteSelectedRecipes;
	const addPage = recipeStore.addPage;

	const [selectedItems, setSelectedItems] = useState<number[]>([]);
	const [startIndex, setStartIndex] = useState<number>(0);
	const [endIndex, setEndIndex] = useState<number>(5);

	const currentPage = recipeStore.currentPage;

	// useEffect(() => {
	// 	if (recipes.length < 15) {
	// 		fetchRecipes();
	// 	}
	// }, [fetchRecipes, recipes.length]);

	useEffect(() => {
		if (recipes.length < 15) {
			fetchRecipes();
		}
		setRenderRecipes(startIndex, endIndex);

		const handleScroll = () => {
			const { scrollY, innerHeight } = window;
			const scrolledToBottom = innerHeight + scrollY >= document.body.offsetHeight - 1;

			if (scrolledToBottom) {
				if (recipes.length < endIndex + 5) {
					addPage();
					setStartIndex((prevStartIndex) => prevStartIndex + 5);
					setEndIndex((prevEndIndex) => prevEndIndex + 5);
					setRenderRecipes(startIndex, endIndex);
					fetchRecipes();
					window.scrollTo(0, 0);
				} else {
					setStartIndex((prevStartIndex) => prevStartIndex + 5);
					setEndIndex((prevEndIndex) => prevEndIndex + 5);
					setRenderRecipes(startIndex, endIndex);
					window.scrollTo(0, 0);
				}
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [addPage, endIndex, fetchRecipes, recipes.length, setRenderRecipes, startIndex]);

	const handleSelectedItems = (event: React.MouseEvent<unknown>, id: number) => {
		event.preventDefault();
		const isItemSelected = selectedItems.includes(id);
		// If the element is already selected, remove it from the list of selected items, otherwise add
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

	console.log('recipes', recipes);
	console.log('visibleRecipes', visibleRecipes);
	console.log('startIndex', startIndex);
	console.log('currentPage', currentPage);
	console.log(isLoading);

	return (
		<>
			<List sx={{ mb: 5 }}>
				<Box
					mb={3}
					justifyContent='flex-end'
					style={{ display: selectedItems.length > 0 ? 'flex' : 'none' }}>
					<Badge
						color='secondary'
						badgeContent={selectedItems.length}>
						<Button
							onClick={handleDeleteSelected}
							variant='outlined'
							startIcon={<DeleteIcon />}>
							Delete
						</Button>
					</Badge>
				</Box>
				{visibleRecipes.map(({ id, name, description, image_url }) =>
					isLoading ? (
						<SkeletonItem key={id} />
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
