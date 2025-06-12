'use client';

import clsx from 'clsx';
import { CalendarCheck } from 'lucide-react';
import { MissionCardProps } from './type';
import Image from 'next/image';

const MissionCard: React.FC<MissionCardProps> = ({
  title,
  description,
  exp,
  completed,
}) => {

  return (
    <div
      className={clsx(
        'relative flex text-start items-center justify-center flex-col rounded-xl p-4 w-60 h-40 shadow-sm border transition-all',
        completed
          ? 'bg-[#4E6148] text-white border-[#4E6148]'
          : 'bg-white text-gray-300 border border-gray-200'
      )}
    >
      <div className='flex items-center gap-2 mb-2'>
        <div
          className={clsx(
            'relative w-10 h-10 flex items-center justify-center',
            completed
              ? ' text-[#4E6148]'
              : 'bg-transparent border border-gray-300'
          )}
        >
          <Image
            src="/images/dashboard__polygon-1.svg"
            alt="Polygon"
            width={64}
            height={64}
            className={clsx(
              'absolute',
              completed ? 'opacity-100' : 'opacity-40'
            )}
          />
          <CalendarCheck
            size={24}
            className={completed ? 'relative text-[#4E6148]' : 'text-gray-300'}
          />
        </div>
        {/* <span
          className={clsx(
            'text-sm font-semibold',
            completed ? 'text-white' : 'text-gray-300'
          )}
        >
          +{exp} Exp
        </span> */}
      </div>

      {/* Title */}
      <h4
        className={clsx(
          'font-semibold text-xl mb-1',
          completed ? 'text-white' : 'text-gray-300'
        )}
      >
        {title}
      </h4>

      {/* Description */}
      <p
        className={clsx(
          'text-sm',
          completed ? 'text-white/90' : 'text-gray-300'
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default MissionCard;
