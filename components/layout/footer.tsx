'use client';

import { SocialIcon } from 'react-social-icons';
import Button from '../common/button';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#282828] text-white px-4 sm:px-6 md:px-16 py-8 sm:py-10">
      <div className="flex flex-col md:flex-row justify-between gap-y-10 md:gap-y-12">
        {/* Left Side */}
        <div className="flex flex-col justify-between items-center md:items-start text-center md:text-left">
          <h3 className="font-prata text-2xl sm:text-3xl md:text-4xl">Plantopia</h3>
          <div className="mt-4 md:mt-0 text-sm font-light font-poppins space-y-1">
            <p>&copy; {new Date().getFullYear()}</p>
            <p>Small change. Big change</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col w-full md:w-auto">
          {/* Top Nav + Button */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-y-4 sm:gap-y-0 text-sm sm:text-base">
            <div className="flex justify-center sm:justify-start gap-x-6 font-prata">
              <Link
                href="/"
                className="relative after:content-[''] after:absolute after:-left-2 after:top-0 after:w-[2px] after:h-full after:scale-y-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-y-100"
              >
                Beranda
              </Link>
              <Link
                href="/deteksi"
                className="relative after:content-[''] after:absolute after:-left-2 after:top-0 after:w-[2px] after:h-full after:scale-y-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-y-100"
              >
                Deteksi
              </Link>
              <Link
                href="/forum"
                className="relative after:content-[''] after:absolute after:-left-2 after:top-0 after:w-[2px] after:h-full after:scale-y-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-y-100"
              >
                Forum
              </Link>
            </div>
            <div className="flex justify-center sm:justify-end">
              <Button
                label="Kontak Kami"
                onClick={() => console.log('Kontak clicked')}
                variant="primary"
              />
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white mb-4" />

          {/* Social Icons */}
          <div className="flex justify-center sm:justify-end gap-3 sm:gap-4 flex-wrap">
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
              url=""
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
              url=""
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
              url=""
              style={{ height: 32, width: 32 }}
            />
            <SocialIcon
              bgColor="transparent"
              fgColor="white"
              url=""
              style={{ height: 32, width: 32 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
