"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { getSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import logo from "@/public/logo.png";
import Image from "next/image";

interface User {
  name: string;
  email: string;
}

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);

  const connectGithub = async () => {
    await signIn("github", { redirectTo: "/" });
  };

  const disconnectGithub = async () => {
    await signOut({ redirectTo: "/" });
  };

  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      setUser(session?.user as User);
    };
    fetchUser();
  }, []);

  return (
    // <div className="bg-white bg-opacity-50 backdrop-blur-md h-20 w-screen flex flex-col items-center justify-center z-30">
    <div className=" h-20 w-screen flex flex-col items-center justify-center z-[100] relative">
      <Image
        src={logo}
        alt="Logo"
        width={160}
        height={160}
        className="cursor-pointer mt-5"
        onClick={() => redirect("/")}
      />

      {user?.name ? (
        <Button
          effect="expandIcon"
          icon={FaGithub}
          iconPlacement="left"
          className="absolute top-5 right-5 text-sm z-10"
          size={"sm"}
          onClick={disconnectGithub}
        >
          Disconnect GitHub
        </Button>
      ) : (
        <Button
          effect="shineHover"
          icon={FaGithub}
          iconPlacement="left"
          className="absolute top-5 right-5 text-sm z-10 bg-none"
          // size={"sm"}
          onClick={connectGithub}
        >
          Connect GitHub
        </Button>
      )}
    </div>
  );
};

export default Navbar;
