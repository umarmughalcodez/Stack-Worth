"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { getSession, signIn, signOut } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import logo from "@/public/logo.png";
import Image from "next/image";
import { VscGithub } from "react-icons/vsc";
import Link from "next/link";
import github_static from "@/public/github_static.svg";
import git from "@/public/git_gif.gif";
import github_gif from "@/public/github_gif.gif";

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

      {user?.name ? (
        <button className="edit-button absolute top-5 right-14">
          <Image
            src={github_static}
            alt="Github"
            width={40}
            height={40}
            title="Drop a Star"
            onClick={() =>
              redirect("https://github.com/umarmughalcodez/Stack-Worth")
            }
            className="svg"
          />
          <Image
            src={github_gif}
            alt="Github"
            width={40}
            height={40}
            className="gif"
            onClick={() =>
              redirect("https://github.com/umarmughalcodez/Stack-Worth")
            }
            title="Drop a Star"
          />
        </button>
      ) : (
        <Button
          effect="expandIcon"
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
