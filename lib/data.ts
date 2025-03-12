import React from 'react';
import { FaReact, FaSalesforce, FaTiktok } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import speedyNexus from '@/public/speedynexus.png';
import lostMokokos from '@/public/lostmokokos.png';
import speedyNexusTraffic from '@/public/speedynexus-traffic.png';
import lostMokokosTraffic from '@/public/lostmokokos-traffic.png';
import portfolio from '@/public/portfolio.png';
import { hrtime } from 'process';

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
    description: 'Developed intuitive, responsive web interfaces using JavaScript, React, HTML, and CSS for internal app.',
    icon: React.createElement(FaTiktok),
    date: 'March 2022 - Present',
  },
  {
    title: 'Senior Audit Consultant',
    location: 'KPMG',
    description: `Supervised audits for clients in finance, and mining industries, ensuring compliance with international standards, and delivering high-quality work on time and within budget, received double promotion in a year. Led teams of up to 10-15 professionals in planning, executing, and closing audit engagements.`,
    icon: React.createElement(FaSalesforce),
    date: 'Jan 2018 - March 2012',
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
