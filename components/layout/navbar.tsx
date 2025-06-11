'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../common/button';
import { navbarProps } from './type';
import { useUser, useClerk } from '@clerk/nextjs';

const Navbar: React.FC<navbarProps> = ({ style = 'light' }) => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav
      className={`px-16 py-6 flex justify-between items-center ${
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
          href='/article'
          className={`relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 ${
            style === 'dark' ? 'after:bg-black' : 'after:bg-white'
          } after:transition-transform after:duration-300 hover:after:scale-x-100`}
        >
          Forum
        </Link>
      </div>
      <div className='flex space-x-4 items-center'>
        {!isSignedIn ? (
          <Button label='Bergabung' href='/login' variant='primary' />
        ) : (
          <div className='relative'>
            <button
              className='px-6 py-2 rounded-full font-prata text-white flex items-center gap-2 bg-[#5D784F] hover:bg-[#34432f] focus:ring-green-700 transition-colors duration-300 shadow-[0_0_20px_rgba(93,120,79,0.6)]'
              onClick={() => setDropdownOpen((v) => !v)}
            >
              <span>{user?.firstName || user?.username || 'Pengguna'}</span>
              <img
                src={user?.imageUrl || '/default-profile.png'}
                alt='profile'
                className='w-6 h-6 rounded-full'
              />
            </button>
            {dropdownOpen && (
              <div className='absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10'>
                <Link
                  href='/overview'
                  className='block px-4 py-2 hover:bg-gray-100 text-black'
                  onClick={() => setDropdownOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  className='block w-full text-left px-4 py-2 hover:bg-gray-100 text-black'
                  onClick={async () => {
                    setDropdownOpen(false);
                    await signOut();
                  }}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;