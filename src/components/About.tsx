import React from 'react';
import { CheckCircle, Cloud, Code, Database, ShieldCheck } from 'lucide-react';


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




const About: React.FC = () => {
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
          <div className="relative w-full max-w-sm mx-auto aspect-square">
            <div className="absolute -inset-4 bg-[#4a4e69]/25 rounded-2xl -z-10 blur-sm"></div>
            <div className="relative h-full w-full overflow-hidden rounded-xl">
              <img
                src="/profile.jpg"
                alt="Darren Acuña profile"
                className="w-full h-full object-cover rounded-xl shadow-lg"
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
                      <CheckCircle className="text-[#4a4e69] dark:text-[#f2e9e4]" size={16} />
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
