import dynamic from "next/dynamic";

export const DetectSection = dynamic(() => import("./Detect"), {
  ssr: false,
});