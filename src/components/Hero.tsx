import React from 'react';
// import { CloudCog, Database, FileText, Server } from 'lucide-react';
import { CloudCog, Database, Server } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-brand-fade blur-3xl ambient-blob"></div>
      <div className="absolute top-40 -right-12 h-64 w-64 rounded-full bg-accent-fade blur-3xl ambient-blob"></div>

      <div className="absolute inset-0 -z-10 opacity-70 dark:opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:28px_28px]"></div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <span className="chip animate-rise">Fullstack Developer • Backend & Infra Specialist</span>
            <h1 className="mt-5 mb-5 text-slate-900 dark:text-slate-50 animate-rise delay-100">
              I engineer reliable systems, not just pages.
            </h1>
            <p className="text-lg md:text-xl mb-8 animate-rise delay-200">
              I'm Darren Acuña, a fullstack developer focused on backend architecture, cloud deployment, and production-grade APIs.
              I care about performance, security, observability, and smooth delivery pipelines.
            </p>

            <div className="flex flex-wrap gap-3 mb-10 animate-rise delay-300">
              <span className="chip">API Design</span>
              <span className="chip">Database Modeling</span>
              <span className="chip">CI/CD</span>
              <span className="chip">Containerized Deployments</span>
            </div>

            <div className="flex flex-wrap gap-4 animate-rise delay-400">
              <a href="#projects" className="btn btn-primary">
                Explore Projects
              </a>
              {/* <a href="/DarrenCelzoAcuna.pdf" className="btn btn-secondary" download>
                <FileText size={18} className="mr-2" />
                Download CV
              </a> */}
            </div>
          </div>

          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 md:p-8 animate-rise delay-300">
            <p className="text-sm uppercase tracking-widest text-slate-700 dark:text-slate-300 mb-4">Engineering Focus</p>
            <div className="space-y-4">
              <div className="metric flex items-center gap-3">
                <Server className="text-brand" size={18} />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Backend Services</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">Node, Laravel, FastAPI, NestJS</p>
                </div>
              </div>
              <div className="metric flex items-center gap-3">
                <Database className="text-brand" size={18} />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Data Layer</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">PostgreSQL, MySQL, MariaDB</p>
                </div>
              </div>
              <div className="metric flex items-center gap-3">
                <CloudCog className="text-brand" size={18} />
                <div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">Infrastructure</p>
                  <p className="font-semibold text-slate-900 dark:text-slate-50">Docker, Linux, cloud-hosted pipelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
