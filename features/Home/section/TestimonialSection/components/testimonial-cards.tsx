import Image from 'next/image';
import ProfilePictOne from '../../../../../public/images/testimonial__profile-picture-1.jpg';

const TestimonialCards: React.FC = () => {
  const testimonials = [
    '“Baru upload foto, langsung tahu tanamanku kena jamur! Gak cuma dikasih solusi, tapi juga ada kuis seru yang bikin aku makin paham cara rawatnya.”',
    '“Senang banget bisa koleksi tanaman virtual dan dapet badge! Jadi semangat rawat tanaman tiap hari karena berasa main game.”',
    '“Aplikasinya gampang banget dipakai. Deteksinya cepat, dan aku suka banget fitur edukasi interaktifnya. Rasanya belajar sambil main.”',
    '“Soal-soal kuisnya bikin aku sadar banyak hal kecil soal tanaman yang sering aku abaikan. Belajar jadi menyenangkan!”',
  ];

  return (
    <div className='flex flex-col gap-4 w-[700px]'>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`relative flex gap-3 ${
            index % 2 === 0 ? 'ml-24' : 'ml-8'
          } items-center group`}
        >
          <div className='absolute w-12 h-12 overflow-hidden rounded-full transform translate-x-6 translate-y-0 group-hover:-translate-x-12 group-hover:-translate-y-12 -z-10 transition-transform duration-300'>
            <Image src={ProfilePictOne} alt={`ProfilePict${index}`} />
          </div>
          <div className='bg-[#EEE3BC] px-6 py-4 rounded-2xl max-w-xl'>
            <p className='font-prata line-clamp-2'>{testimonial}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCards;
