import { ReactNode } from "react";
import ImageWrapper from "../../../features/Auth/section/ImageWrapper"; 

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row w-screen h-screen">
      {/* KIRI = FORM */}
      <div className="w-full md:w-1/2 bg-white h-full overflow-y-auto p-6">
        {children}
      </div>

      {/* KANAN = GAMBAR */}
      <ImageWrapper />
    </div>
  );
}
