import { useState } from 'react';
import { Button, Grid, Input } from '@mantine/core';
import { createStyles } from '@mantine/core';
// import { useSelector, useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formData;

	return (
		<Grid
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
			m="xl"
		>
			<Grid.Col
				span={4}
				m="xl"
				sx={{
					backgroundColor: '#606060',
					borderRadius: '15px',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Grid.Col
					sx={{
						display: 'flex',
						height: '200px',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<div style={{ display: 'flex', justifyContent: 'center' }}>
						Signup
					</div>
					<div>Login</div>
				</Grid.Col>
				<form>
					<label>Name : </label>
					<Input type="text" placeholder="Enter your name" value={name} />
					<label>Email : </label>
					<Input
						type="text"
						placeholder="Enter your email"
						value={email}
						sx={{}}
					/>
					<label>Password : </label>
					<Input
						type="password"
						placeholder="Enter your password"
						value={password}
					/>

					<Button type="submit">Submit</Button>
				</form>
			</Grid.Col>
		</Grid>
	);
};

export default Register;
