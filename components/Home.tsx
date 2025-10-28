import React from 'react';
import { Section } from './Section';
import { SocialLink } from './SocialLink';
import { EducationCard } from './EducationCard';
import { ExperienceCard } from './ExperienceCard';
import { ProjectCard } from './ProjectCard';
import { PublicationCard } from './PublicationCard';
import { BlogPostCard } from './BlogPostCard';
import { PhotoGallery } from './PhotoGallery';
import { ViewMoreLink } from './ViewMoreLink';
import { SOCIAL_LINKS, EDUCATION, EXPERIENCE, PROJECTS, PUBLICATIONS, BLOG_POSTS, PHOTOGRAPHY_IMAGES, TECHNICAL_SKILLS } from '../constants';

interface HomeProps {
    navigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  return (
    <div className="space-y-16 sm:space-y-20">
      <section id="about" className="text-center py-10">
        <img 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80" 
            alt="Jane Doe"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover"
        />
        <h1 className="text-4xl font-bold tracking-tight mb-2">Jane Doe</h1>
        <p className="text-xl text-neutral-600 mb-6">Senior Software Engineer at Google</p>
        <div className="flex justify-center space-x-6">
            {SOCIAL_LINKS.map(link => <SocialLink key={link.name} {...link} />)}
        </div>
        <p className="max-w-3xl mx-auto mt-8 text-lg text-neutral-700 leading-relaxed">
            I'm a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Google. I'm passionate about machine learning, web development, and photography.
        </p>
      </section>

      <Section id="education" title="Education">
        <div className="space-y-8">
            {EDUCATION.map((edu, index) => <EducationCard key={index} education={edu} />)}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => <ExperienceCard key={index} experience={exp} />)}
        </div>
      </Section>

       <Section id="skills" title="Technical Skills">
        <div className="flex flex-col items-center space-y-6">
          {TECHNICAL_SKILLS.map(category => (
            <div key={category.name} className="w-full max-w-2xl">
              <h3 className="text-lg font-semibold text-center mb-3">{category.name}</h3>
              <div className="flex flex-wrap justify-center gap-2">
                {category.skills.map(skill => (
                   <span key={skill} className="bg-neutral-100 text-neutral-700 text-sm font-medium px-3 py-1.5 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => <ProjectCard key={index} project={project} />)}
        </div>
      </Section>
      
      <Section id="publications" title="Publications">
        <div className="space-y-10">
            {PUBLICATIONS.map((pub, index) => <PublicationCard key={index} publication={pub} />)}
        </div>
      </Section>

      <Section id="blog" title="Recent Posts">
        <div className="space-y-10">
            {BLOG_POSTS.slice(0, 2).map(post => (
              <a 
                key={post.slug}
                href={`#/blog/${post.slug}`}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/blog/${post.slug}`);
                }}
                className="block"
              >
                <BlogPostCard post={post} />
              </a>
            ))}
        </div>
        <div className="text-center mt-12">
            <ViewMoreLink href="/blog" navigate={navigate}>View All Posts</ViewMoreLink>
        </div>
      </Section>

      <Section id="photography" title="Photography">
        <PhotoGallery photos={PHOTOGRAPHY_IMAGES.slice(0, 6)} />
         <div className="text-center mt-12">
            <ViewMoreLink href="/photography" navigate={navigate}>View Full Gallery</ViewMoreLink>
        </div>
      </Section>
    </div>
  );
};
