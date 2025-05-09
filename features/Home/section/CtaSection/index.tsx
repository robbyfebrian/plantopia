import Image from 'next/image';
import CtaImage from '../../../../public/images/cta__background.jpg';
import Button from '../../../../components/common/button';

const CtaSection: React.FC = () => {
  return (
    <section className='h-screen relative overflow-hidden'>
      <div className='overflow-y-hidden h-2/3 relative'>
        <Image
          alt='cta-background'
          src={CtaImage}
          className='absolute -top-48'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center z-20'>
          <h2 className='font-prata text-6xl text-center text-white max-w-[900px] leading-20'>
            “Gabung Komunitas Tanaman & Mulai Petualanganmu!”
          </h2>
          <p className='font-poppins text-2xl text-center font-light text-white pt-4 pb-10'>
            Pengalaman seru dari para pecinta tanaman yang telah mencoba
            aplikasi kami.
          </p>
          <div className='flex gap-5'>
            <Button
              label='Bergabung Sekarang'
              variant='primary'
              onClick={() => console.log('register clicked')}
            />
            <Button
              label='Cek Forum Komunitas'
              variant='secondary'
              onClick={() => console.log('forum clicked')}
            />
          </div>
        </div>
      </div>
      <div className='absolute h-2/3 inset-0 bg-gradient-to-t from-[#282828] to-[#171717]/20 z-10' />
    </section>
  );
};

export default CtaSection;
