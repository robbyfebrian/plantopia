import AchievementSection from 'features/Dashboard/Achievement';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Achievement',
  description:
    'Lihat ringkasan aktivitas, perkembangan tanaman, dan pencapaian Anda di Plantopia. Pantau level, streak aktif, dan misi harian untuk pengalaman berkebun yang lebih baik.',
};

const AchievementPage = () => {
  return <AchievementSection />;
};

export default AchievementPage;
