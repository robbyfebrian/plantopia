'use client';

import Link from 'next/link';
import { useSignIn } from '@clerk/nextjs';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignInForm = () => {
  const { signIn, setActive } = useSignIn();
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (!signIn) {
        setError('Sign in service is not available.');
        return;
      }

      const result = await signIn.create({
        identifier,
        password,
      });

      if (result.status === 'complete') {
        await setActive({ session: result.createdSessionId });
        router.push('/dashboard'); // ganti dengan route tujuan setelah login
      } else {
        console.log(result);
      }
    } catch (err: any) {
      setError(err.errors?.[0]?.message || 'Gagal login');
    }
  };

  return (
    <section className='flex flex-col w-1/2 justify-center items-center min-h-screen'>
      <div className='w-lg flex flex-col gap-14'>
        <div className='relative'>
          <Link
            href='/'
            className='absolute top-1 -left-12 flex items-center gap-2 text-gray-700 hover:text-[#5D784F] transition-colors'
          >
            <ArrowLeft size={28} />
          </Link>
          <h1 className='font-prata text-4xl mb-0 text-[#5D784F]'>Plantopia</h1>
        </div>

        <form onSubmit={handleSubmit} className='w-lg space-y-4'>
          <h2 className='text-2xl font-semibold mb-2'>Masuk</h2>
          <p className='tracking-tighter text-[#B5B5B5] mb-7'>
            Selamat datang kembali! Masuk untuk mulai mendeteksi penyakit
            tanamanmu.
          </p>

          <div className='flex flex-col gap-2'>
            <label className='font-semibold text-lg'>Email</label>
            <input
              type='email'
              className='w-full p-3 rounded border placeholder:font-light'
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder='name@plantopia.com'
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label className='font-semibold text-lg'>Password</label>
            <input
              type='password'
              className='w-full p-3 rounded border placeholder:font-light'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='minimal 8 karakter'
              required
            />
          </div>

          {error && <p className='text-red-600'>{error}</p>}

          <button
            type='submit'
            className='w-full bg-[#5D784F] text-white font-semibold py-2 rounded-sm'
          >
            Login
          </button>

          <p className='text-sm'>
            Belum punya akun?{' '}
            <a className='text-[#5D784F] font-semibold py-3' href='/register'>
              Daftar
            </a>
          </p>
        </form>

        <p className='font-semibold tracking-tight text-[#B5B5B5] text-xs'>
          &copy;2025 Plantopia. All Right Reserved
        </p>
      </div>
    </section>
  );
};

export default SignInForm;
