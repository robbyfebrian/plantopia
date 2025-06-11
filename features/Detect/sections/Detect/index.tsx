'use client';

import React, { useRef, useState, useEffect } from 'react';
import PreviewSection from '../Preview';
import Footer from '../../../../components/layout/footer';
import StepComponent from 'features/Detect/components/StepComponent';
import { Camera,Search, RefreshCcw, Lightbulb } from 'lucide-react';
import Navbar from 'components/layout/navbar';

const DeteksiSection: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Cleanup otomatis saat keluar halaman / komponen unmount
  useEffect(() => {
    return () => {
      setShowModal(false);
      setImagePreview(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    };
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setShowModal(true);
        setTimeout(() => {
          setResult('Hasil Deteksi: Daun terkena penyakit busuk daun (Late Blight)');
        }, 1500);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleReset = () => {
    setImagePreview(null);
    setResult(null);
    setShowModal(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click(); // buka lagi file picker / kamera
    }
  };

  return (
    <section className="bg-white text-gray-800 font-poppins flex flex-col min-h-screen">
      <Navbar style="dark" />

      <div className="text-center mx-auto px-4 sm:px-6 lg:px-0 max-w-[1000px] py-10 md:py-12">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-normal mb-4 text-black font-prata leading-tight">
          Deteksi Sekarang, Selamatkan Tanamanmu!
        </h1>
        <p className="text-sm sm:text-base text-gray-700 font-light mx-auto max-w-xl leading-relaxed">
          Unggah foto atau gunakan kamera untuk mendeteksi penyakit tanamanmu secara instan. Cepat, akurat, dan mudah digunakan.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 my-10 sm:my-14">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48">
            {/* Frame dekoratif */}
            {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
              <div key={i} className={`absolute ${pos} w-10 h-10 sm:w-12 sm:h-12`}>
                <div
                  className={`
                    absolute w-full h-full
                    ${i < 2 ? 'border-t-3' : 'border-b-3'}
                    ${i % 2 === 0 ? 'border-l-3' : 'border-r-3'}
                    border-[#4E6148]
                    ${['rounded-tl-[1.5rem]', 'rounded-tr-[1.5rem]', 'rounded-bl-[1.5rem]', 'rounded-br-[1.5rem]'][i]}
                  `}
                />
                <div
                  className={`
                    absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#4E6148] rotate-45 shadow-sm
                    ${i % 2 === 0 ? '-left-1' : '-right-1'}
                    ${i < 2 ? 'top-8 sm:top-10' : 'bottom-8 sm:bottom-10'}
                  `}
                />
                <div
                  className={`
                    absolute w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#4E6148] rotate-45 shadow-sm
                    ${i % 2 === 0 ? 'left-8 sm:left-10' : 'right-8 sm:right-10'}
                    ${i < 2 ? '-top-1' : '-bottom-1'}
                  `}
                />
              </div>
            ))}
            <div className="absolute inset-y-0 left-[3.25rem] sm:left-[3.75rem] flex items-center justify-center">
              <Search className="w-16 h-16 sm:w-20 sm:h-20 text-[#3F4B39]" />
            </div>
          </div>

          <label
            htmlFor="fileUpload"
            className="text-sm sm:text-base text-[#222] cursor-pointer"
          >
            atau upload gambar{' '}
            <strong className="text-[#3F4B39] font-semibold">lewat sini</strong>
          </label>

          <input
            id="fileUpload"
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment" // 🔜 buka kamera belakang di HP
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-6 sm:px-7 rounded-2xl bg-white shadow-lg">
          <StepComponent description="Ambil foto daun atau bagian tanaman." icon={<Camera />} />
          <StepComponent description="Sistem kami menganalisis gambar secara otomatis." icon={<RefreshCcw />} />
          <StepComponent description="Lihat jenis penyakit dan cara mengatasinya." icon={<Lightbulb />} />
        </div>

        {result && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg shadow max-w-md mx-auto text-sm sm:text-base">
            {result}
          </div>
        )}
      </div>

      {imagePreview && showModal && (
        <PreviewSection
          imagePreview={imagePreview}
          onReset={handleReset}
          onConfirm={() => {
            alert('Gambar digunakan untuk proses deteksi');
            setShowModal(false);
          }}
          onClose={() => setShowModal(false)}
          fileInputId="fileUpload"
        />
      )}

      <Footer />
    </section>
  );
};

export default DeteksiSection;
