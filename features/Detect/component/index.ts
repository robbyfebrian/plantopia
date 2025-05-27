import dynamic from "next/dynamic";

const StepComponent = dynamic(() => import("./StepComponent"), {
  ssr: false,
});