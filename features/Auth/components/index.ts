'use client';
import dynamic from 'next/dynamic';

export const ImageWrapper = dynamic(() => import('./ImageWrapper'), {
  ssr: false,
});

export const SignInSection = dynamic(() => import('./SignInForm'), {
  ssr: false,
});

export const SignUpSection = dynamic(() => import('./SignUpForm'), {
  ssr: false,
});
