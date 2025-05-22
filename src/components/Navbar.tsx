import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 select-none">
                    TechStride Media
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="px-4 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-50 transition">Home</Link>
                    <Link href="#services" className="px-4 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-50 transition">Serviços</Link>
                    <Link href="#portfolio" className="px-4 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-50 transition">Portfólio</Link>
                    <Link href="#testimonials" className="px-4 py-2 rounded-full font-medium text-gray-700 hover:bg-blue-50 transition">Depoimentos</Link>
                    <Link href="#contact" className="ml-2 px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 transition">Contato</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;