import React from 'react';
import { type Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCardComponent: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 space-y-3 transition-all duration-300 hover:shadow-lg dark:hover:border-primary-500 hover:-translate-y-1 bg-white dark:bg-neutral-800/50 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
        {project.link ? (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{project.title}</a>
        ) : (
            project.title
        )}
      </h3>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed flex-grow">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-neutral-100 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200 text-xs font-medium px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
};

export const ProjectCard = React.memo(ProjectCardComponent);