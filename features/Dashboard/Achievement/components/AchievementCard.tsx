'use client';

import clsx from 'clsx';
import { AchievementCardProps } from './type';
import { getLucideIcon } from 'lib/getLucideIcon';
import Image from 'next/image';
import Polygon from 'public/images/dashboard__polygon-2.svg'

export default function AchievementCard({
  name,
  description,
  icon,
  achieved,
}: AchievementCardProps) {
  return (
    <div
      className={clsx(
        'rounded-xl p-6 w-80 h-40 flex flex-col items-center justify-center shadow-[0_0_4px_rgba(0,0,0,0.2)]',
        achieved
          ? 'bg-[#4e6148] text-white border-[#B5B5B5]/40'
          : 'bg-white border border-[#B5B5B5]/40'
      )}
    >
      <div className='mb-3 relative w-12 h-12 flex items-center justify-center'>
        <Image
          src={Polygon}
          alt='Polygon'
          className='absolute'
        />
        {
          <span
            className={clsx(
              'transition-all',
              achieved ? 'text-white' : 'text-[#B5B5B5]/40'
            )}
          >
            {getLucideIcon(icon, achieved)}
          </span>
        }
      </div>
      <h3
        className={clsx(
          'text-xl font-semibold',
          achieved ? 'text-white' : 'text-[#B5B5B5]/40'
        )}
      >
        {name}
      </h3>
      <p
        className={clsx('text-xs text-center', achieved ? '' : 'text-gray-300')}
      >
        {description}
      </p>
    </div>
  );
}
