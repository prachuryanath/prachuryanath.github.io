import React from 'react';

interface HeaderProps {
    navigate: (path: string) => void;
    currentPath: string;
}

const NavLink: React.FC<{ href: string; navigate: (path: string) => void; children: React.ReactNode; isActive: boolean; }> = ({ href, navigate, children, isActive }) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        navigate(href);
    };
    const activeClass = isActive ? 'text-black font-semibold' : 'text-neutral-600';

    return <a href={`#${href}`} onClick={handleClick} className={`${activeClass} hover:text-black transition-colors`}>{children}</a>;
}

const HeaderComponent: React.FC<HeaderProps> = ({ navigate, currentPath }) => {
  return (
    <header className="py-6 mb-12 sticky top-0 bg-white/80 backdrop-blur-md z-10 border-b border-neutral-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl flex justify-between items-center">
        <a href="#/" onClick={(e) => { e.preventDefault(); navigate('/'); }} className="text-2xl font-bold tracking-tight">
          Jane Doe
        </a>
        <nav className="space-x-6 text-lg">
          <NavLink href="/" navigate={navigate} isActive={currentPath === '#/' || currentPath === '/'}>About</NavLink>
          <NavLink href="/blog" navigate={navigate} isActive={currentPath.startsWith('#/blog')}>Blog</NavLink>
          <NavLink href="/photography" navigate={navigate} isActive={currentPath === '#/photography'}>Photography</NavLink>
        </nav>
      </div>
    </header>
  );
};

export const Header = React.memo(HeaderComponent);
