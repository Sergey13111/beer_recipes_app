import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

const Header: React.FC = () => {
	return (
		<>
			<CssBaseline />
			<AppBar>
				<Toolbar>
					<Typography
						variant='h6'
						component='div'>
						Beer
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar />
		</>
	);
};

export default Header;
