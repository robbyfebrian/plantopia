import OverviewSection from 'features/Dashboard/Overview';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Overview',
  description:
    'Lihat ringkasan aktivitas, perkembangan tanaman, dan pencapaian Anda di Plantopia. Pantau level, streak aktif, dan misi harian untuk pengalaman berkebun yang lebih baik.',
};

const OverviewPage = () => {
  return <OverviewSection />;
};

export default OverviewPage;
