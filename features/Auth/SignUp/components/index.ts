'use client';
import dynamic from 'next/dynamic';

export const SignUpForm = dynamic(() => import('./SignUpForm'), {
  ssr: false,
});