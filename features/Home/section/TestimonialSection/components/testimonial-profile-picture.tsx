import Image from 'next/image';
import ProfilePictOne from '../../../../../public/images/testimonial__profile-picture-1.jpg';
import ProfilePictTwo from '../../../../../public/images/testimonial__profile-picture-2.jpg';

const TestimonialProfiles: React.FC = () => {
  const profiles = [ProfilePictOne, ProfilePictTwo];
  const totalProfiles = 24;

  return (
    <div className='flex flex-col items-end gap-3'>
      <div className='flex flex-wrap gap-4 justify-end max-w-[560px]'>
        {Array.from({ length: totalProfiles }).map((_, index) => (
          <div key={index} className='w-10 h-10 overflow-hidden rounded-full'>
            <Image
              src={profiles[index % profiles.length]}
              alt={`ProfilePict${index}`}
            />
          </div>
        ))}
      </div>
      <p className='font-light font-poppins text-center'>
        lebih dari 200 pengguna sudah bergabung
      </p>
    </div>
  );
};

export default TestimonialProfiles;
