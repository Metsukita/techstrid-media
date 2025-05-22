import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-bold">TechStride Media</h5>
                        <p className="text-sm">Your partner in digital marketing and web design.</p>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h6 className="text-md font-semibold">Links</h6>
                        <ul className="list-none">
                            <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
                            <li><a href="#portfolio" className="text-gray-400 hover:text-white">Portfolio</a></li>
                            <li><a href="#testimonials" className="text-gray-400 hover:text-white">Testimonials</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-md font-semibold">Follow Us</h6>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">© {new Date().getFullYear()} TechStride Media. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;