"use client";

import React from "react";
import { Camera, RotateCcw, Check, X } from "lucide-react";

interface Props {
  imagePreview: string;
  onReset: () => void;
  onConfirm: () => void;
  onClose: () => void;
  fileInputId?: string;
}

const PreviewSection: React.FC<Props> = ({
  imagePreview,
  onReset,
  onConfirm,
  onClose,
  fileInputId = "fileUpload",
}) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#D9D9D9]/90 flex items-center justify-center px-4">
      <div className="relative bg-white rounded-2xl shadow-xl border-4 border-white p-4 w-full max-w-[90%] sm:max-w-2xl md:max-w-4xl flex flex-col items-center">
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Pratinjau Gambar */}
        <div className="w-full max-h-[60vh] overflow-hidden rounded-xl border-[3px] border-blue-400">
          <img
            src={imagePreview}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tombol Aksi */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto">
          {/* Grup: Ulangi + Gunakan */}
          <div className="flex flex-col sm:flex-row bg-[#F0F0F0] rounded-full overflow-hidden shadow-sm w-full sm:w-auto">
            <button
              onClick={onReset}
              className="flex items-center justify-center gap-2 text-sm sm:text-base px-5 py-2 text-gray-800 hover:bg-gray-200 transition-colors font-poppins"
            >
              <RotateCcw className="w-4 h-4" />
              Ulangi
            </button>

            <button
              onClick={onConfirm}
              className="flex items-center justify-center gap-2 text-sm sm:text-base px-5 py-2 text-gray-800 hover:bg-gray-200 transition-colors border-t sm:border-t-0 sm:border-l border-gray-300 font-poppins"
            >
              <Check className="w-4 h-4" />
              Gunakan
            </button>
          </div>

          {/* Ambil Baru */}
          <label
            htmlFor={fileInputId}
            className="flex items-center justify-center gap-2 text-sm sm:text-base px-5 py-2 rounded-full bg-[#3F4B39] hover:bg-[#2e382b] text-white cursor-pointer shadow font-poppins transition-colors w-full sm:w-auto text-center"
          >
            <Camera className="w-4 h-4" />
            Ambil
          </label>
        </div>
      </div>
    </div>
  );
};

export default PreviewSection;
