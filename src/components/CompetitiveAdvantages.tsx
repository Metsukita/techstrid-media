import React from 'react';

const CompetitiveAdvantages: React.FC = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Por que escolher a TechStride Media?</h2>
                <p className="text-lg mb-12">Descubra nossos diferenciais competitivos que nos tornam a escolha ideal para suas necessidades de marketing digital e web design.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Performance</h3>
                        <p>Maximizamos o desempenho de suas campanhas com estratégias baseadas em dados e análises detalhadas.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Personalização</h3>
                        <p>Nossos serviços são adaptados às suas necessidades específicas, garantindo resultados que atendem às suas expectativas.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-4">Atendimento</h3>
                        <p>Oferecemos suporte excepcional, com uma equipe dedicada pronta para ajudar você a cada passo do caminho.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompetitiveAdvantages;