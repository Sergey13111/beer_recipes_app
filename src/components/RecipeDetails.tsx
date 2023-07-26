import { Box, Card, CardContent, Typography } from '@mui/material';
import useRecipeStore from '../store';
import { useParams } from 'react-router-dom';

const RecipeDetailsComponent: React.FC = () => {
	const { id } = useParams();
	const recipeStore = useRecipeStore();
	const recipes = recipeStore.recipes;
	const recipe = recipes.find((recipe) => recipe.id === Number(id));
	const hopsNames = recipe?.ingredients.hops.map((hop) => hop.name).join(', ');
	const maltNames = recipe?.ingredients.malt.map((malt) => malt.name).join(', ');

	return (
		<>
			<Card sx={{ mb: 5 }}>
				<Box
					sx={{
						display: 'flex',
						p: 2,
						alignItems: 'center',
						flexDirection: {
							xs: 'column',
							sm: 'row',
						},
					}}>
					<Box
						sx={{
							width: '150px',
							height: '200px',
							textAlign: 'center',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						<img
							src={recipe?.image_url}
							alt='beer'
							style={{
								maxWidth: '100%',
								maxHeight: '100%',
								objectFit: 'cover',
							}}
						/>
					</Box>

					<Typography
						gutterBottom
						variant='h3'
						sx={{ fontWeight: 600, ml: { xs: 0, sm: 3 }, mb: 0, mt: { xs: 2, sm: 0 } }}>
						{recipe?.name}
					</Typography>
				</Box>

				<CardContent>
					<Typography
						variant='body2'
						color='text.secondary'
						sx={{ display: 'flex', flexDirection: 'column' }}>
						<Typography
							variant='overline'
							sx={{ fontWeight: 600, fontSize: 18 }}>
							Description:
						</Typography>
						{recipe?.description}
						<Typography
							variant='overline'
							sx={{ fontWeight: 600, fontSize: 18 }}>
							First brewed:
						</Typography>
						{recipe?.first_brewed}
						<Typography
							variant='overline'
							sx={{ fontWeight: 600, fontSize: 18 }}>
							Volume:
						</Typography>
						{recipe?.volume.value} {recipe?.volume.unit}
						<Typography
							variant='overline'
							sx={{ fontWeight: 600, fontSize: 18 }}>
							Ingredients:
						</Typography>
						<Typography
							variant='overline'
							sx={{ fontWeight: 400, fontSize: 14 }}>
							Yeast:
						</Typography>
						{recipe?.ingredients.yeast}
						<Typography
							variant='overline'
							sx={{ fontWeight: 400, fontSize: 14 }}>
							Hops:
						</Typography>
						{hopsNames}
						<Typography
							variant='overline'
							sx={{ fontWeight: 400, fontSize: 14 }}>
							Malt:
						</Typography>
						{maltNames}
					</Typography>
				</CardContent>
			</Card>
		</>
	);
};

export default RecipeDetailsComponent;
