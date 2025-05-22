import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'João Silva',
    feedback: 'A TechStride Media revolucionou nosso marketing digital. Resultados acima do esperado!',
    position: 'Diretor Comercial, Empresa X',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Maria Souza',
    feedback: 'Equipe dedicada, atendimento ágil e resultados reais. Recomendo muito!',
    position: 'CEO, Startup Y',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Carlos Lima',
    feedback: 'Nossas campanhas nunca performaram tão bem. Parceria de sucesso!',
    position: 'CMO, Negócios Z',
    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="section bg-gradient-to-b from-blue-50 to-white">
      <div className="container">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">Depoimentos</h2>
        <p className="text-lg text-gray-600 text-center mb-12">Veja o que nossos clientes dizem sobre nós</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card flex flex-col items-center text-center hover:shadow-2xl transition">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover mb-4 border-4 border-blue-100 shadow" />
              <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
              <h3 className="font-bold text-blue-700">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;