import React from 'react';

import { LuGraduationCap } from 'react-icons/lu';
import portfolio from '@/public/portfolio.png';
import heartDisease from '@/public/heart_disease.png';
import costPrediction from '@/public/cost_prediction.png';
import KpmgLogoSwitcher from '@/lib/KpmgLogoSwitcher';
import CapitaloneLogoSwitcher from './CapitaloneLogoSwitcher';

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
    name: 'Education',
    hash: '#education',
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
    title: 'Data Scientist, E-commerce & Saas',
    location: 'Capital One Shopping',
    description: `I analyzed 15M+ homepage visits with SQL and Python to identify drop-off points, designed 10+ A/B tests on layouts that lifted “Add to Chrome” clicks by 20%, and partnered with engineers and marketers to optimize promotions, generating $3M+ in affiliate revenue. I also applied predictive models to boost user reactivation by 22%, built anomaly detection reducing fraud by 28%, and created 8 automated Tableau dashboards to track key product metrics.`,
    icon: React.createElement(CapitaloneLogoSwitcher),
    date: 'August 2022 - Present',
  },
  {
    title: 'Financial Analyst',
    location: 'KPMG Advisory',
    description: `I led the development of a scenario-driven financial model for a $56M rail transportation firm to simulate outcomes and guide M&A strategy, and directed valuation analysis for a $500M mining company by improving data integrity and model accuracy. I also supported portfolio analytics for a $250M VC fund and sovereign assets, applying market benchmarks and DCF models to assess investment value under varying macroeconomic scenarios.`,
    icon: React.createElement(KpmgLogoSwitcher),

    date: 'March 2019 - January 2022',
  },
];

type Education = {
  title: string;
  location: string;
  description: string;
  url?: string;
  icon: React.ReactNode;
  date: string;
};

export const educationData: readonly Education[] = [
  {
    title: 'Master of Science - Computer Science (Data Science & Analytics) - Part Time',
    location: 'San Francisco Bay University ',
    description:
      'Relevant Coursework: Data Visualization & Business Intelligence, Experimental Design & Analysis, Data Modeling & Implementation Techniques, Database Technologies (SQL), Machine Learning for Analytics',
    icon: React.createElement(LuGraduationCap),
    date: 'August 2024 - May 2026',
  },
  {
    title: 'Bachelor of Business Administration',
    location: 'American University of Central Asia',
    description: 'Magna Cum Laude (top 10%) distinction and was awarded a full merit scholarship through high competition at university',
    icon: React.createElement(LuGraduationCap),
    date: 'September 2014 - June 2018',
  },
];

export const projectsData = [
  {
    title: 'Insurance Cost Prediction using Linear Regression',
    description:
      'The project predicts insurance charges using a dataset from Kaggle. It applies linear regression to identify key factors influencing costs and build a predictive model that can help to estimate individuals insurance charges.',
    tags: ['Python', 'Pandas', 'Numpy', 'Data Analysis', 'EDA', 'Statistics'],
    imageUrl: costPrediction,
    link: 'https://github.com/Azatbeki/Predicting-Insurance-cost-using-linear-regression',
    sourceCodeLink: 'https://github.com/Azatbeki/Predicting-Insurance-cost-using-linear-regression',
  },
  {
    title: 'Heart Disease Prediction',
    description:
      'This project predicts heart disease risk using a Kaggle health records dataset. It leverages data visualization and machine learning to identify key risk factors and builds a predictive model with the K-Nearest Neighbors (KNN) classifier for high accuracy and early detection.',
    tags: ['Python', 'Pandas', 'Numpy', 'Data Analysis', 'Scikit-learn', 'Data Visualization'],
    imageUrl: heartDisease,
    link: 'https://github.com/Azatbeki/Heart-Disease-Prediction',
    sourceCodeLink: 'https://github.com/Azatbeki/Heart-Disease-Prediction',
  },
  {
    title: 'Portfolio Website',
    description:
      'Interactive portfolio showcasing my projects, skills, and professional journey. Designed for seamless navigation, allowing visitors to explore my work, view source code, and easily connect with me.',
    tags: ['React', 'Resend', 'Tailwind', 'Typescript', 'Vercel'],
    imageUrl: portfolio,
    link: 'https://www.azatismailov.com/',
    sourceCodeLink: 'https://github.com/Azatbeki/portfolio',
  },
] as const;

export const skillsData = [
  // Technical Stack
  'SQL',
  'Python (pandas, NumPy, scikit-learn)',
  'Amplitude',
  'Optimizely',
  'Tableau',
  'Looker',
  'Power BI',

  // Analytics & Experimentation
  'A/B Testing',
  'Hypothesis Testing',
  'Regression Analysis',
  'Forecasting',
  'Cohort Analysis',
  'Funnel Optimization',
  'KPI Tracking & Reporting',
  'Data Storytelling',

  // ML & Cloud
  'Logistic Regression',
  'Churn Modeling',
  'Predictive Analytics',
  'Snowflake',
  'AWS Redshift',
  'dbt',
  'Git',
  'Airflow',
] as const;
