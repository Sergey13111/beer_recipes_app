import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header: React.FC = () => {
	return (
		<>
			<AppBar sx={{ position: 'sticky', bottom: 0 }}>
				<Toolbar sx={{ justifyContent: 'center' }}>
					<Typography component='span'>beer recipes 2023</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
