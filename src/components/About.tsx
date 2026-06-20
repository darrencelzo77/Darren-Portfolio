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
    name: 'Backend Development',
    icon: <Code size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: [
      'PHP / Laravel',
      'NestJS',
      'Python / FastAPI',
      'Strapi V5',
      'Payload CMS'
    ]
  },
  {
    name: 'Frontend Development',
    icon: <Code size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: [
      'HTML / CSS / Bootstrap',
      'React JS / Tailwind',
      'JavaScript / AJAX',
      'TypeScript',
      'Redux'
    ]
  },
  {
    name: 'Databases & Database Tools',
    icon: <Database size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: [
      'DBeaver',
      'MariaDB',
      'MySQL',
      'PostgreSQL',
      'SQLYog'
    ]
  },
  {
    name: 'Development Tools & DevOps',
    icon: <Cloud size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: [
      'Docker',
      'Git',
      'Hostinger',
      'Linux OS',
      'XAMPP',
      'CI/CD'
    ]
  },
  {
    name: 'Security & Reliability',
    icon: <ShieldCheck size={18} className="text-[#4a4e69] dark:text-[#f2e9e4]" />,
    skills: [
      'Authentication & access control',
      'Input validation',
      'Failure recovery patterns',
      'Performance optimization',
      'Monitoring mindset'
    ]
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
  const preventImageActions = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mb-4">About Me</h2>
          <p className="section-subtitle">
            I build systems that stay stable under pressure. My approach combines product thinking with engineering discipline,
            from clean API contracts to deploy-ready infrastructure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="relative w-full max-w-xs mx-auto aspect-square select-none"
            onContextMenu={preventImageActions}
            onDragStart={preventImageActions}
          >
            <div className="absolute -inset-4 bg-[#4a4e69]/25 rounded-2xl -z-10 blur-sm"></div>
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <img
                src="/profile.jpg"
                alt="Darren Acuña profile"
                className="w-full h-full object-cover rounded-xl shadow-lg"
                draggable={false}
                onContextMenu={preventImageActions}
                onDragStart={preventImageActions}
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-slate-50">
              Fullstack delivery with backend-first architecture
            </h3>
            <p className="mb-6">
              I design and build applications end to end, but my strongest edge is backend and infrastructure.
              I enjoy turning requirements into robust service layers, normalized data models, and deployment workflows teams can trust.
            </p>
            <p className="mb-6">
              I work with practical engineering priorities: fast query execution, secure integrations, maintainable codebases,
              and smooth CI/CD so releases are predictable.
            </p>

            <div className="flex items-center text-slate-800 dark:text-slate-100 mb-6">
              <Code className="text-yellow-500 mr-2" size={20} />
              <p className="italic">
                "I aim to ship products where uptime, performance, and developer velocity all improve together."
              </p>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
                <span className="text-slate-800 dark:text-slate-100">API and service design for scalable business logic</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
                <span className="text-slate-800 dark:text-slate-100">Database architecture and query optimization</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle size={16} className="text-[#4a4e69] dark:text-[#f2e9e4]" />
                <span className="text-slate-800 dark:text-slate-100">Infrastructure-conscious delivery with Docker and Linux</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-900 dark:text-slate-50">Technical Toolkit</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card p-8"
              >
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-slate-50">
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
