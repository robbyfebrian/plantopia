'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Button from '../common/button';
import { navbarProps } from './type';
import { useUser, useClerk } from '@clerk/nextjs';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC<navbarProps> = ({ style = 'light' }) => {
  const { user, isSignedIn } = useUser();
  const { signOut } = useClerk();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isDark = style === 'dark';
  const textColor = isDark ? 'text-black' : 'text-white';
  const bgColor = isDark ? 'bg-white' : 'bg-transparent';
  const underlineColor = isDark ? 'after:bg-black' : 'after:bg-white';
  const iconColor = isDark ? 'text-black' : 'text-white';

  return (
    <>
      <nav className={`px-4 sm:px-6 md:px-16 py-4 sm:py-6 flex justify-between items-center ${bgColor} border-b ${isDark ? 'border-[#B5B5B5]' : 'border-transparent'} relative z-20`}>
        {/* Logo */}
        <div className={`text-2xl sm:text-3xl md:text-4xl font-prata ${textColor}`}>Plantopia</div>

        {/* Desktop Menu */}
        <div className={`hidden md:flex space-x-10 lg:space-x-16 items-center font-prata ${textColor}`}>
          <Link href='/' className={`relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 ${underlineColor} after:transition-transform after:duration-300 hover:after:scale-x-100`}>Beranda</Link>
          <Link href='/deteksi' className={`relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 ${underlineColor} after:transition-transform after:duration-300 hover:after:scale-x-100`}>Deteksi</Link>
          <Link href='/article' className={`relative after:content-[""] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:scale-x-0 ${underlineColor} after:transition-transform after:duration-300 hover:after:scale-x-100`}>Forum</Link>
        </div>

        {/* Desktop Auth */}
        <div className='hidden md:flex space-x-4 items-center'>
          {!isSignedIn ? (
            <Button label='Bergabung' href='/login' variant='primary' />
          ) : (
            <div className='relative'>
              <button
                className='px-4 py-2 rounded-full font-prata text-white flex items-center gap-2 bg-[#5D784F] hover:bg-[#34432f] transition-colors duration-300 shadow-[0_0_20px_rgba(93,120,79,0.6)]'
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className='truncate max-w-[100px]'>{user?.firstName || user?.username || 'Pengguna'}</span>
                <img
                  src={user?.imageUrl || '/default-profile.png'}
                  alt='profile'
                  className='w-6 h-6 rounded-full'
                />
              </button>
              {dropdownOpen && (
                <div className='absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg z-10'>
                  <Link href='/overview' className='block px-4 py-2 hover:bg-gray-100 text-black' onClick={() => setDropdownOpen(false)}>Dashboard</Link>
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

        {/* Hamburger Icon */}
        <button className={`md:hidden ${iconColor}`} onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* Drawer and overlay */}
      {menuOpen && (
        <div className='fixed inset-0 z-100 flex'>
          {/* Drawer */}
          <div
            className={`h-full w-[50vw] bg-white transform transition-transform duration-300 ease-in-out translate-x-0 shadow-lg z-40`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className='flex justify-between items-center px-4 py-4 border-b'>
              <span className='text-lg font-prata'>Menu</span>
              <button onClick={() => setMenuOpen(false)} className='text-black'>
                <X size={24} />
              </button>
            </div>
            <div className='flex flex-col font-prata p-4 space-y-4 text-sm text-black'>
              <Link href='/' onClick={() => setMenuOpen(false)}>Beranda</Link>
              <Link href='/deteksi' onClick={() => setMenuOpen(false)}>Deteksi</Link>
              <Link href='/article' onClick={() => setMenuOpen(false)}>Forum</Link>
              {!isSignedIn ? (
                <Link href='/login' onClick={() => setMenuOpen(false)}>
                  <Button label='Bergabung' variant='primary' />
                </Link>
              ) : (
                <>
                  <Link href='/overview' onClick={() => setMenuOpen(false)}>Dashboard</Link>
                  <button
                    onClick={async () => {
                      setMenuOpen(false);
                      await signOut();
                    }}
                    className='text-left w-full'
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Overlay */}
          <div
            className='w-1/2 h-full bg-black/20 backdrop-blur-[2px] transition-opacity duration-300 ease-in-out'
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
