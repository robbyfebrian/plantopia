'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password, name }),
        }
      );
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || 'Registrasi gagal');
        return;
      }
      router.push('/login');
    } catch (err) {
      setError('Terjadi kesalahan saat registrasi');
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
          <h2 className='text-2xl font-semibold mb-2'>Buat Akun!</h2>
          <p className='tracking-tighter text-[#B5B5B5] mb-7'>
            Bergabunglah dengan komunitas petani cerdas dan mulai deteksi
            penyakit tanaman dengan cepat, mudah, dan akurat.
          </p>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold text-lg'>Nama Lengkap</label>
            <input
              type='text'
              className='w-full p-3 rounded border placeholder:font-light'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='John Doe'
              required
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold text-lg'>Email</label>
            <input
              type='email'
              className='w-full p-3 rounded border placeholder:font-light'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            Daftar
          </button>
          <p className='text-sm'>
            Sudah punya akun?{' '}
            <Link className='text-[#5D784F] font-semibold py-3' href='/login'>
              Login
            </Link>
          </p>
        </form>
        <p className='font-semibold tracking-tight text-[#B5B5B5] text-xs'>
          &copy;2025 Plantopia. All Right Reserved
        </p>
        <div id='clerk-captcha' className='absolute invisible'></div>
      </div>
    </section>
  );
};

export default SignUpForm;
