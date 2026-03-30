import React from 'react';
import { MARQUEE_ITEMS } from '../../data/mockData';

const Marquee = () => {
  return (
    <section className="relative py-6 border-y border-gray-100 bg-white overflow-hidden">
      {/* Track 1 */}
      <div className="overflow-hidden whitespace-nowrap mb-3">
        <div className="flex animate-marquee gap-6">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span
              key={idx}
              className="font-display text-2xl sm:text-2xl font-extrabold uppercase tracking-tight text-gray-100 flex items-center gap-6 select-none"
            >
              {item}
              <span className="text-fit-green text-sm">&#9670;</span>
            </span>
          ))}
        </div>
      </div>
      {/* Track 2 - reverse direction, darker text */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-6" style={{ display: 'inline-flex', animation: 'marquee-reverse 40s linear infinite' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span
              key={idx}
              className="font-display text-1xl sm:text-2xl font-extrabold uppercase tracking-tight text-fit-black flex items-center gap-6 select-none"
            >
              {item}
              <span className="text-fit-green text-sm">&#9670;</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
