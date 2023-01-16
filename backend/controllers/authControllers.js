const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');
require('dotenv');
const {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} = require('firebase/auth');
const {
	getFirestore,
	collection,
	addDoc,
	doc,
	getDoc,
} = require('firebase/firestore');

const auth = getAuth();
const db = getFirestore();

const createUser = asyncHandler(async (req, res) => {
	try {
		const { name, email, password, role } = req.body;

		if (!name || !email || !password || !role) {
			res.status(400).json({ errorMessage: 'Please add all fields' });
			throw new Error('Please add all fields');
		}

		const user = await createUserWithEmailAndPassword(auth, email, password)
			.then(async (cred) => {
				const docRef = await addDoc(collection(db, 'users'), {
					userId: `${cred.user.uid}`,
					role: role,
					token: generateToken(cred.user.uid),
				});
				await updateProfile(cred.user, {
					displayName: name,
				});
				res.status(201).json({
					_id: cred.user.uid,
					name: cred.user.displayName,
					email: cred.user.email,
					token: generateToken(cred.user.uid),
				});
			})
			.catch((err) =>
				res.status(400).json({ errorMessage: 'Email already exist!' }),
			);
	} catch (err) {
		res.status(400);
		throw new Error('Email already exist!');
	}
});

const loginUser = asyncHandler(async (req, res) => {
	try {
		const { email, password } = req.body;

		const user = await signInWithEmailAndPassword(auth, email, password)
			.then((cred) => {
				res.status(201).json({
					_id: cred.user.uid,
					name: cred.user.displayName,
					email: cred.user.email,
					token: generateToken(cred.user._id),
				});
			})
			.catch((err) =>
				res.status(400).json({ errorMessage: 'Invalid email or password!' }),
			);
	} catch (err) {
		res.status(400);
		throw new Error('Invalid email or password!');
	}
});

const generateToken = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

module.exports = { createUser, loginUser };
