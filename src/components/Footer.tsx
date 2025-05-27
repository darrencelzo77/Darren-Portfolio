import { ArrowUp } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-[#f2e9e4] dark:bg-[#3e3b50]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-[#4a4e69] dark:text-[#f2e9e4]">
              Portfolio
            </a>
            <p className="text-[#4a4e69]/70 dark:text-[#f2e9e4]/70 mt-2">
              Creating exceptional digital experiences.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <a 
              href="#home"
              className="mb-4 p-3 bg-[#4a4e69] text-[#f2e9e4] rounded-full shadow-lg hover:bg-[#3e3b50] transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>
            <p className="text-[#4a4e69]/70 dark:text-[#f2e9e4]/70">
              &copy; {currentYear} Darren Celzo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
