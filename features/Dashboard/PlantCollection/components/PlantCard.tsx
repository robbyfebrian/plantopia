import Image from 'next/image';
import { PlantCardProps } from './type';
import { CircleAlert } from 'lucide-react';

const PlantCard: React.FC<PlantCardProps> = ({
  name,
  dateAdded,
  imageUrl,
  condition,
  onClick,
}) => {
  return (
    <div
      className='relative h-80 w-[280px] rounded-xl shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300'
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={256}
        height={160}
        className='absolute h-full w-full bg-white/30 rounded-xl mb-4 flex items-center justify-center object-cover'
      />
      <div className='absolute bottom-0 left-0 w-full backdrop-blur-[4px] bg-white/40 rounded-b-xl flex flex-col gap-2 p-4'>
        <h4 className='font-semibold text-xl'>{name}</h4>
        <p className='font-light text-xs'>Masuk ke koleksi pada {dateAdded}</p>
        <div className='bg-[#E4B719] max-w-fit h-8 text-white hover:bg-[#BE9810] focus:ring-green-700 transition-colors duration-300 rounded-lg flex items-center gap-2 px-3'>
          <CircleAlert size={16} className='inline' />
          Perlu Penanganan
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
