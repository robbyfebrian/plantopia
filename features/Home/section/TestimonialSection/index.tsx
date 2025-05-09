import Image from 'next/image';
import TestimonialHeader from './components/testimonial-header';
import TestimonialCards from './components/testimonial-cards';
import TestimonialProfiles from './components/testimonial-profile-picture';
import TestimonialPlantOne from '../../../../public/images/testimonial__plant-1.png';
import TestimonialPlantTwo from '../../../../public/images/testimonial__plant-2.png';

const TestimonialSection: React.FC = () => {
  return (
    <section className='h-[120vh] py-24 relative'>
      <div className='bg-[#EEE3BC] w-40 h-40 absolute -left-20 top-52 rounded-full blur-lg'></div>
      <Image
        src={TestimonialPlantTwo}
        alt='testimonial-plant-two'
        className='absolute left-32 rotate-90 -z-10 w-[222px] top-20 h-[424px]'
      />
      <div className='bg-[#EEE3BC] w-40 h-40 absolute -right-12 -bottom-2 rounded-full blur-lg'></div>
      <Image
        src={TestimonialPlantOne}
        alt='testimonial-plant-one'
        className='absolute right-12 -z-10 w-[630px] bottom-20 h-[370px]'
      />
      <div className='flex flex-col px-16'>
        <TestimonialHeader />
        <TestimonialProfiles />
        <TestimonialCards />
      </div>
    </section>
  );
};

export default TestimonialSection;