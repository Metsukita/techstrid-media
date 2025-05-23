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
        <div className="relative w-full max-w-2xl flex flex-col items-center">
          {/* Triângulo de linhas */}
          <svg className="absolute left-1/2 top-0 -translate-x-1/2" width="420" height="340" viewBox="0 0 420 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{zIndex:0}}>
            <line x1="210" y1="70" x2="60" y2="270" stroke="#FF9900" strokeWidth="2" />
            <line x1="210" y1="70" x2="360" y2="270" stroke="#FF9900" strokeWidth="2" />
            <line x1="60" y1="270" x2="360" y2="270" stroke="#FF9900" strokeWidth="2" />
          </svg>
          {/* Círculos */}
          <div className="absolute left-1/2 top-[30px] -translate-x-1/2 z-10">
            <div className="bg-gradient-to-r from-pink-500 to-rose-400 rounded-full border-4 border-white shadow-lg flex flex-col items-center justify-center w-40 h-40">
              <svg width="48" height="48" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><rect x="10" y="12" width="28" height="24" rx="4"/><path d="M14 16l8 8 8-8"/><path d="M24 20v4"/><path d="M18 28h12"/></svg>
              <span className="font-bold text-lg mt-1">ESTRATÉGIA</span>
            </div>
          </div>
          <div className="absolute left-[calc(50%-150px)] top-[220px] z-10">
            <div className="bg-gradient-to-r from-cyan-600 to-teal-400 rounded-full border-4 border-white shadow-lg flex flex-col items-center justify-center w-40 h-40">
              <svg width="48" height="48" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><path d="M24 36V12"/><path d="M16 28l8 8 8-8"/><rect x="12" y="36" width="24" height="4" rx="2"/></svg>
              <span className="font-bold text-lg mt-1">FUNIL COMERCIAL</span>
            </div>
          </div>
          <div className="absolute left-[calc(50%+110px)] top-[220px] z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full border-4 border-white shadow-lg flex flex-col items-center justify-center w-40 h-40">
              <svg width="48" height="48" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="mb-2"><path d="M16 16h16l-4 8v8l-8 4v-8l-4-8z"/><path d="M24 32v8"/></svg>
              <span className="font-bold text-lg mt-1">FUNIL DE ANÚNCIOS</span>
            </div>
          </div>
          {/* Texto central */}
          <div className="absolute left-1/2 top-[150px] -translate-x-1/2 z-20 flex flex-col items-center">
            <span className="font-extrabold text-lg md:text-xl text-white text-center">ESSE FUNIL<br />CONSISTE EM <span className="text-orange-400">UNIR</span></span>
          </div>
          <div className="h-[340px]" />
        </div>
      </div>
    </section>
  );
};

export default FunnelDiagram;
