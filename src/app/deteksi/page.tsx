import DetectFeature from 'features/Detect';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Deteksi',
  description: 'Deteksi penyakit tanaman secara instan, cepat, dan akurat dengan Plantopia pada halaman deteksi.',
};

export default function Detect() {
  return <DetectFeature />;
}
