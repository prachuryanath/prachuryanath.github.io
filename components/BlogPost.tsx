import React from 'react';
import { type BlogPost as BlogPostType } from '../types';
import { ViewMoreLink } from './ViewMoreLink';

interface BlogPostProps {
  post: BlogPostType;
  navigate: (path: string) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, navigate }) => {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <article className="prose prose-lg dark:prose-invert">
        <h1>{post.title}</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{post.date}</p>
        
        {post.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
      <div className="text-center mt-16">
        <ViewMoreLink href="/blog" isBackLink navigate={navigate}>
          Back to Blog
        </ViewMoreLink>
      </div>
    </div>
  );
};
