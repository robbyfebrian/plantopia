import { SocialIcon } from 'react-social-icons';
import Button from '../common/button';
import 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className='bg-[#282828] min-h-min py-14 pl-16 text-white'>
      <div className='flex justify-between'>
        <div className='flex min-h-min flex-col justify-between'>
          <h3 className='font-prata text-4xl'>Plantopia</h3>
          <div>
            <p className='font-poppins font-light'>
              Copyright &copy; {new Date().getFullYear()}
            </p>
            <p className='font-poppins font-light'>Small change. Big change</p>
          </div>
        </div>
        <div className='flex flex-col min-w-[900px]'>
          <div className='flex pb-6 justify-between items-center'>
            <div className='flex gap-x-4 font-prata ml-2'>
              <Link
                href='/'
                className='min-w-[90px] relative after:content-[""] after:absolute after:-left-2 after:top-0 after:w-[2px] after:h-full after:scale-y-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-y-100'
              >
                Beranda
              </Link>
              <Link
                href='/deteksi'
                className='min-w-[90px] relative after:content-[""] after:absolute after:-left-2 after:top-0 after:w-[2px] after:h-full after:scale-y-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-y-100'
              >
                Deteksi
              </Link>
              <Link
                href='/forum'
                className='min-w-[90px] relative after:content-[""] after:absolute after:-left-2 after:top-0 after:w-[2px] after:h-full after:scale-y-0 after:bg-white after:transition-transform after:duration-500 hover:after:scale-y-100'
              >
                Forum
              </Link>
            </div>
            <div className='flex mr-16'>
              <Button
                label='Kontak Kami'
                onClick={() => console.log('Login clicked')}
                variant='primary'
              />
            </div>
          </div>
          <div className='min-w-[900px] border-b border-white'></div>
          <div className='flex gap-4 pt-4 justify-end items-center mr-16'>
            <SocialIcon
              bgColor='transparent'
              color='white'
              url='https://www.facebook.com/awan.anaepakrt.7'
            />
            <SocialIcon
              bgColor='transparent'
              color='white'
              url='https://www.instagram.com/kurniawan_bagaskara08/'
            />
            <SocialIcon
              bgColor='transparent'
              color='white'
              url='https://www.youtube.com/watch?v=qiGALeKc-6A'
            />
            <SocialIcon
              bgColor='transparent'
              color='white'
              url='http://github.com/Kurkur12'
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
