import MissionSection from 'features/Dashboard/Mission';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Misi',
  description:
    'Deteksi penyakit tanaman secara instan, cepat, dan akurat dengan Plantopia.',
};

const MissionPage: React.FC = () => {
  return <MissionSection />;
};

export default MissionPage;
