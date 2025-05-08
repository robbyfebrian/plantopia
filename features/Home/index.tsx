'use client';

import FeatureSection from './section/FeatureSection';
import HeroSection from './section/HeroSection';

const HomeFeature: React.FC = () => {
  return (
    <main className=''>
      <HeroSection />
      <FeatureSection />
    </main>
  );
};

export default HomeFeature;
