import { Prata, Poppins } from 'next/font/google';
import { AuthProvider } from '../../context/AuthContext';
import './globals.css';

const prata = Prata({
  variable: '--font-prata',
  subsets: ['latin'],
  weight: '400',
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
    <html lang='en'>
      <body className={`${prata.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
    </AuthProvider>
  );
}
