import React from 'react';
import { PROFILE } from '../constants';

const NAV_LINKS = [
  { name: 'About', href: '/#about' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Publications', href: '/#publications' },
  { name: 'Photography', href: '/photography' },
  { name: 'Blog', href: '/blog' },
];

interface HeaderProps {
    currentPath: string;
    navigate: (path: string) => void;
}

const HeaderComponent: React.FC<HeaderProps> = ({ currentPath, navigate }) => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        
        if (href.startsWith('/#')) {
            // If on a different page, first navigate home, then scroll
            if (window.location.hash.slice(1) !== '/') {
                navigate('/');
                // This is a bit of a hack to wait for the page to render
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
    <header className="sticky top-0 z-30 w-full bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#/" onClick={(e) => handleNavClick(e, '/')} className="text-2xl font-bold tracking-tight">
              {PROFILE.name}
            </a>
          </div>
          <nav className="hidden sm:block">
            <ul className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = link.href.startsWith('/#') ? currentPath === '/' : currentPath === link.href;
                return (
                    <li key={link.name}>
                    <a
                        href={`#${link.href}`}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className={`text-sm font-medium transition-colors ${isActive ? 'text-black' : 'text-neutral-600 hover:text-black'}`}
                    >
                        {link.name}
                    </a>
                    </li>
                );
            })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export const Header = React.memo(HeaderComponent);