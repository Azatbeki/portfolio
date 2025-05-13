import React from 'react';

import { LuGraduationCap } from 'react-icons/lu';
import portfolio from '@/public/portfolio.png';
import onlineGrocery from '@/public/online-grocery.png';
import aiInterviewPrep from '@/public/ai-interview-prep.png';
import MadDevsLogoSwitcher from '@/lib/MadDevsLogoSwitcher';
import KpmgLogoSwitcher from '@/lib/KpmgLogoSwitcher';
import TicketmasterLogoSwitcher from './TicketmasterLogoSwitcher';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

type Experience = {
  title: string;
  location: string;
  description: string;
  url?: string;
  icon: React.ReactNode;
  date: string;
};

export const experiencesData: readonly Experience[] = [
  {
    title: 'Software Engineer',
    location: 'Ticketmaster',
    description: `Developed intuitive, responsive web interfaces for TM1 Event Creation & Management platform, enabling event organizers to manage promotional offers through CRUD operations for 100,000+ events annually. Designed and implemented the Offers Dashboard using React, Redux, and REST APIs, integrating real-time API fetching, error handling, and validation messages, reducing manual corrections by 25%.`,
    icon: React.createElement(TicketmasterLogoSwitcher),
    date: 'April 2022 - Present',
  },
  {
    title: 'Frontend Software Engineer',
    location: 'Mad Devs',
    description:
      'Developed 20+ reusable and user-friendly UI components using React, JavaScript, and micro-frontend architecture, delivering a responsive platform for 5+ universities and 1,000+ students in Vietnam. Optimized React application performance, reducing load times by 40% through code-splitting, lazy loading, resulting in improved user engagement.',
    icon: React.createElement(MadDevsLogoSwitcher),

    date: 'March 2021 - April 2022',
  },
  {
    title: 'Senior Audit Consultant',
    location: 'KPMG',
    description: `Supervised audits for clients in finance, and mining industries, ensuring compliance with international standards, and delivering high-quality work on time and within budget, received double promotion in a year. Led teams of up to 10-15 professionals in planning, executing, and closing audit engagements.`,
    icon: React.createElement(KpmgLogoSwitcher),

    date: 'Jan 2018 - March 2021',
  },
  {
    title: 'Bachelor of Business Administration',
    location: 'American University of Central Asia',
    description: 'Graduated with a BS in Business Administration.',
    icon: React.createElement(LuGraduationCap),
    date: '2014 - 2018',
  },
];

export const projectsData = [
  {
    title: 'AI Interview Prep',
    description:
      'AI interview preparation tool that generates tailored questions and answers based on your role, skills, and experience. Leveraging AI, the platform simulates real interview scenarios to help candidates practice effectively, improve their confidence, and get personalized feedback to refine their responses.',
    tags: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'React Router',
      'ContextAPI',
      'Axios',
      'MongoDB',
      'Cloudinary',
      'Vercel',
      'Render',
      'Tailwind',
    ],
    imageUrl: aiInterviewPrep,
    link: 'https://aiprep.it.com/',
    sourceCodeLink: 'https://github.com/MaksatAlymkulov/interview-prep-ai',
  },
  {
    title: 'Online Grocery',
    description:
      'Full-stack grocery delivery app with user login, cart functionality, and secure online payments. Built using MongoDB, Express, React, and Node.js for a seamless shopping experience.',
    tags: [
      'React',
      'JavaScript',
      'Node.js',
      'Express.js',
      'React Router',
      'ContextAPI',
      'Axios',
      'MongoDB',
      'Cloudinary',
      'Stripe',
      'Vercel',
      'Tailwind',
    ],
    imageUrl: onlineGrocery,
    link: 'https://online-groccery-client.vercel.app/',
    sourceCodeLink: 'https://github.com/MaksatAlymkulov/greencart-deploy',
  },

  {
    title: 'Portfolio Website',
    description:
      'Interactive portfolio showcasing my projects, skills, and professional journey. Designed for seamless navigation, allowing visitors to explore my work, view source code, and easily connect with me.',
    tags: ['React', 'Resend', 'Tailwind', 'Typescript', 'Vercel'],
    imageUrl: portfolio,
    link: 'https://www.maksatalym.com/',
    sourceCodeLink: 'https://github.com/MaksatAlymkulov/portfolio',
  },
] as const;

export const skillsData = [
  'JavaScript',
  'TypeScript',
  'React',
  'HTML',
  'CSS',
  'Next.js',
  'REST APIs',
  'Axios',
  'GraphQL',
  'Redux',
  'Context API',
  'Material UI',
  'Bootstap',
  'Tailwind',
  'SAAS',
  'Less',
  'Unit testing',
  'Jest',
  'Node.js',
  'Firebase',
  'MongoDB',
  'Amazon Web Services',
  'MySQL',
  'Object-Oriented Programming',
  'Data Structures and Algorithms',
  'CI/CD Pipelines',
  'Git',
  'Agile',
  'Jira',
  'Figma',
  'Power BI',
  'Leetcode',
  'Artificial Intelligence',
] as const;
