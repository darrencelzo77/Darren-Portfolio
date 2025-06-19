import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects, Project } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="mb-4 text-[#4a4e69] dark:text-[#f2e9e4]">Projects</h2>
          <p className="text-xl text-[#4a4e69]/70 dark:text-[#f2e9e4]/70">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between items-center">
            <div>
              <span className="text-xs font-medium text-[#f2e9e4] px-2 py-1 bg-[#4a4e69]/70 rounded-full">
                {project.category}
              </span>
            </div>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#4a4e69]/90 text-[#f2e9e4] rounded-full hover:bg-[#3e3b50] transition-colors"
                  aria-label="View GitHub repository"
                >
                  <Github size={16} color="white" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-[#4a4e69]/90 text-[#f2e9e4] rounded-full hover:bg-[#3e3b50] transition-colors"
                  aria-label="View live project"
                >
                  <ExternalLink size={16} color="white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#4a4e69] dark:text-[#f2e9e4]">{project.title}</h3>
        <p className="text-[#4a4e69]/70 dark:text-[#f2e9e4]/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium px-2 py-1 bg-[#f2e9e4] dark:bg-[#3e3b50] text-[#4a4e69] dark:text-[#f2e9e4] rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
