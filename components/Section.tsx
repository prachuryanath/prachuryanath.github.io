import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionComponent: React.FC<SectionProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-16 sm:py-20 border-t border-neutral-200 scroll-mt-16">
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
        {title}
      </h2>
      {children}
    </section>
  );
};

export const Section = React.memo(SectionComponent);