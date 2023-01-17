import { createStyles, Image, Button } from '@mantine/core';
import GameCoverImg from '../assets/games_cover.png';
import { IconDownload } from '@tabler/icons';

const useStyles = createStyles({
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '4rem 0 0 0',
		flexDirection: 'column',
	},
	cover: {
		objectFit: 'contain',
		width: '750px !important',
		'@media (max-width: 900px)': {
			width: '500px !important',
		},
		'@media (max-width: 728px)': {
			width: '350px !important',
		},
	},
	downloadSec: {
		margin: '2rem 0 0 0',
		display: 'flex',
		justifyContent: 'space-between',
	},

	downloadBtn: {
		margin: '5px',
		flexWrap: 'wrap',
	},
});

const Games = () => {
	const { classes, cx } = useStyles();

	return (
		<div className={classes.container}>
			<Image src={GameCoverImg} radius="md" className={classes.cover} />
			<div className={classes.downloadSec}>
				<Button
					className={classes.downloadBtn}
					color={'dark'}
					leftIcon={<IconDownload />}
				>
					Science
				</Button>
				<Button
					className={classes.downloadBtn}
					color={'dark'}
					leftIcon={<IconDownload />}
				>
					Maths
				</Button>
				<Button
					className={classes.downloadBtn}
					color={'dark'}
					leftIcon={<IconDownload />}
				>
					Geography
				</Button>
			</div>
		</div>
	);
};

export default Games;
