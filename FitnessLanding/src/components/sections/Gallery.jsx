import React from 'react';
import { MENU_FEATURES } from '../../data/mockData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Gallery = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="menu" className="py-20 lg:py-28 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="inline-block text-[11px] font-bold text-fit-green-dark uppercase tracking-[0.2em] mb-3 bg-fit-green/10 px-3 py-1.5 rounded-full">
            Nuestro Men&uacute;
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[0.95] text-fit-black">
            Comer rico y saludable
            <span className="text-fit-green-dark"> s&iacute; es posible</span>
          </h2>
        </div>

        {/* Full width banner */}
        <div className="group relative rounded-3xl overflow-hidden mb-5">
          <div className="aspect-[2.2/1] overflow-hidden">
            <img
              src="/gallery-secondary.png"
              alt="Meal prep variedad de platos saludables"
              className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7">
            <p className="text-white font-display text-xl sm:text-2xl font-extrabold tracking-tight">
              Preparaci&oacute;n diaria con ingredientes frescos
            </p>
          </div>
        </div>

        {/* Bottom row - equal height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Salmon plate */}
          <div className="lg:col-span-5 group relative rounded-3xl overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/pricing-plate.png"
                alt="Plato premium de salm&oacute;n"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="bg-fit-green px-4 py-2 rounded-xl text-sm font-bold text-black">Calidad Gourmet</span>
            </div>
          </div>

          {/* Features card */}
          <div className="lg:col-span-7 bg-fit-black rounded-3xl p-7 sm:p-9 text-white flex flex-col justify-between">
            <div>
              <h3 className="font-display text-2xl font-extrabold mb-6 tracking-tight">
                Men&uacute;s dise&ntilde;ados
                <span className="text-fit-green"> para ti</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {MENU_FEATURES.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-fit-green/20 rounded-md flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-fit-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="text-fit-green font-display text-2xl font-extrabold">RD$450</span>
                <span className="text-gray-500 text-sm ml-1.5">/ d&iacute;a</span>
              </div>
              <a
                href="https://www.instagram.com/fitessence_catering"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fit-green text-black px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-white transition-all"
              >
                Ordenar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
