import Image, { StaticImageData } from 'next/image';

type FeatureCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
  orientation: 'landscape' | 'portrait';
  offsetY?: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  image,
  orientation,
  offsetY,
}) => {
  return (
    <div
      className={`relative group ${
        orientation === 'portrait'
          ? 'h-[320px] w-[200px] lg:h-[400px] lg:w-[266.7px]'
          : 'h-[320px] w-[200px] lg:h-[288px] lg:w-[432px]'
      }`}
    >
      <div className={`absolute ${offsetY}`}>
        <h3
          className='absolute inset-0 font-prata text-2xl lg:text-4xl text-center transform translate-y-0 md:group-hover:-translate-y-8 group-hover:lg:-translate-y-14 transition-transform duration-300'
        >
          {title}
        </h3>
        <div className='relative flex justify-center items-center'>
          <Image
            src={image}
            alt={title}
            className={`rounded-2xl object-cover ${
              orientation === 'portrait'
                ? 'h-[320px] w-[200px] lg:h-[400px] lg:w-[266.7px]'
                : 'h-[320px] w-[200px] lg:h-[288px] lg:w-[432px]'
            }`}
          />
          <div className="absolute z-10 inset-0 rounded-2xl bg-gradient-to-b from-[#282828]/40 to-[#171717] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <p
            className={`absolute z-20 ${
              orientation === 'portrait' ? 'max-w-[195px]' : 'max-w-[360px]'
            } font-prata text-center text-white px-4 lg:text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
