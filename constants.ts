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
    avatar: 'https://raw.githubusercontent.com/prachuryanath/prachuryanath.github.io/refs/heads/main/copenhagen.JPG',
    contact: {
      email: 'prachuryanath00@gmail.com',
      phone: '+49-176-775-84936',
    },
    socials: [
      { name: 'Email', url: 'mailto:prachuryanath00@gmail.com', icon: IconMail },
      { name: 'GitHub', url: 'https://github.com/prachuryanath', icon: IconGitHub },
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prachuryanath/', icon: IconLinkedIn },
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
        link: 'https://github.com/azad-ali786/SabhyServer_RecommendationSys_SIH',
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
      title: '2:11 AM',
      slug: 'day-2',
      date: 'October 27, 2025',
      excerpt: "so, it’s currently 2:11 am. i promised myself yesterday that i’d write something everyday to make it into a habit, so here it goes. the world’s currently asleep, at least in my timezone, but my mind is wide awake. there's a kind of peace the night arrives with, bringing silence yet heavy in its own way as silence doesn't always mean calmness.",
      content: [
        "so, it’s currently 2:11 am.i promised myself yesterday that i’d write something everyday to make it into a habit, so here it goes. the world’s currently asleep, at least in my timezone, but my mind is wide awake. there's a kind of peace the night arrives with, bringing silence yet heavy in its own way as silence doesn't always mean calmness.i’ve been sleeping after 2 am for years now, most nights. maybe i’ve grown to love the night, because it feels familiar, maybe with the darkness or maybe it's that i don't want the new day to begin yet. cause when i wake up in the morning, i always feel that the world will reset with a new beginning and i am not ready for that. there's also a comforting thing about nights which is hard to describe - just me quietly trying to understand myself.a few days ago, a sentence kept playing in my mind,'kehne ko bahut kuch hai, magar kisse kahe hum. yeah, it’s from a song , but at that moment i couldn't even remember where it came from, but it kind of arrived uninvited. maybe because that's how memories work - they come back when you have least expect them, just to remind you something. that line also gave me a reason to start writing again - maybe to journal my thoughts or just to share them somewhere outside my head.i think i’ve found a home in these nights. it's crowded and messy now with thoughts, but it's also where i feel the safest. maybe that's why i don't sleep early anymore, maybe i’ve grown way too comfortable living like this.maybe it’ll will end one day. maybe tomorrow i’ll sleep early, most likely not. maybe not for another thousand nights, but who can really tell the future. for now, the night asks for my company softly, and by morning, this too will become the past."
      ],
    },
    {
      title: 'on my mind',
      slug: 'day-1',
      date: 'October 26, 2025',
      excerpt: 'i want to write something. i want to get back at life. i have lived so long living in the past that i’ve forgotten how to be in the present. there’s always something on my mind, an endless train of thoughts that i keep talking to myself to find answers.',
      content: [
        "i want to write something. i want to get back at life. i have lived so long living in the past that i’ve forgotten how to be in the present. there’s always something on my mind, an endless train of thoughts that i keep talking to myself to find answers. is this life even worth living or something that i can cherish only after it’s gone ? on my ears, music plays endlessly every hour, every day. it’s my way to calm myself down, to quiet the noise. but sometimes i wonder will this music as a kind of escape, a wall i built for myself will last forever or i’ll just get tired of it one day. i miss feeling alive - not in the adrenaline sports kind of way. but just in the ordinary moments where you pause for a second, look at your life and just feel present and content. i try to move on with the day pretending i’m all fine, but deep inside there's a silent ache which walks with me as a shadow, never fading away. i keep telling myself it's all just a phase as everyone says and goes through, but we all know phases are meant to pass. there will only be a few nights when i’m not staring at the ceiling and keep questioning myself on what i’m waiting for - a sign, an answer, or just some kind of wisdom to make sense of it all. but i won't say there's no hope, i still quietly hope that when i wake up one morning, everything i kept holding on to which turned out to be heavy will be gone. that i’ll notice joy in the smallest things - the sound of rain on a hot summer day, the glimpse of sun on a cloudy winter morning or just an old couple holding hands walking down the street. maybe there's a version of me in the future who will finally learn to live in the present, and the only way i can reach him is to slowly building upon the present, one small moment at a time."
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
