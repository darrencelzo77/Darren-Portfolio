import { ArrowUp } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-slate-200/80 dark:border-slate-700/70 bg-white/40 dark:bg-slate-900/30 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Darren<span className="text-brand"></span>
            </a>
            <p className="text-slate-700 dark:text-slate-300 mt-2">
              Building resilient backend systems and dependable digital platforms.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#home"
              className="mb-4 p-3 bg-brand text-white rounded-full shadow-lg hover:bg-brand-strong transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
            <p className="text-slate-700 dark:text-slate-300">
              &copy; {currentYear} Darren Celzo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
