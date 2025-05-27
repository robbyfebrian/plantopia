import { ImageWrapper } from 'features/Auth/components';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className='flex h-screen w-full bg-white items-center justify-center'>
      {children}
      <ImageWrapper />
    </main>
  );
};

export default AuthLayout;
