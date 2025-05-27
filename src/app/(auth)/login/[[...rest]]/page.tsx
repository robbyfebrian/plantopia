import SignInSection from 'features/Auth/components/SignInForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Login',
  description:
    'Login to your Plantopia account to access personalized features.',
};

const LoginPage = () => {
  return <SignInSection />;
};

export default LoginPage;
