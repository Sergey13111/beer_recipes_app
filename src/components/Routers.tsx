import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';

import NotFound from '../pages/NotFound';
import RecipeDetails from '../pages/RecipeDetails';

const Routers = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='RecipeDetails/:id'
				element={<RecipeDetails />}
			/>
			<Route
				path='*'
				element={<NotFound />}
			/>
		</Routes>
	);
};

export default Routers;
