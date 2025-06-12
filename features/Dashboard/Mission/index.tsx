'use client';

import { useState } from 'react';
import MissionTabs from './components/MissionTabs';
import MissionCard from './components/MissionCard';
import {
  CalendarCheck,
  Compass,
  CalendarRange,
  Medal,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { MissionTab, MissionTabItem, MissionData } from './components/type';

const tabItems: MissionTabItem[] = [
  { label: 'Harian', icon: <CalendarCheck size={16} /> },
  { label: 'Mingguan', icon: <CalendarRange size={16} /> },
  { label: 'Milestone', icon: <Medal size={16} /> },
  { label: 'Eksploratif', icon: <Compass size={16} /> },
];

const missions: Record<MissionTab, MissionData[]> = {
  Harian: [
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: true,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
  ],
  Mingguan: [
    {
      title: 'Deteksi Mingguan',
      description: 'Lakukan 5 deteksi minggu ini',
      exp: 50,
      completed: true,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
  ],
  Milestone: [
    {
      title: 'Deteksi ke-100',
      description: 'Lakukan deteksi ke-100',
      exp: 100,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
  ],
  Eksploratif: [
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: true,
    },
    {
      title: 'Coba fitur baru',
      description: 'Gunakan fitur artikel komunitas',
      exp: 30,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
    {
      title: 'Coba fitur baru',
      description: 'Gunakan fitur artikel komunitas',
      exp: 30,
      completed: false,
    },
    {
      title: 'Deteksi Hari Ini',
      description: 'Lakukan 1 deteksi hari ini',
      exp: 10,
      completed: false,
    },
  ],
};

const tabDescriptions: Record<MissionTab, string> = {
  Harian: 'Tugas ringan yang bisa diselesaikan setiap hari',
  Mingguan: 'Tantangan berulang setiap minggu dengan reward lebih besar',
  Milestone:
    'Pencapaian penting yang bersifat satu kali, seperti level-up atau rekor',
  Eksploratif:
    'Misi yang mendorong pengguna untuk mencoba fitur baru atau menjelajahi lebih luas',
};

const MissionSection = () => {
  const [selectedTabs, setSelectedTabs] = useState<MissionTab[]>(['Harian']);
  const [openSections, setOpenSections] = useState<MissionTab[]>(['Harian']);

  const handleSelectTab = (tab: MissionTab) => {
    setSelectedTabs((prev) =>
      prev.includes(tab) ? prev.filter((t) => t !== tab) : [...prev, tab]
    );
  };

  const toggleSection = (tab: MissionTab) => {
    setOpenSections((prev) =>
      prev.includes(tab) ? prev.filter((t) => t !== tab) : [...prev, tab]
    );
  };

  return (
    <div className='relative flex flex-col'>
      <div className='absolute w-full bg-[#4E6148] h-52 md:h-32 rounded-br-[60px]'></div>
      <div className='relative z-10 text-white pl-20 pr-8 lg:px-16 py-9'>
        <div className='flex flex-col items-start gap-2 mb-10'>
          <h1 className='w-80 md:w-full font-prata text-3xl'>
            Misi Harian & Tantangan Spesial
          </h1>
          <p className='w-80 md:w-full'>
            Tingkatkan levelmu dan raih badge dengan menyelesaikan misi merawat
            tanaman setiap hari.
          </p>
        </div>

        <MissionTabs
          selected={selectedTabs}
          onSelect={handleSelectTab}
          tabItems={tabItems}
        />

        {tabItems.map(({ label }) => {
          const isActive = selectedTabs.includes(label as MissionTab);
          if (!isActive) return null;

          const isOpen = openSections.includes(label as MissionTab);

          return (
            <div key={label} className='mb-6 relative'>
              <button
                type='button'
                onClick={() => toggleSection(label as MissionTab)}
                className='relative z-20 mb-2 w-full flex items-center justify-between border border-[#4E6148] text-[#4E6148] bg-[#EFF1ED] px-4 py-2 rounded-md font-semibold'
              >
                <span>
                  {label} –{' '}
                  <span className='italic font-normal text-sm'>
                    {tabDescriptions[label as MissionTab]}
                  </span>
                </span>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isOpen && (
                <div className='w-fit relative left-0 z-10 -top-2 flex gap-3 justify-center md:justify-center flex-wrap border border-[#E1E1E1] shadow-[0_0_12px_rgba(0,0,0,0.2)] px-3 py-4 mx-3 rounded-b-xl'>
                  {missions[label as MissionTab]?.map((mission, idx) => (
                    <MissionCard key={idx} {...mission} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MissionSection;
