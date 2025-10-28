import React from 'react';
import { type Publication } from '../types';

interface PublicationCardProps {
  publication: Publication;
}

const PublicationCardComponent: React.FC<PublicationCardProps> = ({ publication }) => {
  return (
    <article className="space-y-2">
      <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">
        {publication.link ? (
          <a 
            href={publication.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:underline hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            {publication.title}
          </a>
        ) : (
          publication.title
        )}
      </h3>
      <p className="text-sm text-neutral-600 dark:text-neutral-300">
        {publication.authors.join(', ')}
      </p>
      <p className="text-sm italic text-neutral-500 dark:text-neutral-400">
        {publication.venue}, {publication.year}
      </p>
      <p className="pt-2 text-neutral-700 dark:text-neutral-300 leading-relaxed">
        {publication.description}
      </p>
    </article>
  );
};

export const PublicationCard = React.memo(PublicationCardComponent);