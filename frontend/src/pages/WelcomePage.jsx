import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
 const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching with the provided sample data
    const sampleBlogs = [
      {
        _id: '1',
        title: 'Top 5 Travel Destinations for 2025',
        category: 'Travel',
        author: 'John Doe',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHywH-8kSRUXaxo5mdJ4vixbNXOyrTybV5OQ&s',
        createdAt: '2025-05-10T12:34:56Z',
      },
      {
        _id: '2',
        title: 'How to Save for Your Dream Career',
        category: 'Finance',
        author: 'Jane Smith',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyYu9F9hkJICE_8el9gXQlD6iKKKFOayPuEg&s',
        createdAt: '2025-05-08T09:20:00Z',
      },
    ];
    
    setBlogs(sampleBlogs);
    setLoading(false);
  }, []);

  // Format date to a more readable format
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-lg font-semibold text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6 px-16">
      {/* Welcome Header */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Welcome to Our Blog</h1>
        <p className="text-lg text-center text-gray-600 mb-6">
          Discover the latest insights on travel, finance, and more from our experts
        </p>
        <div className="flex justify-center">
           <Link to="/login" className="hidden md:block">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300">
            Subscribe Now
          </button>
          </Link>
        </div>
      </div>

      {/* Featured Posts */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div key={blog._id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="relative h-48">
              <img 
                src={blog.image || "/api/placeholder/600/400"} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-sm font-semibold py-1 px-3 rounded-bl-lg">
                {blog.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h3>
              <div className="flex items-center justify-between text-gray-600 text-sm mb-4">
                <div>By {blog.author}</div>
                <div>{formatDate(blog.createdAt)}</div>
              </div>
              <p className="text-gray-600 mb-4">
                {blog.category === 'Travel' 
                  ? 'Explore the most breathtaking destinations that should be on your travel list for 2025.' 
                  : 'Learn effective strategies to save money and invest in your future career goals.'}
              </p>
              <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                Read More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-blue-600 rounded-lg shadow-md p-8 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-blue-100">Subscribe to our newsletter for the latest posts and updates</p>
          </div>
          <div className="flex w-full md:w-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-4 py-2 rounded-l-lg w-full md:w-64 focus:outline-none"
            />
           
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-6 rounded-r-lg transition-colors duration-300">
              Subscribe
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
