import React from 'react';

const CompetitiveAdvantages: React.FC = () => {
    return (
        <section className="section bg-white">
            <div className="container text-center">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Por que escolher a TechStride Media?</h2>
                <p className="text-lg text-gray-600 mb-12">Descubra nossos diferenciais competitivos que nos tornam a escolha ideal para suas necessidades de marketing digital e web design.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card hover:shadow-2xl transition">
                        <h3 className="text-xl font-bold mb-4 text-blue-700">Performance</h3>
                        <p className="text-gray-600">Maximizamos o desempenho de suas campanhas com estratégias baseadas em dados e análises detalhadas.</p>
                    </div>
                    <div className="card hover:shadow-2xl transition">
                        <h3 className="text-xl font-bold mb-4 text-blue-700">Personalização</h3>
                        <p className="text-gray-600">Nossos serviços são adaptados às suas necessidades específicas, garantindo resultados que atendem às suas expectativas.</p>
                    </div>
                    <div className="card hover:shadow-2xl transition">
                        <h3 className="text-xl font-bold mb-4 text-blue-700">Atendimento</h3>
                        <p className="text-gray-600">Oferecemos suporte excepcional, com uma equipe dedicada pronta para ajudar você a cada passo do caminho.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveAdvantages;