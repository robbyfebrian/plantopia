'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Search from 'components/common/search';
import { Calendar, CircleAlert, Share2 } from 'lucide-react';
import PlantCard from './components/PlantCard';

const PlantCollectionSection: React.FC = () => {
  return (
    <div className='relative flex flex-col'>
      <div className='absolute w-full bg-[#4E6148] h-[277px] rounded-br-[60px]'></div>
      <div className='relative z-19 text-white px-16 py-9'>
        <div className='flex flex-col items-start gap-2 mb-8'>
          <h1 className='font-prata text-3xl'>Koleksi Tanamanmu</h1>
          <p>
            Ini adalah kumpulan tanaman terbaru yang telah kamu deteksi. Rawat
            dan pantau kesehatannya secara berkala!
          </p>
        </div>
        <div className='flex items-center mb-9'>
          <Carousel className='w-full max-w-xs'>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Card className='border border-[#B5B5B5] rounded-2xl size-[282px] py-0'>
                    <CardContent className='flex aspect-square items-center justify-center p-6'>
                      <span className='text-4xl font-semibold'>
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious variant={'secondary'} />
            <CarouselNext variant={'secondary'} />
          </Carousel>
          <div className='ml-13 p-4 bg-white rounded-2xl border border-[#B5B5B5] w-full'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <div className='flex justify-between items-center'>
                  <h2 className='text-black font-semibold text-2xl'>
                    Kaktus Mamat
                  </h2>
                  <div className='flex gap-2'>
                    <Button className='bg-[#E4B719] h-8 text-white hover:bg-[#BE9810] focus:ring-green-700 transition-colors duration-300 rounded-lg'>
                      <CircleAlert size={16} className='inline' />
                      Perlu Penanganan
                    </Button>
                    <Button className='bg-[#4E6148] h-8 w-8 text-white hover:bg-[#34432f] focus:ring-green-700 transition-colors duration-300 rounded-lg'>
                      <Share2 size={16} className='inline' />
                    </Button>
                  </div>
                </div>
                <div className='text-[#B5B5B5] font-light flex items-center'>
                  <Calendar size={16} className='inline mr-2' />
                  <span>09 Februari 2025</span>
                </div>
              </div>
              <div className='flex flex-col gap-2 text-black'>
                <h3 className='font-semibold'>
                  Penyakit Leaf Spot (Bercak Daun)
                </h3>
                <p className='text-sm'>
                  Leaf Spot adalah penyakit jamur yang umum terjadi pada tanaman
                  hias tropis. Penyebarannya dipercepat oleh kelembapan berlebih
                  dan kurangnya sirkulasi udara.
                </p>
              </div>
              <div className='flex items-center gap-2 flex-wrap text-[#4E6148] text-sm'>
                <div className='px-4 py-2 bg-[#5D784F]/10 border border-[#4E6148] rounded-lg'>
                  <p>Pangkas daun yang terinfeksi</p>
                </div>
                <div className='px-4 py-2 bg-[#5D784F]/10 border border-[#4E6148] rounded-lg'>
                  <p>Kurangi penyiraman berlebih</p>
                </div>
                <div className='px-4 py-2 bg-[#5D784F]/10 border border-[#4E6148] rounded-lg'>
                  <p>Gunakan fungisida organik (misal: neem oil)</p>
                </div>
                <div className='px-4 py-2 bg-[#5D784F]/10 border border-[#4E6148] rounded-lg'>
                  <p>Pastikan sirkulasi udara baik</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className='font-prata text-black text-3xl mb-6'>
          Jelajahi Koleksimu dengan Lebih Lengkap!
        </h2>
        <Search placeholder='Cari...' className='mb-6' />
        <div className='flex flex-wrap gap-7'>
          {Array.from({ length: 8 }).map((_, index) => (
            <PlantCard
              key={index}
              name={`Tanaman ${index + 1}`}
              dateAdded={`01 Januari 2025`}
              imageUrl={`/images/detect__input-image.jpg`}
              condition={index % 2 === 0 ? 'Sehat' : 'Perlu Penanganan'}
              onClick={() => console.log(`Clicked on Tanaman ${index + 1}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantCollectionSection;
