import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { BlogPost } from './components/BlogPost';
import { Photography } from './components/Photography';
import { BLOG_POSTS, PROFILE } from './constants';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigate = (path: string) => {
    window.location.hash = path;
  };

  const renderContent = () => {
    if (currentPath === '/blog') {
      return <Blog navigate={navigate} />;
    }
    if (currentPath.startsWith('/blog/')) {
      const slug = currentPath.split('/blog/')[1];
      const post = BLOG_POSTS.find((p) => p.slug === slug);
      if (post) {
        return <BlogPost post={post} navigate={navigate} />;
      }
    }
    if (currentPath === '/photography') {
      return <Photography navigate={navigate} />;
    }
    
    // Fallback for not found or root
    return <Home navigate={navigate} />;
  };

  return (
    <>
      <Header currentPath={currentPath} navigate={navigate} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
      <footer className="py-8 border-t border-neutral-200 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-500 text-sm">
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default App;
