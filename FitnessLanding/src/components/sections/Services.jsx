import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Services = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-fit-light">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-[11px] font-bold text-fit-green-dark uppercase tracking-[0.2em] mb-3 bg-fit-green/10 px-3 py-1.5 rounded-full">
            Nuestros Servicios
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[0.95] text-fit-black">
            Todo lo que tu gimnasio
            <span className="text-fit-green-dark"> necesita</span>
          </h2>
        </div>

        {/* Top row: 2 image cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-fit-green/5 transition-all duration-500">
            <div className="aspect-[5/3] overflow-hidden">
              <img src="/service-nutrition.webp" alt="Alimentaci&oacute;n saludable" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 lg:p-7">
              <h3 className="font-display text-lg font-extrabold text-fit-black mb-1.5 tracking-tight">Alimentaci&oacute;n Saludable</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Men&uacute;s fitness balanceados, bajos en grasas y ricos en prote&iacute;nas para deportistas.</p>
            </div>
          </div>

          <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl hover:shadow-fit-green/5 transition-all duration-500">
            <div className="aspect-[5/3] overflow-hidden">
              <img src="/service-event.webp" alt="Eventos fitness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 lg:p-7">
              <h3 className="font-display text-lg font-extrabold text-fit-black mb-1.5 tracking-tight">Eventos Fitness Premium</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Inauguraciones, competencias, masterclass. Proyecta una imagen moderna.</p>
            </div>
          </div>
        </div>

        {/* Bottom row: 2 colored cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-fit-black text-white rounded-3xl p-8 lg:p-9 hover:bg-gray-900 transition-all duration-500">
            <div className="w-11 h-11 bg-fit-green/15 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-fit-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-extrabold mb-2 tracking-tight">Log&iacute;stica Total</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Planificaci&oacute;n, montaje y servicio completo. T&uacute; te enfocas en tu negocio.</p>
          </div>

          <div className="bg-fit-green text-black rounded-3xl p-8 lg:p-9 hover:bg-fit-green-dark transition-all duration-500">
            <div className="w-11 h-11 bg-black/10 rounded-xl flex items-center justify-center mb-5">
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-extrabold mb-2 tracking-tight">Personalizaci&oacute;n Completa</h3>
            <p className="text-black/60 text-sm leading-relaxed">Cada evento se adapta a tus metas, p&uacute;blico y necesidades nutricionales.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
