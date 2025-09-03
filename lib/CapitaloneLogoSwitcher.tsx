'use client';

import { useTheme } from '@/context/theme-context';

export default function CapitaloneLogoSwitcher() {
  const { theme } = useTheme();

  return (
    <img
      src={theme === 'dark' ? '/logos/capitalone-light.svg' : '/logos/capitalone-dark.svg'}
      alt="Capital One"
      className="w-full h-full object-contain p-2"
    />
  );
}
