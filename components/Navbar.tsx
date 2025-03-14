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
    <div className=" h-24 w-full flex flex-col items-center justify-center z-[100] relative overflow-hidden">
      <Image
        src={logo}
        alt="Logo"
        width={130}
        height={130}
        className="cursor-pointer"
        onClick={() => redirect("/")}
      />

      {user?.name ? null : (
        <Button
          effect="shineHover"
          icon={FaGithub}
          iconPlacement="left"
          className="absolute top-5 right-10 text-sm z-10 bg-none"
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
