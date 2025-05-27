const express = require('express');
const router = express.Router();
const users = require('../db');

router.post('/', (req, res) => {
	const { username, password } = req.body;
	const user = users.find(
		(u) => u.username === username && u.password === password
	);
	if (user) {
		return res.json({ token: 'mock-token-123' });
	}
	return res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
