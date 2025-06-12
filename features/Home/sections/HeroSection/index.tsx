import Image from 'next/image';
import Navbar from '../../../../components/layout/navbar';
import HeroImage from '../../../../public/images/hero__background.jpg';
import DiseaseOne from '../../../../public/images/hero__disease-1.png';
import DiseaseTwo from '../../../../public/images/hero__disease-2.png';
import DiseaseThree from '../../../../public/images/hero__disease-3.png';
import { ArrowDownCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className='h-screen relative'>
      <Image
        alt='hero-background'
        src={HeroImage}
        className='object-cover h-full absolute inset-0 -z-10 overflow-hidden'
      />
      <div className='absolute inset-0 bg-gradient-to-r from-[#171717]/80 to-[#171717]/20 -z-10' />
      <Navbar />
      <div className='flex flex-col px-4 h-[80vh] items-center justify-center gap-6 md:gap-8 text-center'>
        <div className='flex justify-center items-center gap-6'>
          <div className='relative flex justify-center items-center rounded-full w-12 h-12 md:w-16 md:h-16 shadow-[0_0_20px_rgba(93,120,79,0.6)]'>
            <Image alt='disease-1' src={DiseaseOne} className='' />
          </div>
          <div className='flex justify-center items-center rounded-full w-12 h-12 md:w-16 md:h-16 shadow-[0_0_20px_rgba(93,120,79,0.6)] overflow-hidden'>
            <Image alt='disease-2' src={DiseaseTwo} className='' />
          </div>
          <div className='flex justify-center items-center rounded-full w-12 h-12 md:w-16 md:h-16 shadow-[0_0_20px_rgba(93,120,79,0.6)] overflow-hidden'>
            <Image alt='disease-3' src={DiseaseThree} className='' />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 md:gap-8'>
          <h1 className='font-prata text-5xl md:text-7xl text-white max-w-[1080] leading-normal md:leading-20'>
            “Tanaman Sehat Dimulai dari Satu Langkah Kecil”
          </h1>
          <p className='font-poppins font-light text-xl md:text-2xl text-white'>
            Mulai perjalananmu mengenali, merawat, dan melindungi tanaman dari
            penyakit.
          </p>
        </div>
        <button
          onClick={() => (window.location.href = '/deteksi')}
          className='relative flex justify-center items-center mx-auto w-[240px] md:w-[300px] h-[100px] md:h-[120px] bg-black/40 rounded-2xl shadow-[0_0_8px_white]'
        >
          <div className='absolute -top-[1px] -left-[1px] w-1/4 h-1/3 border-t-2 border-l-2 border-white rounded-tl-2xl'>
            <div className='absolute -bottom-[4px] -left-[5px] w-2 h-2 bg-white rotate-45'></div>
            <div className='absolute -top-[5px] -right-[4px] w-2 h-2 bg-white rotate-45'></div>
          </div>
          <div className='absolute -top-[1px] -right-[1px] w-1/4 h-1/3 border-t-2 border-r-2 border-white rounded-tr-2xl'>
            <div className='absolute -bottom-[4px] -right-[5px] w-2 h-2 bg-white rotate-45'></div>
            <div className='absolute -top-[5px] -left-[4px] w-2 h-2 bg-white rotate-45'></div>
          </div>
          <div className='absolute -bottom-[1px] -left-[1px] w-1/4 h-1/3 border-b-2 border-l-2 border-white rounded-bl-2xl'>
            <div className='absolute -top-[4px] -left-[5px] w-2 h-2 bg-white rotate-45'></div>
            <div className='absolute -bottom-[5px] -right-[4px] w-2 h-2 bg-white rotate-45'></div>
          </div>
          <div className='absolute -bottom-[1px] -right-[1px] w-1/4 h-1/3 border-b-2 border-r-2 border-white rounded-br-2xl'>
            <div className='absolute -top-[4px] -right-[5px] w-2 h-2 bg-white rotate-45'></div>
            <div className='absolute -bottom-[5px] -left-[4px] w-2 h-2 bg-white rotate-45'></div>
          </div>
          <p className='font-prata text-lg md:text-2xl text-white max-w-44'>
            Deteksi Sekarang
          </p>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
