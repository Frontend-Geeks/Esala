import { useState } from 'react';
import { Button, Grid, Input } from '@mantine/core';
import { createStyles } from '@mantine/core';
import Signup from './Signup';

const Register = () => {
	const [selectedTab, setSelectedTab] = useState('signup');

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
					}}
				>
					<div onClick={() => setSelectedTab('signup')}>Signup</div>
					<div onClick={() => setSelectedTab('login')}>Login</div>
				</Grid.Col>
				<Grid.Col>
					<Signup />
				</Grid.Col>
			</Grid.Col>
		</Grid>
	);
};

export default Register;
