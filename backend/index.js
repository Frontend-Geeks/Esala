const express = require('express');
require('dotenv').config();
const firebase = require('./config');

const app = express();

app.use('/api/auth', require('./routes/authRoutes'));

app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});
