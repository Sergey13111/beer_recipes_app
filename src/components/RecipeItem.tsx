import { Box, IconButton, Link, ListItem, Typography, styled } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { IItem } from './RecipesList';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store';

const RecipeItem: React.FC<IItem> = ({ image_url, description, name, id }) => {
	const navigate = useNavigate();
	const recipeStore = useRecipeStore();
	const deleteItem = recipeStore.deleteItem;

	const handleDetails = (id: number) => () => {
		navigate(`/RecipeDetails/${id}`);
	};

	const handleDeleteItem = (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		deleteItem(id);
	};

	return (
		<>
			<StyledLinkDetails onClick={handleDetails(id)}>
				{/* <StyledLinkDetails to={`/RecipeDetails/${id}`}> */}
				<ListItem
					sx={{
						mb: 3,
						p: 2,
						display: 'flex',
						boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.2)',
						borderRadius: 2,
						background: '#bad4af70',
						flexDirection: {
							xs: 'column',
							sm: 'row',
						},
						'&:hover': {
							backgroundColor: '#679d763b',
							transform: 'scale(1.01)',
							boxShadow: '0px 0px 16px 5px rgba(0, 0, 0, 0.2)',
							'& .hoverButton': {
								display: 'block',
							},
						},
					}}>
					<Box
						width='100px'
						height='150px'
						textAlign='center'>
						<img
							src={image_url}
							alt='beer'
							style={{
								maxWidth: '100%',
								maxHeight: '100%',
							}}
						/>
					</Box>
					<Box sx={{ ml: { xs: 0, sm: 2 }, mt: { xs: 2, sm: 0 }, flex: 1 }}>
						<Typography
							component='h4'
							variant='h4'>
							{name}
						</Typography>
						<Typography
							component={'p'}
							mt={1}>
							{description}
						</Typography>
					</Box>
					<Box
						sx={{
							display: 'none',
							position: 'absolute',
							top: '-6px',
							right: '-6px',
							color: '#3a0109ad',
						}}
						className='hoverButton'>
						<IconButton
							aria-label='delete'
							size='small'
							onClick={handleDeleteItem(id)}>
							<ClearIcon />
						</IconButton>
					</Box>
				</ListItem>
			</StyledLinkDetails>
		</>
	);
};

export const StyledLinkDetails = styled(Link)`
	color: ${({ theme }) => theme.palette.secondary.main};
	text-decoration: none;
	cursor: pointer;
`;
export default RecipeItem;
