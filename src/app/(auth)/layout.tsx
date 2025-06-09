import ImageWrapperSection from 'features/Auth/Wrapper';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <main className='flex h-screen w-full bg-white items-center justify-center'>
      {children}
      <ImageWrapperSection />
    </main>
  );
};

export default AuthLayout;
