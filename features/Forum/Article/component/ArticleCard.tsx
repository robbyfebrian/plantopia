'use client';

import Image from 'next/image';
import {
  Brain,
  Leaf,
  PencilLine,
  ArrowUp,
  ArrowDown,
  Bookmark,
  Link2,
} from 'lucide-react';
import { ArticleCardProps } from '../../Article/component/type';

const ArticleCard = ({
  title,
  date,
  authorImg,
  plantImg,
  upvotes,
}: ArticleCardProps) => {
  return (
    <div className='max-w-xs w-full rounded-3xl shadow-md border p-4 bg-white space-y-4'>
      {/* Top Section: Avatar + Icons */}
      <div className='flex items-center gap-4'>
        {/* Avatar */}
        <Image
          src={authorImg}
          alt='Author'
          width={40}
          height={40}
          className='rounded-full'
        />

        {/* Icons */}
        <div className='flex gap-2'>
          {[Brain, Leaf, PencilLine].map((Icon, index) => (
            <div key={index} className='relative w-8 h-8 flex justify-center items-center'>
              <Image
                src='/images/dashboard__polygon-3.png'
                alt='Polygon'
                width={64}
                height={64}
                className='absolute'
              />
              <Icon size={18} color='white' className='relative z-10' />
            </div>
          ))}
        </div>
      </div>

      {/* Title + Date */}
      <div>
        <h3 className='text-base font-semibold leading-snug'>{title}</h3>
        <p className='text-sm text-gray-400 mt-1'>{date}</p>
      </div>

      {/* Plant Image */}
      <div className='rounded-xl overflow-hidden'>
        <Image
          src={plantImg}
          alt='Plant'
          width={400}
          height={250}
          className='object-cover w-full h-48'
        />
      </div>

      {/* Footer: Upvote + Actions */}
      <div className='flex items-center justify-between'>
        {/* Upvote Section */}
        <div className='flex items-center px-4 py-2 rounded-[8px] bg-[#4A6343] shadow-md space-x-3 text-white'>
          <ArrowUp size={20} />
          <span className='text-sm font-medium'>{upvotes}</span>
          <ArrowDown size={20} />
        </div>

        {/* Bookmark & Link */}
        <div className='flex items-center space-x-3 text-[#4A6343]'>
          <Bookmark size={20} className='cursor-pointer drop-shadow-sm' />
          <Link2 size={20} className='cursor-pointer drop-shadow-sm' />
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
