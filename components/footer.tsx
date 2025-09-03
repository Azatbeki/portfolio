'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/qr') return null;
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">&copy; 2025 Azat. All rights reserved.</small>
    </footer>
  );
}
