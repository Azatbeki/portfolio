'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const { theme } = useTheme();

  console.log('Current theme:', theme); // Debug log

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg">
        {skillsData.map((skill, index) => (
          <motion.li
            className={`rounded-xl px-5 py-3 cursor-pointer border ${
              theme === 'light' ? '!bg-white/80 !text-gray-800 !border-gray-200' : '!bg-stone-800/75 !text-white !border-stone-600'
            }`}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{
              scale: 1.1,
              backgroundColor: theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.2)',
            }}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
