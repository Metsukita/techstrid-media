import React from 'react';

const services = [
  {
    title: 'Marketing Digital',
    description: 'Estratégias personalizadas para aumentar sua presença online e atrair mais clientes.',
    icon: '📈', // Placeholder for an icon
  },
  {
    title: 'Web Design',
    description: 'Criação de sites modernos e responsivos que se destacam no mercado.',
    icon: '💻', // Placeholder for an icon
  },
  {
    title: 'SEO',
    description: 'Otimização de sites para motores de busca, aumentando a visibilidade e o tráfego.',
    icon: '🔍', // Placeholder for an icon
  },
  {
    title: 'Gestão de Mídias Sociais',
    description: 'Gerenciamento de suas redes sociais para engajar e crescer sua audiência.',
    icon: '📱', // Placeholder for an icon
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Nossos Serviços</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;