import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		background: {
			default: '#E1E3E9',
			paper: '#bad4af70',
		},

		primary: {
			main: '#000',
			light: '#fff',
			dark: '#2D3240',
		},
		secondary: {
			main: '#1d0a0a',
			contrastText: '#fff',
			dark: '#bc1b04fc',
		},
		grey: {
			300: '#2d3240ab',
		},
		info: {
			main: '#BAFD37',
		},
	},

	typography: {
		fontFamily: ['Roboto', 'sans-serif'].join(','),
		fontSize: 18,
		h1: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 74,
			fontWeight: 500,
			lineHeight: 1.5,
		},
		h2: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 62,
			fontWeight: 500,
			lineHeight: 1.5,
			'@media (max-width:600px)': {
				fontSize: 32,
			},
		},
		h3: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 30,
			fontWeight: 500,
			'@media (max-width:600px)': {
				fontSize: 25,
			},
		},
		h4: {
			fontFamily: ['Oswald', 'sans-serif'].join(','),
			fontSize: 25,
			fontWeight: 500,
		},
		h5: {
			fontFamily: ['Roboto', 'sans-serif'].join(','),
			lineHeight: '21px',
			fontSize: 18,
			fontWeight: 400,
		},

		body1: {
			lineHeight: '27px',
			fontSize: 16,
		},

		// 	.MenuItem.selected { /* Increase the specificity */
		// color: blue;
		// }
		// 		.css-h4pi96-MuiButtonBase-root-MuiListItemButton-root.Mui-selected.selected  {
		//     background-color: #00000042;
		// },
	},
});
