import React from 'react';
import { BlogPostCard } from './BlogPostCard';
import { ViewMoreLink } from './ViewMoreLink';
import { BLOG_POSTS } from '../constants';

interface BlogProps {
    navigate: (path: string) => void;
}

export const Blog: React.FC<BlogProps> = ({ navigate }) => {
  return (
    <div>
        <h1 className="text-4xl font-bold tracking-tight text-center mb-12">
            From the Desk
        </h1>
        <div className="space-y-10">
            {BLOG_POSTS.map((post) => (
                <a 
                  key={post.slug}
                  href={`#/blog/${post.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/blog/${post.slug}`);
                  }}
                  className="block"
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
