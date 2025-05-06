'use client';

import { useTheme } from '@/context/theme-context';

export default function KpmgLogoSwitcher() {
  const { theme } = useTheme();

  return (
    <img
      src={theme === 'dark' ? '/logos/kpmg-light.svg' : '/logos/kpmg-dark.svg'}
      alt="KPMG"
      className="w-full h-full object-contain p-2"
    />
  );
}
