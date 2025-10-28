import React from 'react';

interface ViewMoreLinkProps {
  href: string;
  children: React.ReactNode;
  navigate: (path: string) => void;
  isBackLink?: boolean;
}

export const ViewMoreLink: React.FC<ViewMoreLinkProps> = ({ href, children, navigate, isBackLink = false }) => {
  const baseClasses = "inline-block font-medium rounded-md transition-colors duration-300 text-sm px-5 py-2.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const primaryClasses = "bg-neutral-800 text-white hover:bg-black focus:ring-black";
  const secondaryClasses = "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:ring-neutral-400";

  const classes = isBackLink ? secondaryClasses : primaryClasses;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={`${baseClasses} ${classes}`}>
      {children}
    </a>
  );
};