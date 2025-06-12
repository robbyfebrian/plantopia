import { SignUp } from '@clerk/nextjs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Register',
  description:
    'Register to your Plantopia account to access personalized features.',
};

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center w-1/2 min-h-screen">
      <SignUp signInUrl='/login'/>
    </div>
  );
};

export default RegisterPage;
