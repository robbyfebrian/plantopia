import { StepProps } from './type';

const StepComponent: React.FC<StepProps> = ({ description, icon }) => {
  return (
    <div className='flex items-center justify-items-center gap-4'>
      <div className='relative flex justify-center items-center rounded-2xl'>
        <div className='absolute -top-[1px] -left-[1px] w-1/4 h-1/3 border-t-1 border-l-1 border-[#9EAE95] rounded-tl-2xl'>
          <div className='absolute -bottom-[2px] -left-[2.5px] w-1 h-1 bg-[#9EAE95] rotate-45'></div>
          <div className='absolute -top-[2.5px] -right-[2px] w-1 h-1 bg-[#9EAE95] rotate-45'></div>
        </div>
        <div className='absolute -top-[1px] -right-[1px] w-1/4 h-1/3 border-t-1 border-r-1 border-[#9EAE95] rounded-tr-2xl'>
          <div className='absolute -bottom-[2px] -right-[2.5px] w-1 h-1 bg-[#9EAE95] rotate-45'></div>
          <div className='absolute -top-[2.5px] -left-[2px] w-1 h-1 bg-[#9EAE95] rotate-45'></div>
        </div>
        <div className='absolute -bottom-[1px] -left-[1px] w-1/4 h-1/3 border-b-1 border-l-1 border-[#9EAE95] rounded-bl-2xl'>
          <div className='absolute -top-[2px] -left-[2.5px] w-1 h-1 bg-[#9EAE95] rotate-45'></div>
          <div className='absolute -bottom-[2.5px] -right-[2px] w-1 h-1 bg-[#9EAE95] rotate-45'></div>
        </div>
        <div className='absolute -bottom-[1px] -right-[1px] w-1/4 h-1/3 border-b-1 border-r-1 border-[#9EAE95] rounded-br-2xl'>
          <div className='absolute -top-[2px] -right-[2.5px] w-1 h-1 bg-[#9EAE95] rotate-45'></div>
          <div className='absolute -bottom-[2.5px] -left-[2px] w-1 h-1 bg-[#9EAE95] rotate-45'></div>
        </div>
        <span className='flex items-center justify-center w-12 h-12 text-[#9EAE95]'>
          {icon}
        </span>
      </div>
      <p className='text-sm text-start text-black max-w-3xs'>{description}</p>
    </div>
  );
};

export default StepComponent;
