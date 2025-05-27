"use client"

import React from "react"
import { Image, Zap, Eye } from "lucide-react"

const CornerBrackets = () => (
  <>
    {["-top-2 -left-2", "-top-2 -right-2", "-bottom-2 -left-2", "-bottom-2 -right-2"].map((pos, i) => (
      <div key={i} className={`absolute ${pos} w-6 h-6`}>
        {/* Horizontal curved line */}
        <div 
          className={`absolute ${i < 2 ? 'top-0' : 'bottom-0'} ${
            i % 2 === 0 ? 'left-0' : 'right-0'
          } w-6 h-6 border-2 border-gray-400 ${
            i % 2 === 0 ? 'border-r-0 border-b-0' : 'border-l-0 border-b-0'
          } ${
            i < 2 
              ? i % 2 === 0 ? 'rounded-tl-full' : 'rounded-tr-full' 
              : i % 2 === 0 ? 'rounded-bl-full' : 'rounded-br-full'
          }`}
        />
        
        {/* Vertical curved line */}
        <div 
          className={`absolute ${i % 2 === 0 ? 'left-0' : 'right-0'} ${
            i < 2 ? 'top-0' : 'bottom-0'
          } w-6 h-6 border-2 border-gray-400 ${
            i < 2 ? 'border-b-0 border-r-0' : 'border-t-0 border-r-0'
          } ${
            i < 2 
              ? i % 2 === 0 ? 'rounded-tl-full' : 'rounded-tr-full' 
              : i % 2 === 0 ? 'rounded-bl-full' : 'rounded-br-full'
          }`}
          style={{
            transform: i % 2 === 0 ? 'rotate(0deg)' : 'rotate(180deg)'
          }}
        />
        
        {/* Decorative diamonds */}
        <div className={`absolute w-1.5 h-1.5 bg-gray-400 rotate-45 shadow-sm ${i % 2 === 0 ? "-left-0.5" : "-right-0.5"} ${i < 2 ? "top-5" : "bottom-5"}`} />
        <div className={`absolute w-1.5 h-1.5 bg-gray-400 rotate-45 shadow-sm ${i % 2 === 0 ? "left-5" : "right-5"} ${i < 2 ? "-top-0.5" : "-bottom-0.5"}`} />
      </div>
    ))}
  </>
)

const StepsSection = () => {
  return (
    <section className="py-12 max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 - Fixed to match left section */}
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-visible">
                <CornerBrackets />
                <Image className="w-5 h-5 text-gray-500 z-10" />
              </div>
            </div>
            <div className="text-sm text-gray-600 leading-snug">
              <p className="font-medium">Ambil foto daun</p>
              <p>atau bagian tanaman yang menunjukkan gejala.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-visible">
                <CornerBrackets />
                <Zap className="w-5 h-5 text-gray-500 z-10" />
              </div>
            </div>
            <div className="text-sm text-gray-600 leading-snug">
              <p className="font-medium">Sistem kami akan</p>
              <p>menganalisis gambar secara otomatis.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 relative overflow-visible">
                <CornerBrackets />
                <Eye className="w-5 h-5 text-gray-500 z-10" />
              </div>
            </div>
            <div className="text-sm text-gray-600 leading-snug">
              <p className="font-medium">Lihat jenis penyakit</p>
              <p>dan cara mengatasinya.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsSection