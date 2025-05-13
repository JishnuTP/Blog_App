const Blog = require('../model/Blog');
const User = require('../model/User');

// @desc    Get all blogs
// @route   GET /api/blogs
// @access  Private
exports.getBlogs = async (req, res) => {
  try {
    // Extract query parameters for filtering
    const { category, author } = req.query;
    
    // Build filter object based on provided query params
    const filter = {};
    if (category) filter.category = category;
    if (author) filter.author = author;
    
    // Find blogs with filters if any
    const blogs = await Blog.find(filter).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get a single blog
// @route   GET /api/blogs/:id
// @access  Private
exports.getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create a new blog
// @route   POST /api/blogs
// @access  Private
exports.createBlog = async (req, res) => {
  try {
    // Get user from request (set by auth middleware)
    const user = await User.findById(req.user.id);
    
    // Create blog with user info
    const blog = await Blog.create({
      ...req.body,
      userId: req.user.id,
      author: user.name,
    });
    
    res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update a blog
// @route   PUT /api/blogs/:id
// @access  Private (owner only)
exports.updateBlog = async (req, res) => {
  try {
    let blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    // Check ownership
    if (blog.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this blog',
      });
    }
    
    // Update blog
    blog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete a blog
// @route   DELETE /api/blogs/:id
// @access  Private (owner only)
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    // Check ownership
    if (blog.userId.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this blog',
      });
    }
    
    await blog.deleteOne();
    
    res.status(200).json({
      success: true,
      data: {},
      message: 'Blog removed successfully',
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get blogs by logged-in user
// @route   GET /api/blogs/myblogs
// @access  Private
exports.getMyBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ userId: req.user.id }).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};