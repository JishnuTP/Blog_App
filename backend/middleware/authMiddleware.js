const jwt = require('jsonwebtoken');
const User = require('../model/User');

// Protect routes - only authenticated users can access
exports.protect = async (req, res, next) => {
  let token;

  // Check if token exists in headers
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    // Extract token from Bearer token
    token = req.headers.authorization.split(' ')[1];
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route',
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from the token
    req.user = await User.findById(decoded.id);

    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'User not found with this id',
      });
    }

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route',
    });
  }
};

// Check if user owns the resource
exports.checkOwnership = (req, res, next) => {
  // If user ID from token matches the userID in resource or req.params
  if (req.user.id !== req.params.userId && req.user.id !== req.body.userId) {
    return res.status(403).json({
      success: false,
      message: 'Not authorized to modify this resource',
    });
  }
  next();
};