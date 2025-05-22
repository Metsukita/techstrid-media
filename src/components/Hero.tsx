import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative flex items-center justify-center h-[90vh] bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white overflow-hidden">
            {/* Background shapes */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none">
                <svg className="absolute top-0 left-0 opacity-30" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="300" cy="300" r="300" fill="url(#paint0_radial)" />
                    <defs>
                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(300 300) scale(300)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#fff" stopOpacity="0.15" />
                            <stop offset="1" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="relative z-10 w-full flex flex-col items-center justify-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    Potencialize seu negócio com <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">Marketing Digital</span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-2xl mb-10 max-w-2xl mx-auto text-white/90"
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    Conectamos seu setor comercial e criamos anúncios de alta conversão para acelerar suas vendas. Seu crescimento é o nosso sucesso.
                </motion.p>
                <motion.a
                    href="#contact"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-300 to-pink-400 text-blue-900 font-bold rounded-full shadow-xl hover:scale-105 hover:from-yellow-400 hover:to-pink-500 transition transform duration-200"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                >
                    Agendar Sessão Estratégica
                </motion.a>
                <div className="flex flex-wrap gap-6 justify-center mt-12">
                    <div className="bg-white/10 rounded-2xl px-6 py-4 flex flex-col items-center min-w-[140px]">
                        <span className="text-2xl font-bold text-yellow-200">+100</span>
                        <span className="text-sm text-white/80">Empresas atendidas</span>
                    </div>
                    <div className="bg-white/10 rounded-2xl px-6 py-4 flex flex-col items-center min-w-[140px]">
                        <span className="text-2xl font-bold text-yellow-200">+5M</span>
                        <span className="text-sm text-white/80">Investidos em anúncios</span>
                    </div>
                    <div className="bg-white/10 rounded-2xl px-6 py-4 flex flex-col items-center min-w-[140px]">
                        <span className="text-2xl font-bold text-yellow-200">+10M</span>
                        <span className="text-sm text-white/80">Oportunidades geradas</span>
                    </div>
                    <div className="bg-white/10 rounded-2xl px-6 py-4 flex flex-col items-center min-w-[140px]">
                        <span className="text-2xl font-bold text-yellow-200">+20K</span>
                        <span className="text-sm text-white/80">Leads/mês</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;