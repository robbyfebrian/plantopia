'use client';

import { Progress } from '@/components/ui/progress';
import SearchBar from 'components/common/search';
import { useEffect, useState } from 'react';
import AchievementCard from './components/AchievementCard';
import { Brain } from 'lucide-react';

const AchievementSection: React.FC = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative flex flex-col'>
      <div className='absolute w-full bg-[#4E6148] h-60 rounded-br-[60px]'></div>
      <div className='relative flex flex-col gap-5 z-10 text-white px-16 py-9'>
        <div className='flex flex-col items-start gap-2'>
          <h1 className='font-prata text-3xl'>Lencana Prestasimu</h1>
          <p>
            Lihat pencapaian yang telah kamu raih selama mendeteksi tanaman.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='font-semibold text-xl'>
            Kamu telah menemukan 4 dari 10 Lencana Prestasi. Raih semua lencana
            prestasi dan jadilah ahli tanaman sejati!
          </h2>
          <Progress value={progress} className='w-[60%]' />
        </div>
        <SearchBar placeholder='Cari Lencana...' />
        <div className='flex flex-wrap gap-6'>
          {Array.from({ length: 10 }).map((_, idx) => (
            <AchievementCard
              key={idx}
              name={`Achievement ${idx + 1}`}
              description={`Deskripsi untuk lencana ${idx + 1}`}
              icon={<Brain size={32} />}
              achieved={idx < 4}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
