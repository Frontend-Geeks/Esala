import {
	MediaQuery,
	Burger,
	Header as HeaderBar,
	List,
	Image,
	Input,
} from '@mantine/core';
import logo from '../../assets/logo.png';
import { IconSearch } from '@tabler/icons';

const Header = ({ opened, setOpened, theme }: any) => {
	return (
		<HeaderBar
			height={{ base: 80, md: 85 }}
			p="lg"
			sx={{
				background: '#292F33',
				color: '#ffff',
				borderBottomWidth: 0,
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					height: '100%',
				}}
			>
				<Image
					src={logo}
					radius="md"
					width={150}
					height={70}
					alt="Esala Logo"
				/>

				<Input icon={<IconSearch />} placeholder="Search Subject, Grade" />

				<List
					sx={{
						color: '#fff',
						listStyle: 'none',
						display: 'flex',
						fontWeight: 500,
						fontSize: '14px',
					}}
				>
					<List.Item
						sx={{
							margin: '0 15px 0 15px',
							padding: '5px 10px 5px 10px',
							borderRadius: '3px',
							'&:hover': {
								backgroundColor: 'rgba(0, 0, 0, 0.3)',
							},
						}}
					>
						Home
					</List.Item>
					<List.Item
						sx={{
							margin: '0 15px 0 15px',
							padding: '5px 10px 5px 10px',
							borderRadius: '3px',
							'&:hover': {
								backgroundColor: 'rgba(0, 0, 0, 0.3)',
							},
						}}
					>
						Lessons
					</List.Item>
					<List.Item
						sx={{
							margin: '0 15px 0 15px',
							padding: '5px 10px 5px 10px',
							borderRadius: '3px',
							'&:hover': {
								backgroundColor: 'rgba(0, 0, 0, 0.3)',
							},
						}}
					>
						Games
					</List.Item>
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
