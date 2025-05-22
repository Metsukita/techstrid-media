import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    feedback: 'TechStride Media transformed our online presence. Highly recommend!',
    position: 'CEO, Example Corp',
  },
  {
    id: 2,
    name: 'Jane Smith',
    feedback: 'Their team is professional and dedicated. We saw immediate results!',
    position: 'Marketing Director, Another Co',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    feedback: 'Fantastic service and support. Our website looks amazing!',
    position: 'Founder, Startup Inc',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;