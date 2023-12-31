import RecipesList from '../components/RecipesList';
import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
	return (
		<>
			<Container>
				<Typography
					sx={{ my: 3, color: '#5d4037' }}
					variant='h2'>
					List of recipes
				</Typography>
				<RecipesList />
			</Container>
		</>
	);
};

export default Home;
