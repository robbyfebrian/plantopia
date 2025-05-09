'use client';

import React from 'react';
import Button from '../common/button';

const Navbar: React.FC = () => {
  return (
    <nav className='px-16 py-10 flex justify-between items-center'>
      <div className='text-4xl font-prata text-white text-left '>Plantopia</div>
      <div className='flex space-x-16 justify-center items-center text-white font-prata'>
        <a
          href='#beranda'
          className='relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100'
        >
          Beranda
        </a>
        <a
          href='#deteksi'
          className='relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100'
        >
          Deteksi
        </a>
        <a
          href='#forum'
          className='relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100'
        >
          Forum
        </a>
        <a
          href='#belajar'
          className='relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100'
        >
          Belajar
        </a>
      </div>
      <div className='flex space-x-4'>
        <Button
          label='Bergabung'
          onClick={() => console.log('Login clicked')}
          variant='primary'
        />
      </div>
    </nav>
  );
};

export default Navbar;
