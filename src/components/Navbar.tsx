import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">
                    TechStride Media
                </div>
                <div className="hidden md:flex space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-blue-600">
                        Home
                    </Link>
                    <Link href="#services" className="text-gray-700 hover:text-blue-600">
                        Services
                    </Link>
                    <Link href="#portfolio" className="text-gray-700 hover:text-blue-600">
                        Portfolio
                    </Link>
                    <Link href="#testimonials" className="text-gray-700 hover:text-blue-600">
                        Testimonials
                    </Link>
                    <Link href="#contact" className="text-gray-700 hover:text-blue-600">
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;