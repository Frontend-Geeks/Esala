import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register/Register';
import Header from './Components/Header/Header';
import { useState } from 'react';
import { useMantineTheme } from '@mantine/core';
import Lessons from './pages/Lessons';
import Games from './pages/Games';
import './styles/App.css';

const data = {
	NavElements: ['Home', 'Lessons', 'Games'],
	DashboardItems: [
		'Lesson 1',
		'Lesson 2',
		'Lesson 3',
		'Lesson 4',
		'Lesson 5',
		'Lesson 6',
		'Lesson 7',
		'Lesson 8',
		'Lesson 9',
	],
};

const App = () => {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<div>
			<Header opened={opened} setOpened={setOpened} theme={theme} data={data} />
			<Routes>
				<Route path="/" element={<Dashboard data={data} />} />
				<Route path="/lessons" element={<Lessons />} />
				<Route path="/games" element={<Games />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
	);
};

export default App;
