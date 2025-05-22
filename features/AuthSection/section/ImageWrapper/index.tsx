"use client"

import Image from "next/image"
import AuthImage from "../../../../public/images/auth__figure-1.jpg"

const ImageWrapper = () => {
  return (
    <div className="w-full md:w-1/2 relative h-1/2 md:h-full overflow-hidden rounded-[12px] bg-white"> {/* background putih */}
      <Image
        alt="hero-background"
        src={AuthImage || "/placeholder.svg"}
        fill
        style={{ borderRadius: '12px', objectFit: 'cover' }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-[12px]"></div>
      <div className="absolute bottom-5 left-5 right-5 text-white z-10 md:max-w-xl">
        <h3 className="text-2xl font-semibold mb-1">Cegah Hama Sejak Dini</h3>
        <p className="text-base leading-relaxed whitespace-pre-line">
          Memeriksa daun dan batang secara rutin serta menjaga kebersihan lingkungan tanaman dapat mencegah serangan
          hama dan penyakit.
        </p>
      </div>
    </div>
  )
}

export default ImageWrapper