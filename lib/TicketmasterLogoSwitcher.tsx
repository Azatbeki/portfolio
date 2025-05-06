'use client';

import { useTheme } from '@/context/theme-context';

export default function TicketmasterLogoSwitcher() {
  const { theme } = useTheme();

  return (
    <img
      src={theme === 'dark' ? '/logos/ticketmaster-light.svg' : '/logos/ticketmaster-dark.svg'}
      alt="Ticketmaster"
      className="w-full h-full object-contain p-2"
    />
  );
}
