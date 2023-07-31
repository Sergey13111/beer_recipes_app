import { Box, IconButton, Link, ListItemButton, Typography } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { ItemType } from './RecipesList';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store';
import { makeStyles } from 'tss-react/mui';

const RecipeItem: React.FC<ItemType> = ({
	image_url,
	description,
	name,
	id,
	handleSelectedItems,
	selectedItems,
}) => {
	const { classes } = useStyles();
	const navigate = useNavigate();
	const recipeStore = useRecipeStore();
	const deleteItem = recipeStore.deleteItem;

	const handleDetails = (id: number) => () => {
		navigate(`/RecipeDetails/${id}`);
	};

	const isSelected = selectedItems.includes(id);

	const handleDeleteItem = (id: number) => (event: React.MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		deleteItem(id);
	};

	return (
		<>
			<Link
				className={classes.linkItem}
				onClick={handleDetails(id)}
				onContextMenu={(event) => handleSelectedItems(event, id)}>
				{/* <StyledLinkDetails to={`/RecipeDetails/${id}`}> */}
				<ListItemButton
					selected={isSelected}
					className={classes.listItem}>
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
							top: 0,
							right: 0,
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
				</ListItemButton>
			</Link>
		</>
	);
};

const useStyles = makeStyles()((theme) => {
	return {
		linkItem: {
			color: theme.palette.secondary.main,
			textDecoration: 'none',
			cursor: 'pointer',
		},

		listItem: {
			marginBottom: '24px',
			padding: '16px',
			display: 'flex',
			boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.2)',
			borderRadius: 2,
			background: '#bad4af70',
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
			},
			'&:hover': {
				backgroundColor: '#679d763b',
				transform: 'scale(1.01)',
				boxShadow: '0px 0px 16px 5px rgba(0, 0, 0, 0.2)',
				'& .hoverButton': {
					display: 'block',
				},
			},
		},
	};
});

export default RecipeItem;
