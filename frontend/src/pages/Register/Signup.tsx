import { useState, useContext } from 'react';
import { Input, Button, NavLink } from '@mantine/core';
import { authContext } from '../../Context/auth/authContext';
import { Navigate, useNavigate } from 'react-router';
const API_URL = 'api/auth/';

const Signup = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formData;
	const authCtx = useContext(authContext);
	const navigate = useNavigate();

	const handleSubmit = (e: any) => {
		e.preventDefault();
		authCtx.signup(formData, () => {
			navigate('/');
		});
	};

	return (
		<>
			<form>
				<label>Name : </label>
				<Input
					type="text"
					placeholder="Enter your name"
					value={name}
					onChange={(e) => setFormData({ ...formData, name: e.target.value })}
				/>
				<label>Email : </label>
				<Input
					type="text"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
				<label>Password : </label>
				<Input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
				/>

				<Button type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</form>
		</>
	);
};

export default Signup;
