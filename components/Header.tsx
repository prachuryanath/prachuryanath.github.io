import React, { useState, useEffect } from 'react';
import { PROFILE } from '../constants';
import { IconMenu, IconX, IconSun, IconMoon } from './Icons';

const NAV_LINKS = [
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Publications', href: '/#publications' },
  { name: 'Contact', href: '/#contact' },
  { name: 'Photography', href: '/photography' },
  { name: 'Blog', href: '/blog' },
];

interface HeaderProps {
    currentPath: string;
    navigate: (path: string) => void;
    theme: string;
    toggleTheme: () => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({ currentPath, navigate, theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        
        if (href.startsWith('/#')) {
            if (currentPath !== '/') {
                navigate('/');
                setTimeout(() => {
                    document.querySelector(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                 document.querySelector(href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            navigate(href);
        }
    };
    
  return (
    <>
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#/" onClick={(e) => handleNavClick(e, '/')} className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {PROFILE.name}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <nav className="hidden sm:block">
              <ul className="flex items-center space-x-8">
                {NAV_LINKS.map((link) => {
                  const isActive = link.href.startsWith('/#') ? currentPath === '/' : currentPath === link.href;
                  return (
                      <li key={link.name}>
                      <a
                          href={`#${link.href}`}
                          onClick={(e) => handleNavClick(e, link.href)}
                          className={`text-sm font-medium transition-colors ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white'}`}
                      >
                          {link.name}
                      </a>
                      </li>
                  );
              })}
              </ul>
            </nav>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors">
              {theme === 'light' ? <IconMoon className="w-6 h-6" /> : <IconSun className="w-6 h-6" />}
            </button>
            <div className="sm:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                    <IconMenu className="w-6 h-6 text-neutral-800 dark:text-neutral-200"/>
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* Mobile Menu */}
    <div className={`fixed inset-0 z-50 sm:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
        <div className="absolute top-0 right-0 h-full w-full max-w-xs bg-white dark:bg-neutral-900 p-6">
            <div className="flex justify-between items-center mb-10">
                <span className="text-xl font-bold">Menu</span>
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                    <IconX className="w-6 h-6 text-neutral-800 dark:text-neutral-200" />
                </button>
            </div>
            <nav>
                 <ul className="flex flex-col space-y-6">
                    {NAV_LINKS.map((link) => (
                        <li key={link.name}>
                            <a
                                href={`#${link.href}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-lg font-medium text-neutral-700 dark:text-neutral-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </div>
    </>
  );
};

export const Header = React.memo(HeaderComponent);