'use client';
import dynamic from 'next/dynamic';

export const ImageWrapper = dynamic(() => import('./ImageWrapper'), {
  ssr: false,
});
