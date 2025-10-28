import React, { useState, useEffect, useRef } from 'react';

const useOnScreen = (ref: React.RefObject<HTMLElement>, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin,
      }
    );

    const currentElement = ref.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [ref, rootMargin]);

  return isVisible;
};


interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionComponent: React.FC<SectionProps> = ({ id, title, children }) => {
  const ref = useRef<HTMLElement>(null);
  const isVisible = useOnScreen(ref, '-100px');

  return (
    <section 
      id={id} 
      ref={ref}
      className={`py-16 sm:py-20 border-t border-neutral-200 dark:border-neutral-800 scroll-mt-16 transition-opacity duration-700 ease-out motion-safe:animate-fade-in-up ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ animationPlayState: isVisible ? 'running' : 'paused' }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-center mb-12 text-neutral-900 dark:text-white">
        {title}
      </h2>
      {children}
    </section>
  );
};

export const Section = React.memo(SectionComponent);