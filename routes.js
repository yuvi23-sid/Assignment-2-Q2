const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

// Define routes
router.post('/register', controllers.register);

module.exports = router;
