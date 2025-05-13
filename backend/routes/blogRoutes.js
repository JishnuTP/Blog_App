const express = require('express');
const router = express.Router();
const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  getMyBlogs
} = require('../controllers/blogContollers');
const { protect } = require('../middleware/authMiddleware');

// All routes require authentication
router.use(protect);

// Get all blogs with optional filters & create new blog
router.route('/')
  .get(getBlogs)
  .post(createBlog);

// Get user's blogs
router.get('/myblogs', getMyBlogs);

// Get, update and delete a specific blog
router.route('/:id')
  .get(getBlog)
  .put(updateBlog)
  .delete(deleteBlog);

module.exports = router;