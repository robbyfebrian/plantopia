'use client';

import {
  HeroSection,
  FeatureSection,
  TestimonialSection,
  FaqSection,
} from './section/index';

const HomeFeature: React.FC = () => {
  return (
    <main className=''>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
};

export default HomeFeature;
