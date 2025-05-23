import React from 'react';

const FunnelDiagram: React.FC = () => {
  return (
    <section className="py-20 bg-black text-white relative">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-2">
          Veja como vamos implementar o
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-center mb-8">
          <span className="text-orange-400">Método Comercial Inteligente</span> na prática:
        </h3>
        <div className="w-full flex justify-center">
          <img 
            src="/funnel-diagram.png" 
            alt="Diagrama do Funil Comercial" 
            className="max-w-full md:max-w-2xl h-auto drop-shadow-xl rounded-xl border-4 border-white/80 bg-white/10"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default FunnelDiagram;
