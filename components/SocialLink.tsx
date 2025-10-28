import React from 'react';
import { type SocialLink as SocialLinkType } from '../types';

const SocialLinkComponent: React.FC<SocialLinkType> = ({ name, url, icon: Icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
    >
      <Icon className="w-7 h-7" />
    </a>
  );
};

export const SocialLink = React.memo(SocialLinkComponent);