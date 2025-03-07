"use client";
import { signIn } from "next-auth/react"; // Correct import
import Image from "next/image";
import github from "@/public/github.png";

export default function SignIn() {
  const handleSignIn = async (provider: "github") => {
    await signIn(provider, { callbackUrl: "/" }); // Use callbackUrl

    // Fetch user data after sign-in
  };

  return (
    <div className="flex-col justify-center items-center flex">
      <button type="button" onClick={() => handleSignIn("github")}>
        <Image src={github} alt="GitHub Image" width={12} height={12} />
        Sign In with GitHub
      </button>
    </div>
  );
}
