import React from 'react';
import { FaReact } from 'react-icons/fa';
import { SiTicketmaster } from 'react-icons/si';
import { LuGraduationCap } from 'react-icons/lu';
import portfolio from '@/public/portfolio.png';
import kpmg from '@/public/kpmg.svg';
import maddevs from '@/public/maddevs.svg';

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
    icon: React.createElement(SiTicketmaster),
    date: 'April 2022 - Present',
  },
  {
    title: 'Frontend Software Engineer',
    location: 'Mad Devs',
    description:
      'Developed 20+ reusable and user-friendly UI components using React, JavaScript, and micro-frontend architecture, delivering a responsive platform for 5+ universities and 1,000+ students in Vietnam. Optimized React application performance, reducing load times by 40% through code-splitting, lazy loading, resulting in improved user engagement.',
    icon: React.createElement('img', {
      src: maddevs.src,
      alt: 'MadDevs',
      className: 'w-full h-full object-contain p-2',
    }),
    date: 'March 2021 - April 2022',
  },
  {
    title: 'Senior Audit Consultant',
    location: 'KPMG',
    description: `Supervised audits for clients in finance, and mining industries, ensuring compliance with international standards, and delivering high-quality work on time and within budget, received double promotion in a year. Led teams of up to 10-15 professionals in planning, executing, and closing audit engagements.`,
    icon: React.createElement('img', {
      src: kpmg.src,
      alt: 'KPMG',
      className: 'w-full h-full object-contain p-2 dark:invert dark:brightness-200',
    }),
    date: 'Jan 2018 - March 2021',
  },
  {
    title: 'Bachelor of Business Administration',
    location: 'American University of Central Asia',
    description: 'Graduated with a BS in Business Administration.',
    icon: React.createElement(LuGraduationCap),
    date: '2014 - 2018',
  },
  {
    title: 'Frontend Development Principles ',
    location: 'HackReactor Bootcamp ',
    description: 'Certificate in Frontend Development Principles.',
    icon: React.createElement(LuGraduationCap),
    date: 'Graduation Year 2021',
  },
];

export const projectsData = [
  {
    title: 'Portfolio Website',
    description:
      'Interactive portfolio showcasing my projects, skills, and professional journey. Designed for seamless navigation, allowing visitors to explore my work, view source code, and easily connect with me.',
    tags: ['React', 'Resend', 'Tailwind', 'Typescript', 'Vercel'],
    imageUrl: portfolio,
    link: 'https://MaksatAlymkulov.com/',
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
