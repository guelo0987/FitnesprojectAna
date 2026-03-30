import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/FIT_LOGO.jpg"
                alt="Fit Essence Logo"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <span className="text-lg font-extrabold text-fit-black tracking-tight block leading-none">
                  Fit Essence
                </span>
                <span className="text-xs font-medium text-gray-400 tracking-wider uppercase">
                  Catering
                </span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-sm mb-6">
              Fusionamos el sabor con el bienestar. Catering saludable de alto rendimiento
              para gimnasios y centros de entrenamiento a nivel nacional.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/fitessence_catering"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-fit-light rounded-xl flex items-center justify-center text-gray-500 hover:bg-fit-green hover:text-black transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1ACgyK5pmP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-fit-light rounded-xl flex items-center justify-center text-gray-500 hover:bg-fit-green hover:text-black transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-6">
              Navegaci&oacute;n
            </h4>
            <nav className="flex flex-col gap-3">
              <a href="#inicio" className="text-sm font-medium text-gray-600 hover:text-fit-green-dark transition-colors">Inicio</a>
              <a href="#nosotros" className="text-sm font-medium text-gray-600 hover:text-fit-green-dark transition-colors">Nosotros</a>
              <a href="#servicios" className="text-sm font-medium text-gray-600 hover:text-fit-green-dark transition-colors">Servicios</a>
              <a href="#menu" className="text-sm font-medium text-gray-600 hover:text-fit-green-dark transition-colors">Men&uacute;</a>
              <a href="#planes" className="text-sm font-medium text-gray-600 hover:text-fit-green-dark transition-colors">Planes</a>
              <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-fit-green-dark transition-colors">FAQ</a>
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mb-6">
              Contacto
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-fit-green-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-gray-600">Santo Domingo, Rep&uacute;blica Dominicana</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-fit-green-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hola@fitessence.com" className="text-sm text-gray-600 hover:text-fit-green-dark transition-colors">
                  hola@fitessence.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-fit-green-dark mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm text-gray-600">Lunes a S&aacute;bado: 7:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400">
            &copy; 2026 Fit Essence Catering. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-400">
            Santo Domingo, Rep&uacute;blica Dominicana
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
