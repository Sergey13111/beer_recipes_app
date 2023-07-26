import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.punkapi.com/v2/beers',
});

instance.interceptors.response.use(function (response) {
	return response.data;
});

export default instance;
