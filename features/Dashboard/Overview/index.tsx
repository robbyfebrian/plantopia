'use client';

import React, { useEffect, useState } from 'react';
import { Progress } from '@/components/ui/progress';
import {
  ArrowRight,
  Flame,
  Leaf,
  Skull,
  TrendingUp,
  Trophy,
} from 'lucide-react';
import { Overview } from './type';

const OverviewSection: React.FC = () => {
  const [overview, setOverview] = useState<Overview | null>(null);
  const [progress, setProgress] = React.useState(13);

  useEffect(() => {
    async function fetchOverview() {
      const token = localStorage.getItem('token');
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/dashboard/overview`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      setOverview(data);

      if (data.user && data.user.xp) {
        setProgress(Math.round((data.user.xp / 500) * 100));
      }
    }
    fetchOverview();
  }, []);

  if (!overview) return null;

  return (
    <div className='relative flex flex-col'>
      <div className='absolute w-full bg-[#4E6148] h-64 rounded-br-[60px]'></div>
      <div className='relative z-19 text-white pl-20 pr-8 lg:px-16 py-9 w-screen md:max-w-6xl'>
        <h1 className='w-fit font-prata mb-2 text-3xl'>
          Halo, {overview.user.username}
        </h1>
        <p className='w-fit mb-4'>
          Level {overview.user.level} - Petani Pemula
        </p>
        <div className='flex gap-4 mb-4 flex-col md:flex-row md:items-center'>
          <Progress value={progress} className='w-[40%] md:w-[60%]' />
          <span className=''>{overview.user.xp} / 500 XP</span>
        </div>
        <div className='relative flex flex-col md:flex-row gap-8 md:gap-0 items-start w-full bg-white rounded-2xl h-fit border border-[#B5B5B5] py-6 px-5 mb-6'>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex items-center gap-4'>
              <div className='w-16 h-16 bg-[#4E6148] rounded-lg flex items-center justify-center'>
                <Flame size={40} className='text-white' />
              </div>
              <div>
                <h2 className='text-black font-bold text-lg'>Streak Aktif</h2>
                <p className='text-black font-medium text-sm'>
                  Kamu sudah aktif selama {overview.user.streakCount} hari
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start max-w-2xs'>
              <p className='text-black font-semibold'>
                Semakin lama kamu bertahan, semakin banyak hadiahnya!
              </p>
              <p className='text-[#B5B5B5] text-xs'>
                * Target berikutnya 5 hari berturut-turut untuk bonus badge!
              </p>
            </div>
          </div>
          <div className='hidden md:block absolute top-0 left-1/2 h-full bg-[#B5B5B5] w-[1px]'></div>
          <div className='flex flex-col md:pl-10 gap-4 w-full'>
            <div className='flex items-center gap-4'>
              <div className='w-16 h-16 bg-[#4E6148] rounded-lg flex items-center justify-center'>
                <Trophy size={36} className='text-white' />
              </div>
              <div>
                <h2 className='text-black font-bold text-lg'>
                  Achievement Terbuka
                </h2>
                <p className='text-black font-medium text-sm'>
                  {overview.lastAchievement
                    ? overview.lastAchievement.name
                    : '-'}
                </p>
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <p className='text-black font-semibold italic max-w-2xs'>
                {overview.lastAchievement
                  ? `“${overview.lastAchievement.description}”`
                  : ''}
              </p>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-6 md:px-8 w-full h-fit text-center'>
          <div className='w-full p-4 bg-white rounded-2xl border border-[#B5B5B5] flex flex-col justify-center items-center h-52'>
            <div className='w-16 h-16 bg-[#4E6148] rounded-lg flex items-center justify-center mb-1'>
              <Leaf size={28} className='text-white' />
            </div>
            <h2 className='text-black font-bold text-lg mb-1'>
              {overview.totalCollectedPlants} Tanaman Dikoleksi
            </h2>
            {/* Tambahkan info sehat/butuh perawatan jika ada di plantCollection */}
            <div className='flex gap-2 mb-2'>
              <p className='text-white font-medium text-sm px-3 py-1 bg-[#4E6148] rounded-xl'>
                {/* Contoh: hitung jumlah sehat */}
                {
                  overview.plantCollection.filter((p) => p.status === 'sehat')
                    .length
                }{' '}
                Sehat
              </p>
              <p className='text-white font-medium text-sm px-3 py-1 bg-[#E4B719] rounded-xl'>
                {/* Contoh: hitung jumlah butuh perawatan */}
                {
                  overview.plantCollection.filter(
                    (p) => p.status === 'butuh_perawatan'
                  ).length
                }{' '}
                Butuh Perawatan
              </p>
            </div>
            <p className='text-[#B5B5B5] text-xs'>
              * Target berikutnya 5 hari berturut-turut untuk bonus badge!
            </p>
          </div>
          <div className='w-full p-4 bg-white rounded-2xl border border-[#B5B5B5] flex flex-col justify-center items-center h-52'>
            <div className='w-16 h-16 bg-[#4E6148] rounded-lg flex items-center justify-center mb-1'>
              <Skull size={32} className='text-white' />
            </div>
            <h2 className='text-black font-bold text-lg mb-1'>
              {overview.totalDiseasesFound} dari 20 Penyakit Ditemukan
            </h2>
            <p className='text-black font-light text-sm'>
              “Terus eksplorasi untuk menjadi Ahli Daun!”
            </p>
          </div>
          <div className='w-full p-4 bg-white rounded-2xl border border-[#B5B5B5] flex flex-col justify-center items-center h-52'>
            <div className='w-16 h-16 bg-[#4E6148] rounded-lg flex items-center justify-center mb-1'>
              <TrendingUp size={36} className='text-white' />
            </div>
            <h2 className='text-black font-bold text-lg mb-1'>Misi Harian</h2>
            <div className='flex flex-col gap-2 w-full'>
              {overview.todayMissions.map((m, i) => (
                <div
                  key={i}
                  className='flex gap-2 items-center px-3 py-1 bg-[#4E6148] rounded-md'
                >
                  <ArrowRight size={16} className='text-white' />
                  <p className='text-white text-sm'>{m.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewSection;
