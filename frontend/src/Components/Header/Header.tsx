import { useContext } from 'react';
import {
	Text,
	MediaQuery,
	Burger,
	Header as HeaderBar,
	List,
	Image,
	Input,
	Avatar,
	Button,
} from '@mantine/core';
import logo from '../../assets/logo.png';
import { IconSearch } from '@tabler/icons';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = ({ opened, setOpened, theme, data }: any) => {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem('user');
		navigate('/register');
		toast.success('Logged out');
	};

	return (
		<HeaderBar
			height={{ base: 80, md: 85 }}
			p="lg"
			sx={{
				background: '#292F33',
				color: '#ffff',
				borderBottomWidth: 0,
				overflow: 'hidden',
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
				<Input
					icon={<IconSearch />}
					variant="filled"
					placeholder="Search Subject, Grade"
					styles={{
						input: {
							backgroundColor: '#606060',
							color: '#fff',
							outline: 'none',
							border: 'none',
						},
					}}
				/>
				<MediaQuery query="(max-width: 728px)" styles={{ display: 'none' }}>
					<List
						sx={{
							listStyle: 'none',
							display: 'flex',
						}}
					>
						{data.NavElements.map((element: any) => (
							<List.Item
								key={element}
								sx={{
									margin: '0 15px 0 15px',
									padding: '5px 10px 5px 10px',
									borderRadius: '3px',
									'&:hover': {
										backgroundColor: 'rgba(0, 0, 0, 0.3)',
									},
								}}
							>
								<Link
									to={`/${element === 'Home' ? '' : element}`}
									style={{
										textDecoration: 'none',
										fontWeight: 500,
										fontSize: '14px',
										color: '#fff',
									}}
								>
									{element}
								</Link>
							</List.Item>
						))}
					</List>
				</MediaQuery>

				<MediaQuery query="(max-width: 728px)" styles={{ display: 'none' }}>
					{localStorage.getItem('user') ? (
						<Button onClick={handleLogout} color="dark">
							Logout
						</Button>
					) : (
						<div
							style={{
								width: '8rem',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								background: '#111',
								padding: '5px 12px 5px 12px',
								borderRadius: '5px',
							}}
						>
							<Text
								sx={{
									fontSize: '18px',
									fontWeight: 500,
								}}
							>
								Account
							</Text>
							<Avatar
								src={null}
								radius="xl"
								size="md"
								color="dark"
								sx={{
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'center',
								}}
							/>
						</div>
					)}
				</MediaQuery>
				<MediaQuery query="(min-width: 728px)" styles={{ display: 'none' }}>
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
