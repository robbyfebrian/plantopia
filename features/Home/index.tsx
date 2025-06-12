'use client';

import {
  HeroSection,
  FeatureSection,
  TestimonialSection,
  FaqSection,
  CtaSection,
} from './sections/index';
import ScrollUp from './components/ScrollUp';

const HomeFeature: React.FC = () => {
  return (
    <main className='relative'>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
      <ScrollUp />
    </main>
  );
};

export default HomeFeature;
