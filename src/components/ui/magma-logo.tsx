'use client';

import Image from 'next/image';

export function MagmaLogo() {
  return (
    <Image
      src="/magma.svg"
      alt="Magma"
      width={120}
      height={40}
      className="brightness-0 invert"
      style={{ filter: 'invert(1) brightness(0) saturate(100%) invert(92%) sepia(10%) saturate(1000%) hue-rotate(71deg) brightness(103%) contrast(103%)' }}
    />
  );
} 