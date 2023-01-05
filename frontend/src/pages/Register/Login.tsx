import { Button, Input } from '@mantine/core';
import { useState } from 'react';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleSubmit = (e: any) => {
		e.preventDefault();
	};

	return (
		<form>
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
				onChange={(e) => setFormData({ ...formData, password: e.target.value })}
			/>

			<Button type="submit" onClick={handleSubmit}>
				Submit
			</Button>
		</form>
	);
};

export default Login;
