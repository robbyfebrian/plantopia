import SignUpSection from 'features/Auth/components/SignUpForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Register',
  description:
    'Register to your Plantopia account to access personalized features.',
};

const RegisterPage = () => {
  return <SignUpSection />;
};

export default RegisterPage;
