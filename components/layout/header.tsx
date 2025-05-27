'use client';

import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-6 px-10 flex items-center justify-between font-[prata]">
      {/* Logo */}
      <div className="text-2xl font-semibold text-black">
        Plantopia
      </div>

      {/* Navigation */}
      <nav className="flex space-x-12 text-lg text-black">
        <Link href="/" className="hover:underline underline-offset-4 decoration-1 transition">
          Beranda
        </Link>
        <Link href="/deteksi" className="underline underline-offset-4 decoration-1 font-medium">
          Deteksi
        </Link>
        <Link href="/forum" className="hover:underline underline-offset-4 decoration-1 transition">
          Forum
        </Link>
        <Link href="/belajar" className="hover:underline underline-offset-4 decoration-1 transition">
          Belajar
        </Link>
      </nav>

      {/* Button Daftar */}
      <Link href="/daftar">
        <button className="bg-[#495C43] text-white px-8 py-2 rounded-full text-base shadow-md hover:bg-[#3d4f39] transition">
          Daftar
        </button>
      </Link>
    </header>
  );
};

export default Header;
