'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.8);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-36"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey into data science didn’t begin with machine learning — it started with problem-solving. After earning my degree in
        Business Administration, I began as a Financial Analyst at KPMG, where I learned to dissect complex data, build financial models,
        and make clear recommendations under pressure. But I soon realized I wanted to go deeper: not just analyze outcomes, but shape them
        with data-driven products.
      </p>

      <p className="mb-3">
        Over the past 3+ years, I’ve grown into a Data Scientist specializing in product analytics, experimentation, and applied machine
        learning. At Capital One Shopping, I’ve worked on analyzing large-scale user event data, designing A/B tests, and building
        predictive models to support retention and product strategy. My toolkit includes Python, SQL, ML, Tableau, and cloud platforms like
        AWS and Databricks — but more importantly, I focus on translating complex data into actionable insights that guide decision-making.
      </p>

      <p className="mb-3">
        For me, data science is about more than algorithms. It’s about curiosity, experimentation, and creating meaningful impact — whether
        that’s optimizing user journeys, deploying predictive models, or scaling analytics frameworks that empower teams.
      </p>

      <p className="mb-3">
        Outside of work, I’m a husband, a weekend hiker, and a regular on the pickleball court. Sports and hobbies keep me grounded,
        teaching patience and continuous improvement — values I bring back into every project and model I build.
      </p>
    </motion.section>
  );
}
