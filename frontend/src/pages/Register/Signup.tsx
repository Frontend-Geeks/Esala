import { useState, useContext } from 'react';
import { Input, Button, NavLink } from '@mantine/core';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Select } from '@mantine/core';
const API_URL = 'api/auth/';

const Signup = ({ styles }: any) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		role: 'student',
	});
	const { name, email, password, role } = formData;
	const navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		const response = await axios
			.post('http://localhost:4000/api/auth/register', {
				name: name,
				email: email,
				password: password,
				role: role,
			})
			.then((res) => {
				localStorage.setItem('user', JSON.stringify(res.data));
				toast.success('User created!', {
					position: 'bottom-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'dark',
				});
				navigate('/');
			})
			.catch((err) => {
				toast.error('Email already exist!');
			});
	};

	console.log(formData);

	return (
		<>
			<form>
				<div className={styles.inputField}>
					<label>Name : </label>
					<Input
						type="text"
						placeholder="Enter your name"
						value={name}
						onChange={(e) => setFormData({ ...formData, name: e.target.value })}
					/>
				</div>
				<div className={styles.inputField}>
					<label>Email : </label>
					<Input
						type="text"
						placeholder="Enter your email"
						value={email}
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
					/>
				</div>
				<div className={styles.inputField}>
					<label>Password : </label>
					<Input
						type="password"
						placeholder="Enter your password"
						value={password}
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
					/>
				</div>
				{/* <div className={styles.inputField} style={{ flexDirection: 'column' }}>
					<label style={{ alignSelf: 'flex-start' }}>
						Teacher or Student :{' '}
					</label>
					<Select
						placeholder="Pick one"
						data={[
							{ value: 'teacher', label: 'Teacher' },
							{ value: 'student', label: 'Student' },
						]}
						color="dark"
						onChange={(e) => setFormData({ ...formData, role:  })}
					/>
				</div> */}

				<Button type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</form>
		</>
	);
};

export default Signup;
