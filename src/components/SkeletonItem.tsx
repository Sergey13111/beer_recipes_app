import { Box, Skeleton } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const SkeletonItem = () => {
	const { classes } = useStyles();
	return (
		<>
			<Box className={classes.skeletonWrapper}>
				<Box>
					<Skeleton
						variant='rounded'
						width={100}
						height={150}
					/>
				</Box>

				<Box sx={{ ml: { xs: 0, sm: 2 }, mt: { xs: 2, sm: 0 }, width: '100%', flex: 1 }}>
					<Skeleton
						variant='text'
						width='60%'
						height='40px'
					/>
					<Skeleton
						variant='text'
						sx={{ mt: 1 }}
					/>
				</Box>
			</Box>
		</>
	);
};

const useStyles = makeStyles()((theme) => {
	return {
		skeletonWrapper: {
			display: 'flex',
			boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.2)',
			borderRadius: '8px',
			background: theme.palette.background.paper,
			alignItems: 'center',
			padding: '16px',
			marginBottom: '24px',
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
			},
		},
	};
});

export default SkeletonItem;
