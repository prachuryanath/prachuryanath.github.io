import React from 'react';
import { type BlogPost as BlogPostType } from '../types';
import { ViewMoreLink } from './ViewMoreLink';

interface BlogPostProps {
  post: BlogPostType;
  navigate: (path: string) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, navigate }) => {
  return (
    <article className="py-8 sm:py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 mb-3">
            {post.title}
        </h1>
        <p className="text-md italic text-neutral-500 dark:text-neutral-400">
            {post.date}
        </p>
      </header>
      
      <div className="prose prose-neutral dark:prose-invert max-w-none text-lg leading-relaxed space-y-6">
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="text-center mt-16">
        <ViewMoreLink href="/blog" isBackLink navigate={navigate}>
            Back to All Posts
        </ViewMoreLink>
      </div>
    </article>
  );
};