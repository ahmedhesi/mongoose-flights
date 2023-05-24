const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// Post /flights/:id/destinations (create arrival for a flight)
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;