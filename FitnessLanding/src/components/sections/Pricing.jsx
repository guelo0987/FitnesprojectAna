import React from 'react';
import { PRICING_BENEFITS } from '../../data/mockData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Pricing = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="planes" className="py-20 lg:py-28 bg-fit-light">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-bold text-fit-green-dark uppercase tracking-[0.2em] mb-3 bg-fit-green/10 px-3 py-1.5 rounded-full">
            Planes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[0.95] text-fit-black">
            Invierte en
            <span className="text-fit-green-dark"> bienestar</span>
          </h2>
        </div>

        {/* Pricing card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-xl shadow-black/5 border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2">

              {/* Left: Green side */}
              <div className="relative bg-fit-green p-8 lg:p-10 flex flex-col justify-between min-h-[380px]">
                <div>
                  <span className="inline-block bg-black/10 text-black text-[11px] font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-wide">
                    Plan Recomendado
                  </span>
                  <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-black leading-[0.9] tracking-tight mb-3">
                    Plan Diario
                  </h3>
                  <div>
                    <span className="font-display text-4xl font-extrabold text-black">RD$450</span>
                    <span className="text-black/50 text-sm font-semibold ml-1.5">/ d&iacute;a</span>
                  </div>
                </div>

                <div className="flex items-end justify-between pt-5 border-t border-black/10 mt-5">
                  <div className="flex gap-4">
                    {[
                      { v: "40%", l: "Prote\u00edna" },
                      { v: "35%", l: "Carbos" },
                      { v: "25%", l: "Grasas" },
                    ].map((m, i) => (
                      <div key={i}>
                        <span className="text-lg font-extrabold text-black block font-display">{m.v}</span>
                        <span className="text-[9px] font-bold text-black/40 uppercase">{m.l}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-black rounded-xl p-1.5 shadow-xl">
                    <img src="/pricing-plate.webp" alt="Plato premium" className="w-16 h-16 object-cover rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="p-8 lg:p-10 flex flex-col justify-center">
                <h4 className="font-display text-lg font-extrabold text-fit-black mb-6 tracking-tight">Incluye:</h4>
                <div className="space-y-4 mb-8">
                  {PRICING_BENEFITS.map((b, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-7 h-7 bg-fit-green/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-fit-green-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-bold text-fit-black text-sm">{b.label}</h5>
                        <p className="text-xs text-gray-500 leading-relaxed mt-0.5">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.instagram.com/fitessence_catering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2.5 bg-fit-black text-white py-3.5 rounded-2xl font-bold text-sm hover:bg-fit-green hover:text-black transition-all duration-300 shadow-lg"
                >
                  Comenzar Ahora
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
