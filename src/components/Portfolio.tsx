import React from 'react';

const Portfolio: React.FC = () => {
    const projects = [
        {
            id: 1,
            title: 'Landing Page de Alta Conversão',
            description: 'Exemplo de página criada para maximizar geração de leads.',
            imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 2,
            title: 'Gestão de Anúncios Google',
            description: 'Campanha de Google Ads com resultados expressivos.',
            imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 3,
            title: 'CRM Comercial Integrado',
            description: 'Implantação de CRM para automação do setor comercial.',
            imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
        },
        {
            id: 4,
            title: 'Treinamento Comercial',
            description: 'Capacitação de equipes para alta performance em vendas.',
            imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80',
        },
    ];

    return (
        <section id="portfolio" className="section bg-white">
            <div className="container text-center">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Portfólio</h2>
                <p className="text-lg text-gray-600 mb-12">Alguns dos nossos projetos e resultados</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="card hover:shadow-2xl transition overflow-hidden p-0">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-40 object-cover rounded-t-2xl" />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-blue-700 mb-2">{project.title}</h3>
                                <p className="text-gray-600">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;