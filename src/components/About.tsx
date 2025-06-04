import React from 'react';
import { Code } from 'lucide-react';
import { CheckCircle } from 'lucide-react';


interface SkillCategory {
  name: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Backend Development',
    skills: [
      'PHP / Laravel',
      'NestJS',
      'Python / FastAPI',
      'Strapi V5'
    ]
  },
  {
    name: 'Frontend Development',
    skills: [
      'HTML / CSS / Bootstrap',
      'React JS / Tailwind',
      'JavaScript / AJAX',
      'TypeScript',
      'Redux'
    ]
  },
  {
    name: 'Mobile Development',
    skills: [
      'Flutter',
      'React Native'
    ]
  },
  {
    name: 'Databases & Database Tools',
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
    skills: [
      'Docker',
      'Git',
      'Hostinger',
      'Linux OS',
      'XAMPP'
    ]
  },
  // {
  //   name: 'Testing',
  //   skills: [
  //     'Jest'
  //   ]
  // }
];




const About: React.FC = () => {
  return (
    <section id="about" className="section bg-[#fafafa] dark:bg-[#4a4e69]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-[#4a4e69] dark:text-[#f2e9e4]">About Me</h2>
          <p className="text-xl text-[#4a4e69]/70 dark:text-[#f2e9e4]/70">
            A dedicated developer with a strong focus on backend architecture and a passion for building scalable, efficient, and reliable digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#4a4e69]/20 rounded-2xl -z-10 blur-sm"></div>
              <div className="relative h-full overflow-hidden rounded-xl">
                <img
                  src="/profile.jpg"
                  alt="Your professional headshot"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#4a4e69] dark:text-[#f2e9e4]">
              Building impactful digital solutions since 2024
            </h3>
            <p className="mb-6 text-[#4a4e69]/80 dark:text-[#f2e9e4]/80">
              I'm a full-stack developer with hands-on experience building modern, scalable web applications that prioritize performance, security, and maintainability.
            </p>
            <p className="mb-6 text-[#4a4e69]/80 dark:text-[#f2e9e4]/80">
              Though early in my professional journey, I've already contributed to impactful projects, consistently bringing a strong backend mindset to every solution.
            </p>

            <div className="flex items-center text-[#4a4e69]/90 dark:text-[#f2e9e4]/90 mb-6">
              <Code className="text-yellow-500 mr-2" size={20} />
              <p className="italic">
                "I strive to build digital solutions where structure, performance, and user experience work in harmony."
              </p>
            </div>
          </div>



        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-[#4a4e69] dark:text-[#f2e9e4]">My Skills</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card p-8 shadow-md hover:shadow-xl transition-shadow duration-300 bg-[#ffffff] dark:bg-[#3e3b50] text-[#4a4e69] dark:text-[#f2e9e4]"
              >
                <h4 className="text-xl font-bold mb-4">{category.name}</h4>
                <ul className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="text-[#4a4e69] dark:text-[#f2e9e4]" size={16} />
                      <span>{skill}</span>
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
