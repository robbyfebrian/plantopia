

"use client";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";

export default function SignUpSection() {
  const { signUp, setActive } = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp.create({ emailAddress: email, password });
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      setPendingVerification(true);
    } catch (err: any) {
      console.error("SignUp error", err.errors);
    }
  };

  const handleVerify = async () => {
    try {
      const result = await signUp.attemptEmailAddressVerification({ code });
      await setActive({ session: result.createdSessionId });
    } catch (err: any) {
      console.error("Verification error", err.errors);
    }
  };

  return (
    <div className="p-6 w-full max-w-sm mx-auto">
      {!pendingVerification ? (
        <>
          <h1>Create your account</h1>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          <button onClick={handleSignUp}>Sign Up</button>
        </>
      ) : (
        <>
          <h1>Verify your email</h1>
          <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Verification Code" />
          <button onClick={handleVerify}>Verify</button>
        </>
      )}
    </div>
  );
}
