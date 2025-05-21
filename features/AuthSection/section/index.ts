import dynamic from "next/dynamic";

export const SignInSection = dynamic(() => import("./SignInSection"), {
  ssr: false,
});

export const SignUpSection = dynamic(() => import("./SignUpSection"), {
  ssr: false,
});

export const ImageWrapper = dynamic(() => import("./ImageWrapper"), {
  ssr: false,
});