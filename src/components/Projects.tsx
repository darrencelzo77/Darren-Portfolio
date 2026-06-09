import React from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';
import { projects, Project } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title mb-4">Selected Builds</h2>
          <p className="section-subtitle">
            Systems and products where I contributed heavily on backend architecture, integrations, and infrastructure-aware delivery.
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
    <div className="card overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full aspect-video object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full flex justify-between items-center">
            <div>
              <span className="text-xs font-medium text-white px-2 py-1 bg-slate-900/60 rounded-full uppercase tracking-wide">
                {project.category}
              </span>
            </div>
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-900/85 text-white rounded-full hover:bg-slate-800 transition-colors"
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
                  className="p-2 bg-slate-900/85 text-white rounded-full hover:bg-slate-800 transition-colors"
                  aria-label="View live project"
                >
                  <ExternalLink size={16} color="white" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-slate-50">{project.title}</h3>
        <p className="mb-4">{project.description}</p>

        <div className="mb-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800/40 p-3">
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2 mb-1">
            <Layers size={15} className="text-brand" />
            {project.role}
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300">{project.impact}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-chip"
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
