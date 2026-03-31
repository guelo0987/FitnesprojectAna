import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const BOWLS = [
  { img: '/menuimagenes/bbqproteinsalad.webp', name: 'BBQ Protein Salad', tag: 'Alto en Proteína', desc: 'Pollo BBQ, frijoles negros, maíz, aguacate y cilantro' },
  { img: '/menuimagenes/mexicanquinoa.webp', name: 'Mexican Quinoa Bowl', tag: 'Favorito', desc: 'Quinoa, pollo a la plancha, aguacate, maíz y pico de gallo' },
  { img: '/menuimagenes/ensaladacesar.webp', name: 'Ensalada César', tag: 'Clásico', desc: 'Pollo grillado, crutones, parmesano y aderezo césar' },
  { img: '/menuimagenes/quinoabowl.webp', name: 'Quinoa Bowl Vegan', tag: 'Vegano', desc: 'Garbanzos, aguacate, pimiento, camote y quinoa' },
];

const DRINKS = [
  { img: '/menuimagenes/bebidasrefrescante.webp', name: 'Ice Tea Jamaica y Menta', price: 'RD$195' },
  { img: '/menuimagenes/teaice.webp', name: 'Ice Tea Menta y Limón', price: 'RD$195' },
];

const ProductMenu = () => {
  const [ref, isVisible] = useScrollReveal();
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section id="productos" className="py-20 lg:py-28 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[11px] font-bold text-fit-green-dark uppercase tracking-[0.2em] mb-3 bg-fit-green/10 px-3 py-1.5 rounded-full">
            Nuestros Productos
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[0.95] text-fit-black mb-3">
            El men&uacute; que <span className="text-fit-green-dark">enamora</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Platos dise&ntilde;ados para potenciar tu rendimiento con sabor gourmet
          </p>
        </div>

        {/* Bowls - Featured Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
          {BOWLS.map((bowl, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(null)}
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden bg-fit-light">
                <img
                  src={bowl.img}
                  alt={bowl.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Tag */}
              <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 z-10">
                <span className="bg-fit-green text-black text-[9px] sm:text-[10px] font-bold px-2 sm:px-2.5 py-1 rounded-full uppercase tracking-wide shadow-sm">
                  {bowl.tag}
                </span>
              </div>

              {/* Bottom gradient - always visible */}
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Name + desc */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10">
                <h3 className="font-display text-sm sm:text-base font-extrabold text-white leading-tight mb-0.5">
                  {bowl.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-white/70 leading-snug line-clamp-2 hidden sm:block">
                  {bowl.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row: Drinks + CTA */}
        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {/* Drinks */}
          {DRINKS.map((drink, idx) => (
            <div
              key={idx}
              className="col-span-6 sm:col-span-4 lg:col-span-3 group relative rounded-2xl sm:rounded-3xl overflow-hidden"
            >
              <div className="aspect-[3/4] overflow-hidden bg-fit-light">
                <img
                  src={drink.img}
                  alt={drink.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="col-span-12 sm:col-span-4 lg:col-span-6 bg-fit-black rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[200px]">
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-2">Desde</p>
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-fit-green font-display text-4xl sm:text-5xl font-extrabold">RD$195</span>
              </div>
              <p className="text-gray-600 text-xs mb-6">bebidas / RD$450 platos del d&iacute;a</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs hidden sm:block">
                Ingredientes frescos, porciones generosas, sabor que no sacrifica tus metas.
              </p>
            </div>
            <a
              href="https://www.instagram.com/fitessence_catering"
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn inline-flex items-center gap-2 bg-fit-green text-black px-5 py-3 rounded-xl font-bold text-sm hover:bg-white transition-all w-fit mt-4 sm:mt-6"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Pedir por Instagram
              <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductMenu;
