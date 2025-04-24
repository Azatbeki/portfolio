'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About', 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My journey into tech didn’t start with code — it started with curiosity. After graduating with a degree in Business Administration,
        I began my career as a Senior Consultant at KPMG. It was a fast-paced environment that taught me how to think critically, lead with
        clarity, and solve complex problems under pressure. But deep down, I knew I wanted to build things — not just audit them.
      </p>

      <p className="mb-3">
        Over the past 5 years, I’ve had the opportunity to work with teams at Ticketmaster and Mad Devs, building scalable, high-impact web
        applications used by thousands of people. I specialize in React, TypeScript, and modern frontend architecture, and I take pride in
        writing clean, maintainable code that not only works — but feels good to use.
      </p>

      <p className="mb-3">
        For me, programming is more than writing code. It’s creative problem-solving at scale — crafting something meaningful from scratch,
        shaping every interaction with intent, and knowing that real people rely on what you build.
      </p>

      <p className="mb-3">
        Outside of work, I’m a husband, a weekend road cyclist, and a regular on the local pickleball court. I love playing basketball,
        hiking the trails of the Bay Area, and dialing in espresso like a barista chasing the perfect cup. These aren’t just hobbies — they
        keep me grounded, teach me patience, and remind me of the joy of continuous improvement.
      </p>

      <p className="mb-3">
        At the end of the day, I’m someone who finds purpose in the process — whether that’s designing clean architecture, solving a UI
        challenge, or learning a better way to brew coffee. I’m always looking for new ways to grow, new things to build, and new teams to
        build them with.
      </p>
    </motion.section>
  );
}
