import React from 'react';

const Hero = () => {
  return (
    <header id="inicio" className="relative bg-white pt-24 pb-12 sm:pb-16 lg:pt-28 lg:pb-20 overflow-hidden">
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-fit-green/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-fit-green/10 px-3 py-1.5 rounded-full mb-5">
              <div className="w-1.5 h-1.5 bg-fit-green rounded-full" />
              <span className="text-[10px] sm:text-[11px] font-bold text-fit-green-dark tracking-wide uppercase">
                Catering Fitness Premium
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[0.92] text-fit-black mb-4">
              Alimenta
              <br />
              <span className="text-fit-green-dark">Tu Rendimiento</span>
            </h1>

            <p className="text-[15px] sm:text-base text-gray-500 leading-relaxed max-w-md mb-7">
              Catering saludable de alto rendimiento para
              <span className="text-fit-black font-semibold"> gimnasios y centros de entrenamiento</span> a nivel nacional.
            </p>

            <div className="flex gap-3 mb-8">
              <a
                href="https://www.instagram.com/fitessence_catering"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-fit-black text-white px-5 sm:px-7 py-3 rounded-2xl font-bold text-sm hover:bg-fit-green hover:text-black transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-fit-green/20"
              >
                Cotizar
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#productos" className="inline-flex items-center justify-center px-5 sm:px-7 py-3 rounded-2xl font-bold text-sm border-2 border-gray-200 hover:border-fit-green transition-all">
                Ver Men&uacute;
              </a>
            </div>

            <div className="flex gap-6 sm:gap-8">
              {[
                { n: "500+", l: "Eventos" },
                { n: "50+", l: "Gimnasios" },
                { n: "98%", l: "Satisfacci\u00f3n" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-xl sm:text-2xl font-extrabold text-fit-black font-display">{s.n}</div>
                  <div className="text-[10px] text-gray-400 font-medium mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="order-1 lg:order-2">
            <div className="relative max-w-[280px] sm:max-w-sm mx-auto lg:max-w-md">
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-full h-full bg-fit-green/15 rounded-3xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/15">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src="/hero-main.webp" alt="Fit Essence - Bowl saludable premium" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <div className="bg-white/95 backdrop-blur-md rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between shadow-lg">
                    <div>
                      <p className="text-[9px] sm:text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Plan base</p>
                      <p className="text-lg sm:text-xl font-extrabold text-fit-black font-display">RD$450</p>
                    </div>
                    <div className="bg-fit-green w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
