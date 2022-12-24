import axios from 'axios';

const API_URL = 'api/auth/';

const register = async (userData) => {
	const response = axios.post(API_URL + 'register', userData);

	if (response.data) {
		localStorage.setItem('user', JSON.stringify((await response).data));
	}

	return response.data;
};

const authService = { register };

export default authService;
