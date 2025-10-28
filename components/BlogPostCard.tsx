import React from 'react';
import { type BlogPost } from '../types';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCardComponent: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <article className="border border-neutral-200 rounded-lg p-6 space-y-2 transition-all duration-300 hover:shadow-md hover:border-neutral-300">
      <h3 className="text-xl font-semibold text-neutral-800">
        {post.title}
      </h3>
      <p className="text-sm italic text-neutral-500">
        {post.date}
      </p>
      <p className="pt-2 text-neutral-700 leading-relaxed">
        {post.excerpt}
      </p>
    </article>
  );
};

export const BlogPostCard = React.memo(BlogPostCardComponent);