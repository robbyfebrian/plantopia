import Image, { StaticImageData } from 'next/image';

type TestimonialCardsProps = {
  hoverImage: 'left' | 'right';
  margin: string;
  profilePicture: StaticImageData;
  testimonial: string;
};

const TestimonialCards: React.FC<TestimonialCardsProps> = ({
  hoverImage,
  margin,
  profilePicture,
  testimonial,
}) => {
  return (
    <div className={`flex flex-col gap-4 w-[700px] ${margin}`}>
      <div className='relative flex gap-3 items-center group'>
        <div
          className={`absolute w-12 h-12 overflow-hidden rounded-full transform -z-10 transition-transform duration-300 ${
            hoverImage === 'left'
              ? 'translate-x-6 translate-y-0 group-hover:-translate-x-12 group-hover:-translate-y-12'
              : 'right-0 -translate-x-32 translate-y-0 group-hover:-translate-x-19 group-hover:-translate-y-12'
          }`}
        >
          <Image
            src={profilePicture}
            alt='Profile Picture'
            width={48}
            height={48}
          />
        </div>
        <div className='bg-[#EEE3BC] px-6 py-4 rounded-2xl max-w-xl'>
          <p className='font-prata line-clamp-2'>{testimonial}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
