import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Header from './Components/Header/Header';
import { useState } from 'react';
import {
	AppShell,
	Text,
	useMantineTheme,
	Header as HeaderBar,
} from '@mantine/core';

function App() {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);

	return (
		<>
			<Header opened={opened} setOpened={setOpened} theme={theme} />
			{/* <AppShell
				styles={{
					main: {
						background: theme.colors.dark[8],
						margin: 0,
						padding: 0,
					},
				}}
				navbarOffsetBreakpoint="sm"
				header={
					<HeaderBar
						height={{ base: 80, md: 80 }}
						p="md"
						sx={{ background: theme.colors.dark[6] }}
					>
						<Header opened={opened} setOpened={setOpened} theme={theme} />
					</HeaderBar>
				}
			>
				<Router>
					<Routes>
						<Route path="/" element={<Dashboard />} />
						<Route path="/register" element={<Register />} />
					</Routes>
				</Router>
			</AppShell> */}
		</>
	);
}

export default App;
