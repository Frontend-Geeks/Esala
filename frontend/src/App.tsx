import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Header from './Components/Header/Header';
import { useState } from 'react';
import { useMantineTheme } from '@mantine/core';

function App() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<div>
			<Header opened={opened} setOpened={setOpened} theme={theme} />

			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
