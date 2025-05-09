import dynamic from "next/dynamic";

export const HeroSection = dynamic(() => import("./HeroSection"), {
  ssr: false,
});

export const FeatureSection = dynamic(() => import("./FeatureSection"), {
  ssr: false,
});

export const TestimonialSection = dynamic(() => import("./TestimonialSection"), {
  ssr: false,
});

export const FaqSection = dynamic(() => import("./FaqSection"), {
  ssr: false,
});

export const CtaSection = dynamic(() => import("./CtaSection"), {
  ssr: false,
});