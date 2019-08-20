import axios from 'axios';

const apiClient = axios.create({
	baseURL: `https://www.thecocktaildb.com/api/json/v1/1`,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json'
	}
});

export default {
	// eslint-disable-next-line no-unused-vars
	searchCocktail(message) {
		return apiClient.get(`/search.php?s=${message}`);
	}
};
