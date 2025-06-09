'use client';

import Sidebar from '../../../components/layout/sidebar';
import Navbar from '../../../components/layout/navbar';
import { Home, Leaf, BookOpen, Trophy, Target } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar style='dark'/>
      <div className='flex flex-1'>
        <Sidebar
          buttonLabel='Tambah Data'
          onButtonClick={() => alert('Button clicked!')}
          navItems={[
            { label: 'Overview', href: '/overview', icon: <Home size={18} /> },
            {
              label: 'Koleksi Tanaman',
              href: '/plant-collection',
              icon: <Leaf size={18} />,
          },
            {
              label: 'Jurnal Penyakit',
              href: '/disease-journal',
              icon: <BookOpen size={18} />,
            },
            {
              label: 'Pencapaian',
              href: '/achievement',
              icon: <Trophy size={18} />,
            },
            { label: 'Misi', href: '/mission', icon: <Target size={18} /> },
          ]}
        />
        <main className='flex-1 bg-gray-50'>{children}</main>
      </div>
    </div>
  );
}
