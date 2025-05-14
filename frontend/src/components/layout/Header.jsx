import React from 'react';

const Header = () => {
    return (
        <header className="bg-white text-black p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="logo">
                    <h1 className="text-2xl font-bold">My Blog</h1>
                </div>
                <nav className="nav">
                    <ul className="flex space-x-4">
                        <li><a href="/" className="hover:text-gray-500">Home</a></li>
                        <li><a href="/blog" className="hover:text-gray-500">Blog</a></li>
                        <li>
                            <a href="/profile" className="hover:text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M5.121 17.804A9 9 0 1118.879 6.196M12 14v7m-4-4h8"
                                    />
                                </svg>
                            </a>
                        </li>
                      
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;