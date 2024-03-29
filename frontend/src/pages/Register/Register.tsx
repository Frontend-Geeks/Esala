import { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import styles from '../../styles/Register.module.css';

const Register = () => {
	const [selectedTab, setSelectedTab] = useState('signup');

	return (
		<div className={styles.wrapper}>
			<div className={styles.form}>
				<div className={styles.switchTabs}>
					<button
						className={styles.tab}
						onClick={() => setSelectedTab('signup')}
						style={{
							backgroundColor: selectedTab === 'signup' ? '#292F33' : '#606060',
						}}
					>
						Sign up
					</button>
					<button
						className={styles.tab}
						onClick={() => setSelectedTab('login')}
						style={{
							backgroundColor: selectedTab === 'login' ? '#292F33' : '#606060',
						}}
					>
						Login
					</button>
				</div>
				<div className={styles.formFields}>
					{selectedTab === 'signup' ? (
						<Signup styles={styles} />
					) : (
						<Login styles={styles} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Register;
