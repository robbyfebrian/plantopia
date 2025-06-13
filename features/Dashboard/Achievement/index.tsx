'use client';

import { Progress } from '@/components/ui/progress';
import SearchBar from 'components/common/search';
import { useEffect, useState } from 'react';
import AchievementCard from './components/AchievementCard';
import { Achievement } from './type';

const AchievementSection: React.FC = () => {
  const [achievements, setAchievements] = useState<Achievement[]>([]);
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    async function fetchAchievements() {
      const token = localStorage.getItem('token');
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/dashboard/achievement`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      setAchievements(data);
      setProgress(
        Math.round(
          (data.filter((a: Achievement) => a.achieved).length / data.length) *
            100
        )
      );
    }
    fetchAchievements();
  }, []);

  return (
    <div className='relative flex flex-col'>
      <div className='absolute w-full bg-[#4E6148] h-[268px] md:h-60 rounded-br-[60px]'></div>
      <div className='relative flex flex-col gap-5 z-10 text-white pl-20 pr-17 lg:px-16 py-9'>
        <div className='flex flex-col items-start gap-2'>
          <h1 className='font-prata text-3xl'>Lencana Prestasimu</h1>
          <p>
            Lihat pencapaian yang telah kamu raih selama mendeteksi tanaman.
          </p>
        </div>
        <div className='flex flex-col gap-2'>
            <h2 className='font-semibold text-sm md:text-xl'>
            Kamu telah menemukan {achievements.filter((a) => a.achieved).length} dari {achievements.length} Lencana Prestasi. Raih semua lencana
            prestasi dan jadilah ahli tanaman sejati!
            </h2>
          <Progress value={progress} className='w-[60%]' />
        </div>
        <SearchBar placeholder='Cari Lencana...' />
        <div className='flex flex-wrap gap-6'>
          {achievements.map((ach) => (
            <AchievementCard
              key={ach.id}
              name={ach.name}
              description={ach.description}
              icon={ach.iconUrl}
              achieved={ach.achieved}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementSection;
