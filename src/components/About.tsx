import React from 'react';
import { CheckCircle, Cloud, Code, Database, GitBranch, ShieldCheck } from 'lucide-react';
import {
  SiBootstrap,
  SiCss,
  SiDbeaver,
  SiDocker,
  SiFastapi,
  SiGit,
  SiHostinger,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiLinux,
  SiMariadb,
  SiMysql,
  SiNestjs,
  SiPayloadcms,
  SiPhp,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRedux,
  SiStrapi,
  SiTailwindcss,
  SiTypescript,
  SiXampp
} from 'react-icons/si';

interface SkillCategory {
  name: string;
  skills: string[];
  icon: React.ReactNode;
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Backend',
    icon: <Code size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: ['PHP / Laravel', 'NestJS', 'Python / FastAPI', 'Strapi V5', 'Payload CMS']
  },
  {
    name: 'Frontend',
    icon: <Code size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: ['HTML / CSS / Bootstrap', 'React JS / Tailwind', 'JavaScript / AJAX', 'TypeScript', 'Redux']
  },
  {
    name: 'Databases',
    icon: <Database size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: ['DBeaver', 'MariaDB', 'MySQL', 'PostgreSQL', 'SQLYog']
  },
  {
    name: 'Tools & DevOps',
    icon: <Cloud size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: ['Docker', 'Git', 'Hostinger', 'Linux OS', 'XAMPP', 'CI/CD']
  },
  {
    name: 'Reliability',
    icon: <ShieldCheck size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: ['Auth & access control', 'Input validation', 'Recovery patterns', 'Performance optimization', 'Monitoring']
  }
];

const logoClassName = 'shrink-0 text-xl text-[#4a4e69] dark:text-[#f2e9e4]';

const skillLogos: Record<string, React.ReactNode> = {
  'PHP / Laravel': <><SiPhp /><SiLaravel /></>,
  NestJS: <SiNestjs />,
  'Python / FastAPI': <><SiPython /><SiFastapi /></>,
  'Strapi V5': <SiStrapi />,
  'Payload CMS': <SiPayloadcms />,
  'HTML / CSS / Bootstrap': <><SiHtml5 /><SiCss /><SiBootstrap /></>,
  'React JS / Tailwind': <><SiReact /><SiTailwindcss /></>,
  'JavaScript / AJAX': <SiJavascript />,
  TypeScript: <SiTypescript />,
  Redux: <SiRedux />,
  DBeaver: <SiDbeaver />,
  MariaDB: <SiMariadb />,
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
  SQLYog: <Database size={18} />,
  Docker: <SiDocker />,
  Git: <SiGit />,
  Hostinger: <SiHostinger />,
  'Linux OS': <SiLinux />,
  XAMPP: <SiXampp />,
  'CI/CD': <GitBranch size={18} />
};

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="section-title mb-4">About</h2>
          <p className="section-subtitle">
            Backend-focused fullstack developer building practical, maintainable systems.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-slate-50">
            Backend-first delivery
          </h3>
          <p className="mb-6">
            I turn product requirements into secure APIs, clear data models, and deployment-ready applications.
          </p>

          <div className="flex items-center text-slate-800 dark:text-slate-100 mb-6">
            <Code className="text-yellow-500 mr-2" size={20} />
            <p className="italic">
              "Clean systems, predictable releases, and code teams can maintain."
            </p>
          </div>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <CheckCircle size={16} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
              <span className="text-slate-800 dark:text-slate-100">API and service design</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={16} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
              <span className="text-slate-800 dark:text-slate-100">Database design and optimization</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle size={16} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
              <span className="text-slate-800 dark:text-slate-100">Docker, Linux, and CI/CD delivery</span>
            </li>
          </ul>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-900 dark:text-slate-50">Technical Toolkit</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div key={index} className="card p-6">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-50">
                  {category.icon}
                  {category.name}
                </h4>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className={`${logoClassName} flex min-w-5 items-center gap-1`} aria-hidden="true">
                        {skillLogos[skill] ?? <CheckCircle size={16} />}
                      </span>
                      <span className="text-slate-700 dark:text-slate-200">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
