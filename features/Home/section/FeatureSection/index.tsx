import FeatureCard from './components/feature-card';
import FeatureImageOne from '../../../../public/images/feature__figure-1.jpg';
import FeatureImageTwo from '../../../../public/images/feature__figure-2.jpg';
import FeatureImageThree from '../../../../public/images/feature__figure-3.jpg';
import FeatureImageFour from '../../../../public/images/feature__figure-4.jpg';

const FeatureSection: React.FC = () => {
  return (
    <section className='h-[140vh] py-24 bg-white'>
      <div className='flex flex-col gap-32 px-16'>
        <div className='gap-4 flex flex-col justify-center items-center '>
          <h2 className='font-prata text-7xl w-full leading-24'>
            Fitur Unggulan untuk Deteksi Penyakit Tanaman Secara Instan
          </h2>
          <p className='w-full text-right font-poppins font-light text-2xl'>
            “Gunakan teknologi kami untuk menjaga tanaman tetap sehat — cepat,
            akurat, dan gratis.”
          </p>
        </div>
        <div className='flex justify-between items-baseline'>
          <FeatureCard
            title='Kebun Virtual'
            description='“Simulasikan dan kelola koleksi tanamanmu secara digital.”'
            image={FeatureImageOne}
            orientation='portrait'
          />
          <FeatureCard
            title='Deteksi Cepat'
            description='“Unggah foto tanamanmu dan temukan masalahnya dalam hitungan detik.”'
            image={FeatureImageTwo}
            orientation='landscape'
            offsetY='-bottom-[69px]'
          />
          <FeatureCard
            title='Akurasi Tinggi'
            description='“Didukung oleh AI dan data pakar untuk diagnosis yang tepat.”'
            image={FeatureImageThree}
            orientation='portrait'
            offsetY='-bottom-[131px]'
          />
          <FeatureCard
            title='Edukasi Gratis'
            description='“Pelajari cara merawat tanaman dengan artikel dan tips gratis.”'
            image={FeatureImageFour}
            orientation='portrait'
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
