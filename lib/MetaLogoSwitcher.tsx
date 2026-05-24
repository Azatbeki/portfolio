'use client';

import { useTheme } from '@/context/theme-context';

export default function MetaLogoSwitcher() {
  const { theme } = useTheme();

  return (
    <img
      src={theme === 'dark' ? '/logos/meta-light.svg' : '/logos/meta-dark.svg'}
      alt="Meta"
      className="w-full h-full object-contain p-2"
    />
  );
}
