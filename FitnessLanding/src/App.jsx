import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import About from './components/sections/About';
import ProductMenu from './components/sections/ProductMenu';
import Services from './components/sections/Services';
import Gallery from './components/sections/Gallery';
import Pricing from './components/sections/Pricing';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-fit-black font-sans selection:bg-fit-green selection:text-black overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <ProductMenu />
      <Services />
      <Gallery />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --fit-green: #A3E635;
          --fit-black: #111111;
        }

        body {
          font-family: 'Inter', system-ui, sans-serif;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Bricolage Grotesque', sans-serif;
        }

        /* Animations */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 45s linear infinite;
        }

        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes fade-in-up {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes scale-in {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in {
          animation: scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #F9FAFB;
        }
        ::-webkit-scrollbar-thumb {
          background: #D1D5DB;
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: var(--fit-green);
        }

        /* Smooth image loading */
        img {
          transition: opacity 0.3s ease;
        }
      `}} />
    </div>
  );
}

export default App;
