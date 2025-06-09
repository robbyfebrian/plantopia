import DiseaseJournalSection from 'features/Dashboard/DiseaseJournal';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Plantopia | Jurnal Penyakit',
    description:
        'Catat, pantau, dan kelola riwayat penyakit tanamanmu di Plantopia. Temukan informasi, solusi, dan perkembangan kesehatan tanaman secara terperinci.',
};

const DiseaseJournalPage = () => {
  return <DiseaseJournalSection />;
};

export default DiseaseJournalPage;
