'use client';

import {
  HeroSection,
  FeatureSection,
  TestimonialSection,
  FaqSection,
  CtaSection,
} from './section/index';

const HomeFeature: React.FC = () => {
  return (
    <main className=''>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
};

export default HomeFeature;
