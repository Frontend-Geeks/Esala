const express = require('express');
const router = express.Router();

const { getLessons, addLessons } = require('../controllers/lessonsControllers');

router.post('/get', getLessons);
router.post('/add', addLessons);

module.exports = router;
