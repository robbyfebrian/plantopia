'use client';

import React from 'react';
import Link from 'next/link';
import Button from '../common/button';
import { navbarProps } from './type';

const Navbar: React.FC<navbarProps> = ({ style = 'light' }) => {
  return (
    <nav
      className={`px-16 py-10 flex justify-between items-center ${
        style === 'dark'
          ? 'bg-white border-b border-[#B5B5B5]'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`text-4xl font-prata text-left ${
          style === 'dark' ? 'text-black' : 'text-white'
        }`}
      >
        Plantopia
      </div>
      <div
        className={`flex space-x-16 justify-center items-center font-prata ${
          style === 'dark' ? 'text-black' : 'text-white'
        }`}
      >
        <Link
          href='/'
          className={`relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 ${
            style === 'dark' ? 'after:bg-black' : 'after:bg-white'
          } after:transition-transform after:duration-300 hover:after:scale-x-100`}
        >
          Beranda
        </Link>
        <Link
          href='/deteksi'
          className={`relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 ${
            style === 'dark' ? 'after:bg-black' : 'after:bg-white'
          } after:transition-transform after:duration-300 hover:after:scale-x-100`}
        >
          Deteksi
        </Link>
        <Link
          href='/forum'
          className={`relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 ${
            style === 'dark' ? 'after:bg-black' : 'after:bg-white'
          } after:transition-transform after:duration-300 hover:after:scale-x-100`}
        >
          Forum
        </Link>
      </div>
      <div className='flex space-x-4'>
        <Button label='Bergabung' href='login' variant='primary' />
      </div>
    </nav>
  );
};

export default Navbar;
