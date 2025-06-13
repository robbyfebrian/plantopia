import ImageWrapperSection from 'features/Auth/Wrapper';
import Link from 'next/link';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className='flex h-screen w-full bg-white items-center justify-center'>
      <Link
        href='/'
        className='absolute top-6 left-6 flex items-center gap-2 text-gray-700 hover:text-green-600 transition-colors'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth={2}
          strokeLinecap='round'
          strokeLinejoin='round'
          className='lucide lucide-arrow-left'
        >
          <line x1='19' x2='5' y1='12' y2='12' />
          <polyline points='12 19 5 12 12 5' />
        </svg>
        <span className='sr-only'>Back to Home</span>
      </Link>
      {children}
      <ImageWrapperSection />
    </main>
  );
};

export default AuthLayout;
