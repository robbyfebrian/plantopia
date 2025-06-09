'use client';
import dynamic from 'next/dynamic';

export const SignInForm = dynamic(() => import('./SignInForm'), {
  ssr: false,
});
