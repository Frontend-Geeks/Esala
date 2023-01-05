import { useState, useContext } from 'react';
import { Input, Button, NavLink } from '@mantine/core';
import { useNavigate } from 'react-router';
import axios from 'axios';
const API_URL = 'api/auth/';

const Signup = ({ styles }) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const { name, email, password } = formData;
	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const response = await axios
			.post('http://localhost:4000/api/auth/register', {
				name: name,
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.data) {
					localStorage.setItem('user', JSON.stringify(res.data));
					navigate('/');
				}
				console.log(res);
			})
			.catch((err) => console.log(err));
	};

	return (
		<>
			<form>
				<div className={styles.inputField}>
					<label>Name : </label>
					<Input
						type="text"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					/>
				</div>
				<div className={styles.inputField}>
					<label>Email : </label>
					<Input
						type="text"
						placeholder="Enter your email"
						value={email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
				</div>
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
