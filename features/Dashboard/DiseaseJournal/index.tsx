'use client';

import { Progress } from '@/components/ui/progress';
import SearchBar from 'components/common/search';
import { useEffect, useState } from 'react';
import DiseaseCard from './components/DiseaseCard';

const DiseaseJournalSection: React.FC = () => {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='relative flex flex-col'>
      <div className='absolute w-full bg-[#4E6148] h-[360px] md:h-[234px] rounded-br-[60px]'></div>
      <div className='relative flex flex-col gap-5 z-10 text-white px-20 lg:px-16 py-9'>
        <div className='flex flex-col items-start gap-2'>
          <h1 className='font-prata text-3xl'>Jurnal Penyakitmu</h1>
          <p>
            Catat dan pelajari semua jenis penyakit tanaman yang pernah kamu
            temukan. Semakin banyak kamu mendeteksi, semakin luas pengetahuanmu!
          </p>
        </div>
        <div className='flex flex-col gap-2'>
          <h2 className='font-semibold text-xl'>Kamu Menemukan 4 dari 10 Penyakit Terdaftar, Penuhi Jurnalmu!</h2>
          <Progress value={progress} className='w-[60%]' />
        </div>
        <SearchBar placeholder='Cari penyakit tanaman...' />
        <div className='flex flex-wrap gap-4 md:gap-6'>
        {Array.from({ length: 10 }).map((_, idx) => (
          <DiseaseCard
            key={idx}
            name={`Penyakit ${idx + 1}`}
            imageUrl='/images/dashboard__disease-1.jpg'
            detectedDate={idx < 4 ? `2024-06-0${idx + 1}` : undefined}
            sudahDitemukan={idx < 4}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default DiseaseJournalSection;
