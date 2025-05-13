import React from 'react';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
   <div className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
          Welcome to <span className="text-blue-600">Insightful Reads</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Dive into expert articles, industry insights, and inspiring stories from our creators.
        </p>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEzfef-T3Pe3acsSEetmMN0Q5s-hVoiqtUdg&s"
          alt="Blog welcome"
          className="w-full max-w-3xl mx-auto rounded-xl shadow-lg mb-10"
        />
        <Link to="/blog/articles">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition shadow">
            Browse Articles
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
