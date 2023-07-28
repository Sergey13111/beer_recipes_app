import { Box, Skeleton } from '@mui/material';

const SkeletonItem = () => {
	return (
		<>
			<Box
				sx={{
					mb: 3,
					p: 2,
					display: 'flex',
					boxShadow: '0px 0px 8px 1px rgba(0,0,0,0.2)',
					borderRadius: 2,
					background: '#bad4af70',
					alignItems: 'center',
					flexDirection: {
						xs: 'column',
						sm: 'row',
					},
				}}>
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

export default SkeletonItem;
