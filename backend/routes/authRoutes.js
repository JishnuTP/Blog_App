const express = require('express');
const router = express.Router();
const { signup, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Register a new user
router.post('/signup', signup);

// Login user
router.post('/login', login);

// Get user profile
router.get('/me', protect, getMe);

module.exports = router;