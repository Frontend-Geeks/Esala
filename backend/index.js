const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
	res.send({
		message: 'Hello World',
	});
});

app.listen(process.env.PORT, () => {
	console.log(`listening on port ${process.env.PORT}`);
});
