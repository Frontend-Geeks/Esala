import { Grid, Text } from '@mantine/core';

const Dashboard = ({ data }: any) => {
	return (
		<Grid
			p="md"
			sx={{
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			{data.DashboardItems.map((element: string) => (
				<Grid.Col
					span={3}
					sx={{
						backgroundColor: '#606060',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '225px',
						width: '200px',
						borderRadius: '10px',
						margin: '15px 40px 15px 40px',
					}}
					key={element}
				>
					<Text sx={{ fontSize: '20px', fontWeight: 450 }}>{element}</Text>
				</Grid.Col>
			))}
		</Grid>
	);
};

export default Dashboard;
