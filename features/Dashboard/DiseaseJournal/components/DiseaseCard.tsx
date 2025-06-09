'use client';

import Image from 'next/image';
import clsx from 'clsx';
import { DiseaseCardProps } from './type';

export default function DiseaseCard({
  name,
  imageUrl,
  detectedDate,
  sudahDitemukan,
}: DiseaseCardProps) {
  return (
    <div
      className={clsx(
        'relative group w-48 h-48 rounded-xl overflow-hidden shadow-md transition-all flex items-center justify-center',
        sudahDitemukan ? 'bg-white border border-gray-200' : 'bg-[#4E6148]'
      )}
    >
      <div className='relative w-44 h-44'>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className={clsx(
            'object-cover transition rounded-lg duration-300 ease-in-out transform group-hover:scale-110',
            sudahDitemukan ? '' : 'blur-[1px] grayscale'
          )}
        />
      </div>
      <div className='absolute inset-0 flex flex-col justify-center items-center bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity'>
        <p className='text-lg font-semibold'>{name}</p>
        <p className='text-xs text-light max-w-32 text-center'>
          {sudahDitemukan
            ? `Dideteksi pada ${detectedDate}`
            : 'Belum Pernah Dideteksi'}
        </p>
      </div>
    </div>
  );
}
