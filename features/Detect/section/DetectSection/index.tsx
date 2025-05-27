"use client"

import React, { useState } from "react"

import StepsSection from "../StepSection"
import PreviewSection from "../PreviewSection"
import Footer from "../../../../components/layout/footer"
import Header from "../../../../components/layout/header"

const DeteksiSection = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [result, setResult] = useState<string | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
        setShowModal(true)
        setTimeout(() => {
          setResult("Hasil Deteksi: Daun terkena penyakit busuk daun (Late Blight)")
        }, 1500)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="bg-white text-gray-800 font-poppins flex flex-col min-h-screen">
      <Header />

      <main className="flex-1 px-6 py-20">
        <section className="text-center max-w-1xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-normal mb-8 text-black font-prata leading-tight">
            Deteksi Sekarang, Selamatkan Tanamanmu!
          </h1>

          {/* Description */}
          <p className="text-base text-gray-700 max-w-2xl mx-auto mb-16 font-poppins leading-relaxed">
            Unggah foto atau gunakan kamera untuk mendeteksi penyakit
            <br />
            tanamanmu secara instan. Cepat, akurat, dan mudah digunakan.
          </p>

          {/* Detection Frame Area */}
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-48 h-48">
              {/* Corner Frames */}
             {["top-0 left-0", "top-0 right-0", "bottom-0 left-0", "bottom-0 right-0"].map((pos, i) => (
      <div key={i} className={`absolute ${pos} w-12 h-12`}>
        {/* Frame Borders with rounded corners */}
        <div
          className={`
            absolute w-full h-full 
            ${i < 2 ? "border-t-2" : "border-b-2"} 
            ${i % 2 === 0 ? "border-l-2" : "border-r-2"} 
            border-[#3F4B39] 
            ${["rounded-tl-[2rem]", "rounded-tr-[2rem]", "rounded-bl-[2rem]", "rounded-br-[2rem]"][i]}
          `}
        />

        {/* Decorative Dots - vertical alignment */}
        <div
          className={`
            absolute w-2.5 h-2.5 bg-[#3F4B39] rotate-45 shadow-sm 
            ${i % 2 === 0 ? "-left-1" : "-right-1"} 
            ${i < 2 ? "top-10" : "bottom-10"}
          `}
        />
        {/* Decorative Dots - horizontal alignment */}
        <div
          className={`
            absolute w-2.5 h-2.5 bg-[#3F4B39] rotate-45 shadow-sm 
            ${i % 2 === 0 ? "left-10" : "right-10"} 
            ${i < 2 ? "-top-1" : "-bottom-1"}
          `}
        />
      </div>
    ))}

              {/* Magnifying Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-[#3F4B39]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
                </svg>
              </div>
            </div>

            {/* Upload Text */}
            <label htmlFor="fileUpload" className="text-sm font-poppins text-[#222] cursor-pointer">
              atau upload gambar <strong className="text-[#3F4B39] font-semibold">lewat sini</strong>
            </label>

            {/* File Input (hidden) */}
            <input
              id="fileUpload"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>

          {/* Hasil Deteksi */}
          {result && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg shadow max-w-md mx-auto font-poppins">
              {result}
            </div>
          )}
        </section>

        {/* Steps Section */}
        <section className="mt-24 max-w-6xl mx-auto">
          <StepsSection />
        </section>
      </main>

      {/* Image Preview Modal */}
      {imagePreview && showModal && (
        <PreviewSection
          imagePreview={imagePreview}
          onReset={() => {
            setImagePreview(null)
            setResult(null)
            setShowModal(false)
          }}
          onConfirm={() => {
            alert("Gambar digunakan untuk proses deteksi")
            setShowModal(false)
          }}
          onClose={() => setShowModal(false)}
          fileInputId="fileUpload"
        />
      )}

      <Footer />
    </div>
  )
}

export default DeteksiSection
