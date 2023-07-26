import { Box, Button, Container, Typography } from '@mui/material';
import KeyboardBackspaceTwoToneIcon from '@mui/icons-material/KeyboardBackspaceTwoTone';

import RecipeDetailsComponent from '../components/RecipeDetails';

const RecipeDetails: React.FC = () => {
	return (
		<>
			<Container>
				<Typography
					sx={{ my: 1, color: '#5d4037' }}
					variant='h2'>
					Recipe details
				</Typography>
				<Box mb={1}>
					<Button
						href='/'
						startIcon={<KeyboardBackspaceTwoToneIcon />}>
						Back
					</Button>
				</Box>
				<RecipeDetailsComponent />
			</Container>
		</>
	);
};

export default RecipeDetails;
