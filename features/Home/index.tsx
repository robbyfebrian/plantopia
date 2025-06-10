'use client';

import { ArrowDownCircle } from 'lucide-react';
import {
  HeroSection,
  FeatureSection,
  TestimonialSection,
  FaqSection,
  CtaSection,
} from './sections/index';

const HomeFeature: React.FC = () => {
  return (
    <main className='relative'>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <button className='sticky bottom-8 left-auto right-8 float-right z-40 mix-blend-difference'>
        <ArrowDownCircle color='white' size={100} strokeWidth={0.5} />
      </button>
    </main>
  );
};

export default HomeFeature;
