const asyncHandler = require('express-async-handler');
const { getAuth, createUserWithEmailAndPassword } = require('firebase/auth');

const auth = getAuth();

const createUser = asyncHandler(async (req, res) => {
	const userResponse = await createUserWithEmailAndPassword(
		auth,
		'test@test.com',
		'abc1234#',
	);

	res.send(userResponse);
});

const loginUser = asyncHandler(async (req, res) => {});

module.exports = { createUser };
