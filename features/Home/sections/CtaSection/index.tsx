import Image from 'next/image';
import CtaImage from '../../../../public/images/cta__background.jpg';
import Button from '../../../../components/common/button';
import Footer from '../../../../components/layout/footer';

const CtaSection: React.FC = () => {
  return (
    <section className='h-screen relative overflow-hidden'>
      <div className='absolute h-2/3 inset-0 bg-gradient-to-t from-[#282828] to-[#171717]/20 z-10' />
      <div className='overflow-y-hidden h-2/3 relative'>
        <Image
          alt='cta-background'
          src={CtaImage}
          className='absolute -top-48 object-cover h-screen overflow-x-hidden'
        />
        <div className='absolute inset-0 px-4 flex flex-col items-center justify-center z-20'>
          <h2 className='font-prata text-4xl lg:text-6xl text-center text-white max-w-[900px] leading-snug lg:leading-20'>
            “Gabung Komunitas Tanaman & Mulai Petualanganmu!”
          </h2>
          <p className='font-poppins text-xl lg:text-2xl text-center font-light text-white pt-4 pb-10'>
            Pengalaman seru dari para pecinta tanaman yang telah mencoba
            aplikasi kami.
          </p>
          <div className='flex flex-col lg:flex-row gap-5'>
            <Button
              label='Bergabung Sekarang'
              variant='primary'
              href='/login'
            />
            <Button
              label='Cek Forum Komunitas'
              variant='secondary'
              href='/article'
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CtaSection;
