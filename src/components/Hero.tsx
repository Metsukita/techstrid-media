import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <div className="text-center">
                <motion.h1 
                    className="text-5xl font-bold mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Transform Your Digital Presence
                </motion.h1>
                <motion.p 
                    className="text-lg mb-8"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    We specialize in digital marketing and web design to elevate your brand.
                </motion.p>
                <motion.a 
                    href="#contact"
                    className="inline-block px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Get Started
                </motion.a>
            </div>
        </section>
    );
};

export default Hero;