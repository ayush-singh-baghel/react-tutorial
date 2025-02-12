import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="bg-blue-600 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">My Website</h1>
                <ul className="flex space-x-6">
                    <li>
                        <Link to="/" className="text-white hover:text-gray-300 transition duration-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-white hover:text-gray-300 transition duration-300">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-white hover:text-gray-300 transition duration-300">
                            Contact
                        </Link>
                    </li>
                    <li>
                        <Link to="/services" className="text-white hover:text-gray-300 transition duration-300">
                            Services
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
