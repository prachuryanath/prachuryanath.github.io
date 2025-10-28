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
import { IconGitHub, IconLinkedIn, IconScholar, IconMail, IconPhone, IconInstagram } from './components/Icons';

export const PROFILE = {
    name: 'Prachurya Nath',
    title: 'Computational Engineering Student',
    summary: 'A passionate and driven student pursuing a Master\'s in Computational Engineering, with a strong foundation in Electrical Engineering and hands-on experience in machine learning, deep learning, and software development. Seeking to leverage skills in privacy-preserving technologies and model optimization to solve complex, real-world problems.',
    avatar: 'https://i.ibb.co/6yvGM21/profile-pic.jpg',
    contact: {
      email: 'prachuryanath00@gmail.com',
      phone: '+49-176-775-84936',
    },
    socials: [
      { name: 'Email', url: 'mailto:prachuryanath00@gmail.com', icon: IconMail },
      { name: 'GitHub', url: 'https://github.com/prachuryanath', icon: IconGitHub },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prachurya-nath/', icon: IconLinkedIn },
      { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=your-scholar-id', icon: IconScholar }, // Replace with actual scholar ID if available
      { name: 'Instagram', url: 'https://www.instagram.com/prachuryeah/', icon: IconInstagram },
    ],
};


export const EDUCATION: Education[] = [
  {
    institution: 'Friedrich-Alexander-Universität Erlangen-Nürnberg',
    degree: 'Masters of Science in Computational Engineering',
    duration: 'Oct 2023 - Present',
  },
  {
    institution: 'National Institute of Technology Silchar',
    degree: 'Bachelor of Technology in Electrical Engineering',
    duration: 'Jul 2019 – June 2023',
  },
];

export const EXPERIENCE: Experience[] = [
    {
        company: 'Fraunhofer IGD',
        role: 'Master Thesis',
        duration: 'July 2025 – Present', // Note: Year might be a typo in resume, assuming 2024 or future
        description: [
            'Developing a novel, privacy-preserving framework for on-device face identification on memory-constrained microcontrollers (< 1MB RAM).',
            'Designing efficient deep learning architecture using various model optimizing techniques such as pruning, quantization and knowledge distillation.',
            'Creating an incremental learning system that allows the model to learn on new users locally, without any network connectivity or central servers.'
        ],
    },
    {
        company: 'National Institute of Technology Silchar',
        role: 'Bachelor Thesis',
        duration: 'July 2022 – May 2023',
        description: [
            'Improved the accuracy of automated fish species classification and disease detection by designing and implementing a multimodal underwater detection system.',
        ],
    },
    {
        company: 'IIT Guwahati',
        role: 'Research Intern',
        duration: 'July 2021 – Sept 2021',
        description: [
            'Extracted and preprocessed thousands of Youtube comments from Json files for language analysis.',
            'Performed semantic analysis on manually labeled, Latinized Assamese texts, with a fine-tuned Muril (BERT) model.',
        ],
    },
];

export const PROJECTS: Project[] = [
    {
        title: 'Reproducibility Study in Computer Vision',
        description: 'Critically analysed 50 research papers from top-tier conferences (CVPR, MICCAI) to evaluate the feasibility and reproducibility of their methods. Executed a complete reproduction of Hierarchical Histogram Threshold Segmentation (CVPR 2024) to validate its findings.',
        technologies: ['Python', 'Pytorch', 'Tensorflow'],
    },
    {
        title: 'SabhyaServer Recommendation',
        description: 'Created a multi-class topic classifier by fine-tuning a DistilBERT model for automated keyword extraction. Built a content recommendation system that suggests files to users through semantic vector embeddings.',
        technologies: ['Python', 'Flask', 'Scikit-learn', 'Tensorflow'],
        link: 'https://github.com/prachuryanath/Sabhya-Server',
    },
];

export const PUBLICATIONS: Publication[] = [
  {
    title: 'Image Caption Generation for Low-Resource Assamese Language',
    authors: ['Prachurya Nath', 'Prottay Kumar Adhikary', 'Pankaj Dadure', 'Partha Pakray'],
    venue: 'ROCLING2022 (The 34th Conference on Computational Linguistics and Speech Processing)',
    year: 2022,
    description: 'A study on generating descriptive captions for images in Assamese, a low-resource language, contributing to regional language processing.',
  },
  {
    title: 'Investigation of negation effect for English-Assamese machine translation',
    authors: ['Sahinur Rahman Laskar', 'Abinash Gogoi', 'Samudranil Dutta', 'Prottay Kumar Adhikary', 'Prachurya Nath', 'Partha Pakray', 'Sivaji Bandyopadhyay'],
    venue: 'Sādhanā: Springer Journal volume 47, Article number: 238',
    year: 2022,
    description: 'An investigation into the challenges and effects of handling negation in machine translation between English and Assamese.',
  },
];

export const TECHNICAL_SKILLS: SkillCategory[] = [
    {
        name: 'ML Frameworks',
        skills: ['Tensorflow', 'Pytorch', 'Scikit-Learn'],
    },
    {
        name: 'Data Science',
        skills: ['Pandas', 'Numpy', 'Matplotlib', 'TFLite'],
    },
];

export const BLOG_POSTS: BlogPost[] = [
    {
      title: 'The AI Conundrum of 2024',
      slug: 'the-ai-conundrum-of-2024',
      date: 'May 3, 2024',
      excerpt: 'In the rapidly evolving landscape of artificial intelligence, 2024 has presented a unique set of challenges and opportunities that are reshaping industries and redefining the boundaries of innovation.',
      content: [
        'The year 2024 will be remembered as a pivotal moment in the AI timeline. The proliferation of advanced large language models (LLMs) and generative AI has moved from niche applications to mainstream integration. Companies are grappling with how to best leverage these technologies, facing a conundrum: balancing the immense potential for productivity gains with the ethical, security, and implementation challenges that arise.',
        'One of the most significant trends is the push towards smaller, more efficient models. The race for billions of parameters is giving way to a more nuanced approach, focusing on model optimization, quantization, and domain-specific fine-tuning. This shift is crucial for deploying AI on edge devices, enhancing privacy and reducing latency—a field I am deeply passionate about.',
        'As we look ahead, the ability to create robust, fair, and transparent AI systems will be the true measure of success. The conundrum is not just about building powerful models, but about building responsible ones that augment human capability and contribute positively to society.'
      ],
    },
    {
      title: 'First Month in Germany: An Expat’s Diary',
      slug: 'first-month-in-germany',
      date: 'April 15, 2024',
      excerpt: 'Moving to a new country is a whirlwind of experiences. From navigating bureaucracy to discovering cultural nuances, here are my reflections on the first month of living in Germany.',
      content: [
        'The first thing that strikes you about Germany is the efficiency. Public transport is punctual, processes are well-defined, and there is a tangible sense of order. However, this order comes with its own set of challenges, particularly the infamous German bureaucracy. Registering my address (Anmeldung) and setting up a bank account was a masterclass in patience and paperwork.',
        'Beyond the paperwork, the cultural immersion has been fascinating. The directness in communication, the emphasis on punctuality, and the deep appreciation for rules are not just stereotypes; they are integral parts of daily life. I\'ve learned that "how are you?" is not a casual greeting but a genuine question expecting a detailed answer.',
        'But perhaps the most rewarding part has been the small discoveries: the taste of freshly baked Brötchen on a Sunday morning, the beauty of a walk through a well-preserved Altstadt (old town), and the simple joy of saying "Danke" and "Bitte" and feeling a little more at home. The journey is just beginning, but Germany has already started to feel like a place of growth and new beginnings.'
      ]
    },
];

export const PHOTOGRAPHY_IMAGES: Photo[] = [
    { id: 1, src: 'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=2070', alt: 'A street in a European city at night', caption: 'City Lights' },
    { id: 2, src: 'https://images.unsplash.com/photo-1502602898657-3e91760c0337?auto=format&fit=crop&q=80&w=2070', alt: 'The Eiffel Tower in Paris', caption: 'Parisian Dream' },
    { id: 3, src: 'https://images.unsplash.com/photo-1487798452839-c748a30661e4?auto=format&fit=crop&q=80&w=2070', alt: 'A serene view of the Swiss Alps', caption: 'Alpine Serenity' },
    { id: 4, src: 'https://images.unsplash.com/photo-1529655683826-1c821e8e5652?auto=format&fit=crop&q=80&w=1974', alt: 'The Colosseum in Rome', caption: 'Roman History' },
    { id: 5, src: 'https://images.unsplash.com/photo-1505832688320-9e6d0e34b415?auto=format&fit=crop&q=80&w=2070', alt: 'Canals of Venice', caption: 'Venetian Views' },
    { id: 6, src: 'https://images.unsplash.com/photo-1542015247-83286392d759?auto=format&fit=crop&q=80&w=2070', alt: 'A quiet German village street', caption: 'German Charm' },
];
