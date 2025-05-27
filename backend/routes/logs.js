const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const logs = [
		{ timestamp: '2025-05-01T12:00:00Z', action: 'Login' },
		{ timestamp: '2025-05-02T08:30:00Z', action: 'Viewed Logs' },
	];
	res.json(logs);
});

module.exports = router;
