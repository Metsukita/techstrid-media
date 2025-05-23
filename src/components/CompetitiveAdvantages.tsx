import React from 'react';

const CompetitiveAdvantages: React.FC = () => {
    return (
        <section className="section relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white">
            {/* SVG background shapes, inspirado no Hero */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none">
                <svg className="absolute top-0 left-0 opacity-20" width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="350" cy="350" r="350" fill="url(#paint0_radial_adv)" />
                    <defs>
                        <radialGradient id="paint0_radial_adv" cx="0" cy="0" r="1" gradientTransform="translate(350 350) scale(350)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#fff" stopOpacity="0.10" />
                            <stop offset="1" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
                <svg className="absolute bottom-0 right-0 opacity-10" width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="200" cy="200" r="200" fill="url(#paint1_radial_adv)" />
                    <defs>
                        <radialGradient id="paint1_radial_adv" cx="0" cy="0" r="1" gradientTransform="translate(200 200) scale(200)" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#fff" stopOpacity="0.08" />
                            <stop offset="1" stopColor="#fff" stopOpacity="0" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>
            <div className="container text-center relative z-10">
                <h2 className="text-4xl font-extrabold mb-4 drop-shadow-lg">Por que escolher a TechStride Media?</h2>
                <p className="text-lg text-white/80 mb-12">Descubra nossos diferenciais competitivos que nos tornam a escolha ideal para suas necessidades de marketing digital e web design.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="rounded-2xl shadow-xl p-8 bg-white/90 hover:shadow-2xl transition">
                        <h3 className="text-xl font-bold mb-4 text-yellow-600">Performance</h3>
                        <p className="text-gray-800">Maximizamos o desempenho de suas campanhas com estratégias baseadas em dados e análises detalhadas.</p>
                    </div>
                    <div className="rounded-2xl shadow-xl p-8 bg-white/90 hover:shadow-2xl transition">
                        <h3 className="text-xl font-bold mb-4 text-pink-600">Personalização</h3>
                        <p className="text-gray-800">Nossos serviços são adaptados às suas necessidades específicas, garantindo resultados que atendem às suas expectativas.</p>
                    </div>
                    <div className="rounded-2xl shadow-xl p-8 bg-white/90 hover:shadow-2xl transition">
                        <h3 className="text-xl font-bold mb-4 text-blue-600">Atendimento</h3>
                        <p className="text-gray-800">Oferecemos suporte excepcional, com uma equipe dedicada pronta para ajudar você a cada passo do caminho.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveAdvantages;