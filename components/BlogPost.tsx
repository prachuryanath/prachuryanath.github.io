import React from 'react';
import { type BlogPost as BlogPostType } from '../types';
import { ViewMoreLink } from './ViewMoreLink';

// A simple component to render Markdown content (paragraphs, bold, italic) as HTML.
// NOTE: This is a basic implementation and doesn't cover all Markdown features.
// It assumes the content source from constants.ts is trusted.
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const createMarkup = () => {
    const html = content
      // Process bold first: **text**
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Process italic: *text*
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Split into paragraphs based on double newlines
      .split('\n\n')
      .map(paragraph => {
        // In Markdown, single newlines within a paragraph are treated as spaces.
        // Here we convert them to <br> for intentional line breaks, which is a common deviation.
        const withLineBreaks = paragraph.replace(/\n/g, '<br />');
        return `<p>${withLineBreaks}</p>`;
      })
      .join('');
    
    return { __html: html };
  };

  return <div dangerouslySetInnerHTML={createMarkup()} />;
};


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
        
        <MarkdownRenderer content={post.content} />
      </article>
      <div className="text-center mt-16">
        <ViewMoreLink href="/blog" isBackLink navigate={navigate}>
          Back to Blog
        </ViewMoreLink>
      </div>
    </div>
  );
};