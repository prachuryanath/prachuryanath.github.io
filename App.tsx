import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { BlogPost } from './components/BlogPost';
import { Photography } from './components/Photography';
import { SocialLink } from './components/SocialLink';
import { BLOG_POSTS, PROFILE } from './constants';

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
  const [theme, setTheme] = useState(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')!;
    }
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash.slice(1) || '/');
      window.scrollTo(0, 0);
    };

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Header currentPath={currentPath} navigate={navigate} theme={theme} toggleTheme={toggleTheme} />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </main>
      <footer className="py-8 border-t border-neutral-200 dark:border-neutral-800 mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-neutral-500 dark:text-neutral-400 text-sm">
            <div className="flex justify-center items-center space-x-6 mb-4">
                {PROFILE.socials.map((link) => (
                    <SocialLink key={link.name} {...link} />
                ))}
            </div>
            <p>&copy; {new Date().getFullYear()} {PROFILE.name}. All Rights Reserved.</p>
        </div>
      </footer>
       {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-5 right-5 z-50 p-3 rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-neutral-900 transition-opacity duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </>
  );
};

export default App;