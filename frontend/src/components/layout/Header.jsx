import React from 'react';
const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <h1 className="text-2xl font-bold">My Blog</h1>
                </div>
                <nav className="nav">
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:text-gray-300">Home</a></li>
                        <li><a href="/blog" className="hover:text-gray-300">Blog</a></li>
                        <li><a href="/about" className="hover:text-gray-300">About</a></li>
                        <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;