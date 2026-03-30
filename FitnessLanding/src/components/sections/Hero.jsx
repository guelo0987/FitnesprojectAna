import React from 'react';

const Hero = () => {
  return (
    <header id="inicio" className="relative bg-white pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      {/* Subtle bg accents */}
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-fit-green/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-fit-green/10 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-fit-green rounded-full" />
              <span className="text-[11px] font-bold text-fit-green-dark tracking-wide uppercase">
                Catering Fitness Premium
              </span>
            </div>

            <h1 className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[0.92] text-fit-black mb-5">
              Alimenta
              <br />
              <span className="text-fit-green-dark">Tu Rendimiento</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-md mb-8">
              Catering saludable de alto rendimiento para
              <span className="text-fit-black font-semibold"> gimnasios y centros de entrenamiento</span> a nivel nacional.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="https://www.instagram.com/fitessence_catering"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-fit-black text-white px-7 py-3.5 rounded-2xl font-bold text-sm hover:bg-fit-green hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-fit-green/20"
              >
                Cotizar Evento
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#servicios" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-sm border-2 border-gray-200 hover:border-fit-green transition-all">
                Ver Servicios
              </a>
            </div>

            <div className="flex gap-8">
              {[
                { n: "500+", l: "Eventos" },
                { n: "50+", l: "Gimnasios" },
                { n: "98%", l: "Satisfacci\u00f3n" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-extrabold text-fit-black font-display">{s.n}</div>
                  <div className="text-[11px] text-gray-400 font-medium mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image - constrained height */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-sm mx-auto lg:max-w-md">
              <div className="absolute -top-3 -right-3 w-full h-full bg-fit-green/15 rounded-[2rem]" />
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-black/15">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src="/hero-main.png"
                    alt="Fit Essence - Bowl saludable premium"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl px-4 py-3 flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Plan base diario</p>
                      <p className="text-xl font-extrabold text-fit-black font-display">RD$450</p>
                    </div>
                    <div className="bg-fit-green w-10 h-10 rounded-xl flex items-center justify-center">
                      <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Hero;
