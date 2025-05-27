import HomeFeature from 'features/Home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Beranda',
  description: 'Deteksi penyakit tanaman secara instan, cepat, dan akurat dengan Plantopia.',
};

export default function Home() {
  return <HomeFeature />;
}
