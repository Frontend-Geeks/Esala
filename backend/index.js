const express = require('express');
require('dotenv').config();

const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use('/api/auth', require('./routes/authRoutes'));

app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});
