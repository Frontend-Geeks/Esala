import {
	Text,
	MediaQuery,
	Burger,
	Header as HeaderBar,
	List,
} from '@mantine/core';

const Header = ({ opened, setOpened, theme }: any) => {
	return (
		<HeaderBar
			height={{ base: 70, md: 80 }}
			p="md"
			sx={{ background: theme.colors.dark[6], color: '#ffff' }}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '100%',
				}}
			>
				{/* Logo */}
				<Text sx={{ fontSize: '30px', fontWeight: 600 }}>Esala</Text>

				<List sx={{ color: '#fff', listStyle: 'none', display: 'flex' }}>
					<List.Item>Home</List.Item>
					<List.Item>Lessons</List.Item>
					<List.Item>Games</List.Item>
				</List>

				<MediaQuery largerThan="sm" styles={{ display: 'none' }}>
					<Burger
						opened={opened}
						onClick={() => setOpened((o: boolean) => !o)}
						size="sm"
						color={theme.colors.gray[6]}
						mr="xl"
					/>
				</MediaQuery>
			</div>
		</HeaderBar>
	);
};

export default Header;
