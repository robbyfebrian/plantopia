'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const slides = [
  {
    image: require('../../../../public/images/auth__figure-1.jpg'),
    title: 'Cegah Hama Sejak Dini',
    desc: 'Memeriksa daun dan batang secara rutin serta menjaga kebersihan lingkungan tanaman dapat mencegah serangan hama dan penyakit.',
  },
  {
    image: require('../../../../public/images/auth__figure-2.jpg'),
    title: 'Rawat Tanamanmu Setiap Hari',
    desc: 'Penyiraman dan pemupukan yang tepat waktu membantu tanaman tumbuh sehat dan subur.',
  },
];

const ImageWrapper: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className='relative w-1/2 h-full flex items-center justify-center overflow-hidden'>
      <div className='relative w-full h-full'>
        <AnimatePresence>
          <motion.div
            key={`image-${prevIndex}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='absolute inset-0 w-full h-full'
          >
            <Image
              src={slides[prevIndex].image}
              alt='Prev Auth Image'
              className='object-cover w-full h-full'
              fill
              priority={false}
              loading='lazy'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-[#171717]/20 to-[#171717]' />
          </motion.div>
        </AnimatePresence>

        <motion.div
          key={`image-${index}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className='absolute inset-0 w-full h-full'
        >
          <Image
            src={slides[index].image}
            alt='Active Auth Image'
            className='object-cover w-full h-full'
            fill
            priority={false}
            loading='lazy'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-[#171717]/20 to-[#171717]' />
        </motion.div>

        <AnimatePresence mode='wait'>
          <motion.div
            key={`text-${index}`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='absolute bottom-8 inset-x-0 text-white px-12'
          >
            <h1 className='text-3xl font-semibold text-start'>
              {slides[index].title}
            </h1>
            <p className='text-start mt-2'>{slides[index].desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ImageWrapper;
