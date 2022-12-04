const firebase = require('../config/config');
const asyncHandler = require('express-async-handler');

// @desc    Register new user
// @route   POST /api/signup
// @access  Public
const registerUser = asyncHandler(async () => {
	const userResponse = await auth.auth().createUser({
		email: req.body.email,
		password: req.body.password,
		emailVerified: false,
		disabled: false,
	});

	res.send(userResponse);
});

// @desc    Authenticate a user
// @route   POST /api/login
// @access  Public
const loginUser = asyncHandler(async () => {});

module.export = { registerUser, loginUser };
