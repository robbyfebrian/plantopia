import dynamic from "next/dynamic";

export const DetectSection = dynamic(() => import("./DetectSection"), {
  ssr: false,
});