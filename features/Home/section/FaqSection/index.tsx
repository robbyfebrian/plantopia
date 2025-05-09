import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import FaqPlant from '../../../../public/images/faq__plant-1.png';

const FaqSection: React.FC = () => {
  return (
    <section className='h-screen px-32 flex flex-col items-end justify-center relative gap-10 overflow-hidden'>
      <div className='bg-[#EEE3BC] w-40 h-40 absolute -left-20 top-82 rounded-full blur-md'></div>
      <div className='bg-[#EEE3BC] w-40 h-40 absolute -right-16 -top-20 rounded-full blur-md'></div>
      <Image
        src={FaqPlant}
        alt='faq-plant'
        className='absolute left-20 rotate-90 -z-10 w-[324px] top-42 h-[538.88px]'
      />
      <h1 className='font-prata text-6xl w-full text-center'>
        “Pertanyaan yang Mungkin Kamu Punya”
      </h1>
      <Accordion type='single' collapsible className='w-[790px]'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            Bagaimana cara kerja deteksi penyakit tanaman di aplikasi ini?
          </AccordionTrigger>
          <AccordionContent>
            → Kamu hanya perlu mengunggah foto tanamanmu, dan sistem kami akan
            menganalisis serta memberikan diagnosis secara otomatis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger>Apakah aplikasi ini gratis?</AccordionTrigger>
          <AccordionContent>
            → Ya, semua fitur utama seperti deteksi, edukasi, dan forum
            komunitas tersedia gratis.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Apa itu sistem poin dan badge?</AccordionTrigger>
          <AccordionContent>
            → Kamu akan mendapatkan poin setiap kali menyelesaikan kuis atau
            menambahkan koleksi tanaman. Poin ini bisa dikumpulkan untuk membuka
            badge dan level baru.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>
            Apakah saya bisa menyimpan riwayat tanaman saya?
          </AccordionTrigger>
          <AccordionContent>
            → Bisa! Kamu bisa membangun kebun virtual dan memantau kesehatan
            tiap tanaman yang telah kamu unggah.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-5'>
          <AccordionTrigger>
            Bagaimana cara bergabung ke komunitas?
          </AccordionTrigger>
          <AccordionContent>
            → Kamu cukup daftar akun, lalu akses forum komunitas untuk
            berdiskusi, berbagi pengalaman, atau ikut tantangan bersama pengguna
            lain.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};

export default FaqSection;
