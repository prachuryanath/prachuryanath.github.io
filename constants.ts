import {
  type Publication,
  type SocialLink,
  type BlogPost,
  type Photo,
  type Experience,
  type Project,
  type Education,
  type SkillCategory,
} from './types';
import { GitHub, LinkedIn, Twitter, Mail } from './components/Icons';

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: GitHub },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: LinkedIn },
  { name: 'Twitter', url: 'https://twitter.com', icon: Twitter },
  { name: 'Email', url: 'mailto:jane.doe@example.com', icon: Mail },
];

export const EDUCATION: Education[] = [
    {
        institution: 'Stanford University',
        degree: 'M.S. in Computer Science, specialization in AI',
        duration: '2020 - 2022'
    },
    {
        institution: 'University of California, Berkeley',
        degree: 'B.S. in Electrical Engineering & Computer Sciences',
        duration: '2016 - 2020'
    }
]

export const EXPERIENCE: Experience[] = [
  {
    company: 'Google',
    role: 'Senior Software Engineer',
    duration: '2022 - Present',
    description: [
      'Led the development of a new machine learning platform, improving model deployment time by 50%.',
      'Collaborated with cross-functional teams to define, design, and ship new features.',
      'Mentored junior engineers and conducted code reviews to maintain high-quality code standards.',
    ],
  },
  {
    company: 'Facebook',
    role: 'Software Engineer',
    duration: '2020 - 2022',
    description: [
      'Developed and maintained key features for the News Feed, impacting millions of users.',
      'Worked on improving performance and scalability of backend services.',
      'Participated in on-call rotation to ensure system reliability and uptime.',
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Personal Portfolio Website',
    description: 'The very website you are looking at. Built with React, TypeScript, and Tailwind CSS to showcase my work and interests.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com',
  },
  {
    title: 'Image Recognition API',
    description: 'A RESTful API that uses a convolutional neural network to classify images. Deployed using Docker and AWS.',
    technologies: ['Python', 'TensorFlow', 'Flask', 'Docker', 'AWS'],
    link: 'https://github.com',
  },
    {
    title: 'Real-time Chat Application',
    description: 'A full-stack web application for real-time communication, featuring user authentication and multiple chat rooms. Built with the MERN stack and Socket.io.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    link: 'https://github.com',
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Attention Is All You Need',
    authors: ['Ashish Vaswani', 'Noam Shazeer', 'Niki Parmar', 'Jakob Uszkoreit', 'Llion Jones', 'Aidan N. Gomez', 'Lukasz Kaiser', 'Illia Polosukhin'],
    venue: 'NIPS',
    year: 2017,
    description: 'Proposed the Transformer, a novel network architecture based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.',
    link: 'https://arxiv.org/abs/1706.03762',
  },
  {
    title: 'Deep Residual Learning for Image Recognition',
    authors: ['Kaiming He', 'Xiangyu Zhang', 'Shaoqing Ren', 'Jian Sun'],
    venue: 'CVPR',
    year: 2016,
    description: 'Introduced a residual learning framework to ease the training of networks that are substantially deeper than those used previously.',
    link: 'https://arxiv.org/abs/1512.03385',
  },
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
    {
        name: 'ML Frameworks',
        skills: ['Tensorflow', 'Pytorch', 'Scikit-Learn']
    },
    {
        name: 'Data Science',
        skills: ['Pandas', 'Numpy', 'Matplotlib', 'TFLite']
    }
]


export const BLOG_POSTS: BlogPost[] = [
    {
        title: "A Deep Dive into React's new 'use' Hook",
        slug: "deep-dive-react-use-hook",
        date: "October 10, 2023",
        excerpt: "React 19 is bringing a lot of exciting new features. Today, we'll explore the 'use' hook, which allows you to read the value of a resource like a Promise or a context.",
        content: [
            "The upcoming release of React 19 promises a host of new features aimed at improving both developer experience and application performance. Among the most anticipated additions is the new 'use' hook. Unlike other hooks, 'use' can be called within loops and conditional statements, offering a new level of flexibility.",
            "At its core, the 'use' hook is designed to read the value of a resource. Initially, it supports Promises and React Context. When you pass a Promise to 'use', React will suspend the component's rendering until the Promise resolves. This provides a powerful, built-in way to handle asynchronous data fetching directly within your components, simplifying loading states and error handling.",
            "Using 'use' with Context works similarly to 'useContext', but with the added benefit of being usable inside conditionals. This allows for more dynamic and efficient component structures, as you can conditionally subscribe to context values only when needed."
        ]
    },
    {
        title: "Understanding CSS Specificity",
        slug: "understanding-css-specificity",
        date: "September 22, 2023",
        excerpt: "Why is your CSS not applying? It might be a specificity issue. This post breaks down the rules of CSS specificity to help you debug your styles more effectively.",
        content: [
            "One of the most common frustrations for developers working with CSS is when styles don't apply as expected. More often than not, the culprit is CSS Specificity. Specificity is the algorithm used by browsers to determine which CSS property values are the most relevant to an element and, therefore, should be applied.",
            "The specificity hierarchy can be thought of as a points system. From lowest to highest, the values are: type selectors (e.g., `h1`), class selectors (e.g., `.my-class`), and ID selectors (e.g., `#my-id`). Inline styles (e.g., `style='color: red'`) have an even higher specificity. The `!important` rule will override any of these, but it should be used sparingly.",
            "By understanding how these rules are calculated, you can write more predictable and maintainable CSS, avoiding specificity wars and making your stylesheets easier to debug."
        ]
    },
    {
        title: "Getting Started with TypeScript in 2023",
        slug: "getting-started-with-typescript",
        date: "August 15, 2023",
        excerpt: "TypeScript has become an essential tool for modern web development. This guide will walk you through setting up a new project with TypeScript and explain some of its core concepts.",
        content: [
            "TypeScript, a statically typed superset of JavaScript, has seen massive adoption in the web development community for its ability to catch errors early and improve code quality. If you're new to TypeScript, getting started can seem daunting, but it's easier than ever.",
            "To start a new project, you can use a modern build tool like Vite, which offers first-class TypeScript support out of the box. Simply run `npm create vite@latest my-ts-app -- --template react-ts`. This will scaffold a new React project with TypeScript configured.",
            "The core concepts to grasp are types and interfaces. A type allows you to define a shape for your data, such as `type User = { id: number; name: string; }`. An interface does something similar but is better suited for defining the shape of objects. By typing your variables, function parameters, and return values, you enable the TypeScript compiler to catch potential bugs before you even run your code."
        ]
    }
]

export const PHOTOGRAPHY_IMAGES: Photo[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb', alt: 'A beautiful landscape', caption: 'Misty mountains' },
    { id: 2, src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b', alt: 'A stunning valley', caption: 'Green valley' },
    { id: 3, src: 'https://images.unsplash.com/photo-1511884642898-4c92249e20b6', alt: 'A forest from above', caption: 'Forest canopy' },
    { id: 4, src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e', alt: 'A lake in the mountains', caption: 'Mountain lake' },
    { id: 5, src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d', alt: 'A path in the woods', caption: 'Woodland path' },
    { id: 6, src: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716', alt: 'A powerful waterfall', caption: 'Waterfall' },
];