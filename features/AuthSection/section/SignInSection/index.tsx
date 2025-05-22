"use client";
import { SignIn } from "@clerk/nextjs";

export default function SignInForm() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <SignIn path="/login" routing="path" signUpUrl="/register" />
    </div>
  );
}
