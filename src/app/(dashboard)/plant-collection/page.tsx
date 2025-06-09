import PlantCollectionSection from 'features/Dashboard/PlantCollection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plantopia | Collection',
  description:
    'Lihat ringkasan aktivitas, perkembangan tanaman, dan pencapaian Anda di Plantopia. Pantau level, streak aktif, dan misi harian untuk pengalaman berkebun yang lebih baik.',
};

const PlantCollectionPage = () => {
  return <PlantCollectionSection />;
};

export default PlantCollectionPage;
