import React from 'react';
import { BlogPostCard } from './BlogPostCard';
import { ViewMoreLink } from './ViewMoreLink';
import { BLOG_POSTS } from '../constants';

interface BlogProps {
    navigate: (path: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ navigate }) => {
  return (
    <div className="py-12">
      <h1 className="text-4xl font-semibold tracking-tight text-center mb-12 text-neutral-900 dark:text-white font-serif">
        Blog
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_POSTS.map((post) => (
            <a
                key={post.slug}
                href={`#/blog/${post.slug}`}
                onClick={(e) => {
                    e.preventDefault();
                    navigate(`/blog/${post.slug}`);
                }}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg"
            >
                <BlogPostCard post={post} />
            </a>
        ))}
      </div>
      <div className="text-center mt-16">
        <ViewMoreLink href="/" isBackLink navigate={navigate}>
            Back to Home
        </ViewMoreLink>
      </div>
    </div>
  );
};