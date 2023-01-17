import { Route, Routes, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register/Register';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import { useMantineTheme } from '@mantine/core';
import Lessons from './pages/Lessons';
import Games from './pages/Games';
import './styles/App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const data = {
	NavElements: ['Home', 'Lessons', 'Games'],
	DashboardItems: [
		'HTML and How It works',
		'Equations & easy ways to solve them',
		'Photosysthesis in a nutshell..',
		'What is Cyber Security',
		'Solar Family',
		'Importance of micro-organisms..',
		'Main Logic Gates',
		'Algebraic Expressions',
		'Properties of Matter',
	],
};

const App = () => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (localStorage.getItem('user')) {
			navigate('/');
		} else {
			navigate('/register');
		}
	}, [localStorage.getItem('user')]);

	return (
		<div>
			<Header opened={opened} setOpened={setOpened} theme={theme} data={data} />

			<Routes>
				<Route path="/" element={<Dashboard data={data} />} />
				<Route path="/lessons" element={<Lessons />} />
				<Route path="/games" element={<Games />} />
				<Route path="/register" element={<Register />} />
			</Routes>

			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
};

export default App;
