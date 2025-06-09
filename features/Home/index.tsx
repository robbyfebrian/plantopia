'use client';

import {
  HeroSection,
  FeatureSection,
  TestimonialSection,
  FaqSection,
  CtaSection,
} from './sections/index';

const HomeFeature: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <TestimonialSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
};

export default HomeFeature;
