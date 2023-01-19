import { Grid, Image, Text } from '@mantine/core';
import science_cover from '../assets/science_cover.png';
import geography_cover from '../assets/geography_cover.png';
import ict_cover from '../assets/ict_cover.png';
import maths_cover from '../assets/maths_cover.png';

const Dashboard = ({ data }: any) => {
	const CURRENT_USER = JSON.parse(localStorage.getItem('user') || '');

	console.log(CURRENT_USER);

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
			{data.DashboardItems.map((element: string) => {
				let selectImg = '';

				if (element[1] === 'science') {
					selectImg = science_cover;
				} else if (element[1] === 'ict') {
					selectImg = ict_cover;
				} else if (element[1] === 'geography') {
					selectImg = geography_cover;
				} else if (element[1] === 'maths') {
					selectImg = maths_cover;
				}

				return (
					<Grid.Col
						span={3}
						sx={{
							backgroundColor: '#242424',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'center',
							alignItems: 'center',
							height: '225px',
							width: '200px',
							borderRadius: '10px',
							margin: '15px 40px 15px 40px',
						}}
						key={element}
					>
						<Image src={selectImg} radius="md" />
						<Text
							sx={{
								fontSize: '20px',
								fontWeight: 600,
								fontFamily: 'consolas',
								margin: '5px 0 0 0',
								color: '#fff',
								textAlign: 'center',
								overflow: 'hidden',
							}}
						>
							{element[0]}
						</Text>
					</Grid.Col>
				);
			})}
		</Grid>
	);
};

export default Dashboard;
