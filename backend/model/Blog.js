const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    enum: ['Career', 'Finance', 'Travel', 'Technology', 'Health', 'Lifestyle', 'Other'],
    trim: true,
  },
  author: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: [true, 'Please provide content'],
  },
  image: {
    type: String,
    // Optional URL for blog image
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the 'updatedAt' field on blog updates
BlogSchema.pre('findOneAndUpdate', function() {
  this.set({ updatedAt: Date.now() });
});

module.exports = mongoose.model('Blog', BlogSchema);