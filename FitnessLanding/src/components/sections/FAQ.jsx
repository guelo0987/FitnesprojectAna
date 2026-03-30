import React, { useState } from 'react';
import { FAQS } from '../../data/mockData';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const FAQItem = ({ question, answer, index, isOpen, onToggle }) => (
  <div className={`border-b border-gray-100 transition-all duration-300 ${isOpen ? 'bg-fit-green/5' : ''}`}>
    <button onClick={onToggle} className="w-full py-6 px-2 flex items-center gap-5 text-left group">
      <span className={`text-xs font-bold tabular-nums transition-colors ${isOpen ? 'text-fit-green-dark' : 'text-gray-300'}`}>
        0{index + 1}
      </span>
      <h5 className={`flex-1 text-base sm:text-lg font-bold tracking-tight transition-colors ${
        isOpen ? 'text-fit-green-dark' : 'text-fit-black group-hover:text-fit-green-dark'
      }`}>{question}</h5>
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
        isOpen ? 'bg-fit-green text-black rotate-45' : 'bg-gray-100 text-gray-500'
      }`}>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v12m6-6H6" />
        </svg>
      </div>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
      isOpen ? 'max-h-60 opacity-100 pb-6' : 'max-h-0 opacity-0'
    }`}>
      <p className="pl-10 pr-14 text-gray-500 leading-relaxed text-sm">{answer}</p>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-bold text-fit-green-dark uppercase tracking-[0.2em] mb-3 bg-fit-green/10 px-3 py-1.5 rounded-full">
            Preguntas Frecuentes
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight leading-[0.95] text-fit-black">
            Resolvemos tus <span className="text-gray-300">dudas</span>
          </h2>
        </div>
        <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
          {FAQS.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.q}
              answer={faq.a}
              index={idx}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
