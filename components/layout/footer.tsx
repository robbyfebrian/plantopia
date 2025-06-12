'use client';

import { SocialIcon } from 'react-social-icons';
import Button from '../common/button';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#282828] text-white min-h-min py-14 px-4 sm:px-6 md:px-16 sm:py-10'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-y-10 md:gap-y-12'>
        <div className='flex max-w-fit flex-col gap-4 justify-center lg:justify-between items-center text-center md:text-left'>
          <h3 className='font-prata text-2xl sm:text-3xl md:text-4xl'>
            Plantopia
          </h3>
          <div className='md:mt-4 text-sm font-light font-poppins space-y-1'>
            <p>&copy; {new Date().getFullYear()}</p>
            <p className='w-fit'>Small change. Big change</p>
          </div>
        </div>
        <div className='flex flex-col w-full md:w-auto'>
          <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-8 sm:gap-y-8 text-sm sm:text-base'>
            <div className='flex justify-center sm:justify-start gap-x-6 font-prata'>
              <Link
                href='/'
                className="relative after:content-[''] after:absolute after:-left-2 after:top-0 after:w-[2px] after:h-full after:scale-y-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-y-100"
              >
                Beranda
              </Link>
              <Link
                href='/deteksi'
                className="relative after:content-[''] after:absolute after:-left-2 after:top-0 after:w-[2px] after:h-full after:scale-y-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-y-100"
              >
                Deteksi
              </Link>
              <Link
                href='/forum'
                className="relative after:content-[''] after:absolute after:-left-2 after:top-0 after:w-[2px] after:h-full after:scale-y-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-y-100"
              >
                Forum
              </Link>
            </div>
            <div className='flex justify-center sm:justify-end'>
              <Button
                label='Kontak Kami'
                onClick={() => console.log('Kontak clicked')}
                variant='primary'
              />
            </div>
          </div>
          <div className='hidden md:block lg:min-w-[900px] border-b border-white'></div>
          <div className='flex gap-4 pt-4 justify-end items-center'>
            <SocialIcon
              bgColor='transparent'
              fgColor='white'
              url='https://www.facebook.com/awan.anaepakrt.7'
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              bgColor='transparent'
              fgColor='white'
              url='https://www.instagram.com/kurniawan_bagaskara08/'
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              bgColor='transparent'
              fgColor='white'
              url='https://www.youtube.com/watch?v=qiGALeKc-6A'
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              bgColor='transparent'
              fgColor='white'
              url='http://github.com/Kurkur12'
              style={{ height: 32, width: 32 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
