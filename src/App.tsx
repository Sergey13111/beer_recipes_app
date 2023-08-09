import { CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Routers from './components/Routers';
import { theme } from './theme';
import Footer from './components/Footer';

const App: React.FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header />
				<Routers />
				<Footer />
			</ThemeProvider>
		</>
	);
};

export default App;
