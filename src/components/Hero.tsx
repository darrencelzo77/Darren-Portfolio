import React from 'react';
import { FileText } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 -z-10 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f2e9e4] to-[#e6dcd7] dark:from-[#3e3b50] dark:to-[#4a4e69]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(74,78,105,0.2),transparent),radial-gradient(circle_at_70%_60%,rgba(242,233,228,0.2),transparent)]"></div>
      </div>

      <div className="container-custom">
        <div className="max-w-3xl">
          <p className="text-[#4a4e69] font-medium mb-2 animate-fade-in-up">
            Hello, I'm
          </p>
          <h1 className="mb-4 animate-fade-in-up delay-100 text-[#4a4e69] dark:text-[#f2e9e4]">
            <span className="inline-block">Darren Celzo S. Acuña</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#4a4e69]/80 dark:text-[#f2e9e4]/80 font-normal mb-8 animate-fade-in-up delay-200">
            Backend Developer
          </h2>
          <p className="text-lg text-[#4a4e69]/70 dark:text-[#f2e9e4]/70 mb-10 animate-fade-in-up delay-300">
            I build efficient backend systems and develop scalable solutions that drive real-world impact and power seamless digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-400">
            <a href="#projects" className="btn btn-primary">
              View My Work
            </a>
            <a href="/DarrenCelzoAcuna.pdf" className="btn border-t-cyan-50" download>
              <FileText size={18} className="mr-2" />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
