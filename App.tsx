import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { BlogPost } from './components/BlogPost';
import { Photography } from './components/Photography';
import { BLOG_POSTS } from './constants';

const App: React.FC = () => {
  // Use location.hash for routing, compatible with GitHub Pages
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#/');

  const navigate = useCallback((path: string) => {
    window.location.hash = path;
    // The state update will be triggered by the hashchange event listener
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash || '#/');
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderContent = () => {
    if (currentPath.startsWith('#/blog/')) {
      const slug = currentPath.split('#/blog/')[1];
      const post = BLOG_POSTS.find(p => p.slug === slug);
      if (post) {
        return <BlogPost post={post} navigate={navigate} />;
      }
    }
    
    switch (currentPath) {
      case '#/blog':
        return <Blog navigate={navigate} />;
      case '#/photography':
        return <Photography navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="bg-white text-neutral-800 font-sans antialiased">
      <Header navigate={navigate} currentPath={currentPath} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {renderContent()}
      </main>
      <footer className="text-center py-8 mt-16 border-t border-neutral-200 text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Jane Doe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
