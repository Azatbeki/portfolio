'use client';

import { useTheme } from '@/context/theme-context';

export default function MadDevsLogoSwitcher() {
  const { theme } = useTheme();

  return (
    <img src={theme === 'dark' ? '/maddevs-light.svg' : '/maddevs-dark.svg'} alt="Mad Devs" className="w-full h-full object-contain p-2" />
  );
}
