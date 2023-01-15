import { Button, Input } from '@mantine/core';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import useInput from '../../hooks/useInput';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = ({ styles }: any) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		const reponse = await axios
			.post('http://localhost:4000/api/auth/login', {
				email: email,
				password: password,
			})
			.then((res) => {
				if (res.data) {
					localStorage.setItem('user', JSON.stringify(res.data));
				}
				navigate('/');
				toast.info(`Welcome back ${res.data.name}`);
			})
			.catch((err) => {
				toast.error(err.response.data.errorMessage);
			});
	};

	return (
		<form>
			<div className={styles.inputField}>
				<label>Email : </label>
				<Input
					type="text"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setFormData({ ...formData, email: e.target.value })}
				/>
			</div>
			<div className={styles.inputField}>
				<label>Password : </label>
				<Input
					type="password"
					placeholder="Enter your password"
					value={password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
				/>
			</div>

			<Button type="submit" onClick={handleSubmit}>
				Submit
			</Button>
		</form>
	);
};

export default Login;
