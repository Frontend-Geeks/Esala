import axios from 'axios';
import { createContext, useState, useEffect } from 'react';
import { login, logout, verify, getData } from 'authbee';
const API_URL = 'http://localhost:4000/api/auth/';

export const authContext = createContext({
	signup: () => {},
	login: () => {},
	logout: () => {},
	token: null,
});

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const verified = verify();

		if (verified) {
			getData()
				.then(({ token }) => {
					setToken(token);
					console.log(token);
				})
				.catch(console.log);
		} else {
			console.log('Unverified!');
		}
	}, []);

	const authSignup = async (userData, callback) => {
		const response = axios.post(API_URL + 'register', userData);

		if (response.data) {
			localStorage.setItem('user', JSON.stringify((await response).data));
		}

		callback();

		return response.data;
	};

	const authLogin = (loginData, callback) => {
		login(loginData)
			.then(() => {
				setToken(loginData.token);
				callback();
			})
			.catch(console.log);
	};

	const authLogout = (callback) => {
		logout()
			.then(() => {
				setToken(null);
				callback();
			})
			.catch(console.log);
	};

	const value = {
		signup: authSignup,
		login: authLogin,
		logout: authLogout,
		token,
	};

	return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthProvider;
