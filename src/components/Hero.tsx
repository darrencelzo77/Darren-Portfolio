import React from 'react';
// import { FileText } from 'lucide-react';
import {
  ArrowRight,
  CheckCircle,
  CloudCog,
  Database,
  GitBranch,
  Server,
  ShieldCheck,
  Terminal,
} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.88)_0%,rgba(244,247,251,0.72)_45%,rgba(201,173,167,0.24)_100%)] dark:bg-[linear-gradient(135deg,rgba(7,19,29,0.98)_0%,rgba(17,37,54,0.88)_52%,rgba(74,78,105,0.44)_100%)]"></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4a4e69]/40 to-transparent"></div>
        <div className="absolute left-[48%] top-20 h-[620px] w-[900px] -translate-x-1/2 rotate-[-8deg] border border-[#4a4e69]/10 bg-[linear-gradient(135deg,rgba(74,78,105,0.10),rgba(201,173,167,0.16),rgba(255,255,255,0.08))] opacity-80 [clip-path:polygon(10%_0,100%_16%,86%_100%,0_82%)] dark:border-white/5 dark:opacity-50"></div>
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,transparent_48%,rgba(74,78,105,0.08)_48%,rgba(74,78,105,0.08)_49%,transparent_49%,transparent_100%)] dark:bg-[linear-gradient(115deg,transparent_0%,transparent_48%,rgba(242,233,228,0.08)_48%,rgba(242,233,228,0.08)_49%,transparent_49%,transparent_100%)]"></div>
      </div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3">
            <span className="chip animate-rise">Fullstack Developer | Backend & Infrastructure</span>
            <h1 className="mt-5 mb-5 max-w-4xl text-slate-900 dark:text-slate-50 animate-rise delay-100">
              Building reliable web systems.
            </h1>
            <p className="max-w-2xl text-lg md:text-xl mb-8 animate-rise delay-200">
              I'm Darren Acuña, a fullstack developer focused on backend architecture,
              production APIs, and clean delivery workflows.
            </p>

            <ul className="grid sm:grid-cols-3 gap-3 mb-8 animate-rise delay-300">
              <li className="metric flex items-center gap-2">
                <CheckCircle size={16} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">Secure APIs</span>
              </li>
              <li className="metric flex items-center gap-2">
                <CheckCircle size={16} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">Clean data models</span>
              </li>
              <li className="metric flex items-center gap-2">
                <CheckCircle size={16} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-50">Reliable releases</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 mb-10 animate-rise delay-300">
              <span className="chip">API Design</span>
              <span className="chip">Database Modeling</span>
              <span className="chip">CI/CD</span>
              <span className="chip">Docker</span>
            </div>

            <div className="flex flex-wrap gap-4 animate-rise delay-400">
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Let's Connect
              </a>
              {/* <a href="/DarrenCelzoAcuna.pdf" className="btn btn-secondary" download>
                <FileText size={18} className="mr-2" />
                Download CV
              </a> */}
            </div>
          </div>

          <div className="lg:col-span-2 animate-rise delay-300">
            <div className="hero-console overflow-hidden rounded-2xl">
              <div className="flex items-center justify-between border-b border-slate-900/10 px-5 py-4 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#c9ada7]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#4a4e69]"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Production Ready
                </span>
              </div>

              <div className="p-5 md:p-6">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4a4e69] text-[#f2e9e4] shadow-lg shadow-[#4a4e69]/20">
                    <Terminal size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Current stack</p>
                    <p className="font-semibold text-slate-900 dark:text-slate-50">API-first product delivery</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="hero-flow-row">
                    <Server className="text-[#4a4e69] dark:text-[#f2e9e4]" size={18} />
                    <div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Backend Services</p>
                      <p className="font-semibold text-slate-900 dark:text-slate-50">Laravel, NestJS, FastAPI</p>
                    </div>
                  </div>
                  <div className="hero-flow-row">
                    <Database className="text-[#4a4e69] dark:text-[#f2e9e4]" size={18} />
                    <div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Data Layer</p>
                      <p className="font-semibold text-slate-900 dark:text-slate-50">PostgreSQL, MySQL, MariaDB</p>
                    </div>
                  </div>
                  <div className="hero-flow-row">
                    <CloudCog className="text-[#4a4e69] dark:text-[#f2e9e4]" size={18} />
                    <div>
                      <p className="text-sm text-slate-700 dark:text-slate-300">Infrastructure</p>
                      <p className="font-semibold text-slate-900 dark:text-slate-50">Docker, Linux, CI/CD</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="hero-signal">
                    <ShieldCheck size={17} className="text-emerald-500" />
                    <span>Auth & API security</span>
                  </div>
                  <div className="hero-signal">
                    <GitBranch size={17} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
                    <span>Release pipelines</span>
                  </div>
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
