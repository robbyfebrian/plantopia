'use client';

import {
  HeroSection,
  FeatureSection,
  TestimonialSection,
} from './section/index';

const HomeFeature: React.FC = () => {
  return (
    <main className=''>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
    </main>
  );
};

export default HomeFeature;
