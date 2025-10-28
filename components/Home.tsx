import React from 'react';
import { Section } from './Section';
import { SocialLink } from './SocialLink';
import { PublicationCard } from './PublicationCard';
import { BlogPostCard } from './BlogPostCard';
import { PhotoGallery } from './PhotoGallery';
import { ViewMoreLink } from './ViewMoreLink';
import { ExperienceCard } from './ExperienceCard';
import { ProjectCard } from './ProjectCard';
import { EducationCard } from './EducationCard';
import {
  PROFILE,
  PUBLICATIONS,
  BLOG_POSTS,
  PHOTOGRAPHY_IMAGES,
  EXPERIENCE,
  PROJECTS,
  EDUCATION,
  TECHNICAL_SKILLS,
} from '../constants';

interface HomeProps {
  navigate: (path: string) => void;
}

export const Home: React.FC<HomeProps> = ({ navigate }) => {
  const latestBlogPosts = BLOG_POSTS.slice(0, 2);
  const galleryPreviewImages = PHOTOGRAPHY_IMAGES.slice(0, 6);

  return (
    <>
      {/* Hero/About Section */}
      <section id="about" className="py-20 sm:py-32 text-center scroll-mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src={PROFILE.avatar}
            alt={PROFILE.name}
            className="w-32 h-32 rounded-full mx-auto mb-6 ring-4 ring-neutral-200 object-cover"
          />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            {PROFILE.name}
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            {PROFILE.summary}
          </p>
          <div className="flex justify-center items-center space-x-6">
            {PROFILE.socials.map((link) => (
              <SocialLink key={link.name} {...link} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <Section id="experience" title="Experience">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-10">
          {EXPERIENCE.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      </Section>
      
      {/* Projects Section */}
      <Section id="projects" title="Projects">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj, index) => (
            <ProjectCard key={index} project={proj} />
          ))}
        </div>
      </Section>

      {/* Publications Section */}
      <Section id="publications" title="Publications">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-10">
          {PUBLICATIONS.map((pub) => (
            <PublicationCard key={pub.title} publication={pub} />
          ))}
        </div>
      </Section>

      {/* Technical Skills Section */}
        <Section id="skills" title="Technical Skills">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-6">
                {TECHNICAL_SKILLS.map((category) => (
                    <div key={category.name}>
                        <h3 className="text-xl font-semibold text-neutral-700 mb-3">{category.name}</h3>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => (
                                <span key={skill} className="bg-neutral-100 text-neutral-700 text-sm font-medium px-3 py-1.5 rounded-md">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* Photography Section */}
        <Section id="photography" title="Photography">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <PhotoGallery photos={galleryPreviewImages} />
            <div className="text-center mt-12">
              <ViewMoreLink href="/photography" navigate={navigate}>View Full Gallery</ViewMoreLink>
            </div>
          </div>
        </Section>

        {/* Blog Section */}
        <Section id="blog" title="Recent Posts">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {latestBlogPosts.map((post) => (
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

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-8">
            {EDUCATION.map((edu, index) => (
                <EducationCard key={index} education={edu} />
            ))}
        </div>
      </Section>

    </>
  );
};
