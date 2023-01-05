const asyncHandler = require('express-async-handler');
const {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} = require('firebase/auth');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const auth = getAuth();
const db = getFirestore();

const createUser = asyncHandler(async (req, res) => {
	try {
		const { name, email, password } = req.body;

		if (!name || !email || !password) {
			res.status(400);
			throw new Error('Please add all fields');
		}

		const user = await createUserWithEmailAndPassword(auth, email, password)
			.then(async (cred) => {
				const docRef = await addDoc(collection(db, 'users'), {
					userId: `${cred.user.uid}`,
				});
				await updateProfile(cred.user, {
					displayName: name,
				});
			})
			.catch((err) => console.log(err));

		if (user.ok()) {
			res.status(201).json({
				_id: user.uid,
				name: user.name,
				email: user.email,
			});
		} else {
		}
	} catch (err) {
		console.log(err);
		res.status(400);
		throw new Error('Invalid user data');
	}
});

const loginUser = asyncHandler(async (req, res) => {});

module.exports = { createUser, loginUser };
