import React from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const About = () => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -bottom-3 -left-3 w-full h-full bg-fit-green/20 rounded-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-black/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/about-team.png"
                  alt="Chef preparando comida saludable"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <span className="inline-block text-[11px] font-bold text-fit-green-dark uppercase tracking-[0.2em] mb-3 bg-fit-green/10 px-3 py-1.5 rounded-full">
              Sobre Nosotros
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[0.95] text-fit-black mb-5">
              Fusionamos el sabor
              <br />
              con el <span className="text-fit-green-dark">bienestar</span>
            </h2>

            <p className="text-gray-500 leading-relaxed mb-4 text-[15px]">
              En <span className="font-bold text-fit-black">Fit Essence Catering</span> creamos
              planes alimenticios personalizados para quienes buscan equilibrio, energ&iacute;a y
              un estilo de vida activo sin sacrificar el gusto.
            </p>

            <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
              Somos una nueva tendencia de catering a nivel nacional, enfocados en
              eventos dentro del entorno de gimnasios y centros de entrenamiento.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Inauguraciones",
                "Competencias",
                "Masterclass",
                "Aniversarios",
                "Eventos Corporativos",
                "Jornadas de Bienestar",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-fit-green rounded-full flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
