import React from 'react';
import { type BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCardComponent: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-6 space-y-3 transition-all duration-300 hover:shadow-lg dark:hover:border-primary-500 hover:-translate-y-1 bg-white dark:bg-neutral-800/50 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100">{post.title}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{post.date}</p>
      <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed flex-grow">{post.excerpt}</p>
    </article>
  );
};

export const BlogPostCard = React.memo(BlogPostCardComponent);
