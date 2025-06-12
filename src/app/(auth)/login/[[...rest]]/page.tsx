import { SignIn } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Login',
  description:
    'Login to your Plantopia account to access personalized features.',
};

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center w-1/2 min-h-screen'>
      <SignIn signUpUrl='/register'/>
    </div>
  );
};

export default LoginPage;
