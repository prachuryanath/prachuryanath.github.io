import React from 'react';

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  description: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
}

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
}

export interface Photo {
    id: number;
    src: string;
    alt: string;
    caption: string;
}

export interface Experience {
    company: string;
    role: string;
    duration: string;
    description: string[];
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface Education {
    institution: string;
    degree: string;
    duration: string;
}

export interface SkillCategory {
    name: string;
    skills: string[];
}