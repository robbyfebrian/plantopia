import Image from 'next/image';
import ProfilePictOne from '../../../../public/images/testimonial__profile-picture-1.jpg';
import ProfilePictTwo from '../../../../public/images/testimonial__profile-picture-2.jpg';
import TestimonialPlantOne from '../../../../public/images/testimonial__plant-1.png';
import TestimonialPlantTwo from '../../../../public/images/testimonial__plant-2.png';
import TestimonialHeader from './components/testimonial-header';
import TestimonialProfiles from './components/testimonial-profile-picture';
import TestimonialCards from './components/testimonial-cards';

const TestimonialSection: React.FC = () => {
  return (
    <section className='h-[110vh] bg-white pt-24 relative overflow-hidden'>
      <div className='bg-[#EEE3BC] w-40 h-40 absolute -left-20 z-20 top-52 rounded-full blur-md'></div>
      <Image
        src={TestimonialPlantTwo}
        alt='testimonial-plant-two'
        className='absolute left-32 rotate-90 z-10 w-[222px] top-20 h-[424px]'
      />
      <div className='bg-[#EEE3BC] w-40 h-40 absolute -right-16 z-20 -bottom-20 rounded-full blur-md'></div>
      <Image
        src={TestimonialPlantOne}
        alt='testimonial-plant-one'
        className='absolute right-8 z-10 w-[630px] bottom-10 h-[370px]'
      />
      <div className='flex flex-col px-16'>
        <TestimonialHeader />
        <TestimonialProfiles />
        <div className='flex flex-col gap-4 w-[700px]'>
          <TestimonialCards
            hoverImage='left'
            margin='ml-24'
            profilePicture={ProfilePictOne}
            testimonial='“Baru upload foto, langsung tahu tanamanku kena jamur! Gak cuma dikasih solusi, tapi juga ada kuis seru yang bikin aku makin paham cara rawatnya.”'
            />
          <TestimonialCards
            hoverImage='left'
            margin='ml-16'
            profilePicture={ProfilePictTwo}
            testimonial='“Senang banget bisa koleksi tanaman virtual dan dapet badge!
            Jadi semangat rawat tanaman tiap hari karena berasa main game.”'
            />
          <TestimonialCards
            hoverImage='right'
            margin='ml-24'
            profilePicture={ProfilePictOne}
            testimonial='“Aplikasinya gampang banget dipakai. Deteksinya cepat, dan aku
            suka banget fitur edukasi interaktifnya. Rasanya belajar sambil
            main.”'
            />
          <TestimonialCards
            hoverImage='right'
            margin='ml-32'
            profilePicture={ProfilePictTwo}
            testimonial='“Soal-soal kuisnya bikin aku sadar banyak hal kecil soal tanaman
                yang sering aku abaikan. Belajar jadi menyenangkan!”'
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
