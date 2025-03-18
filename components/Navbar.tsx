"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { getSession, signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import logo from "@/public/logo.png";
import Image from "next/image";
import github_static from "@/public/github_static.svg";
import github_gif from "@/public/github_gif.gif";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

interface User {
  name: string;
  email: string;
}

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    const storedPaths = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(storedPaths);
  }, []);

  const handleBack = () => {
    const storedPaths = JSON.parse(localStorage.getItem("history") || "[]");

    if (storedPaths.length > 1) {
      storedPaths.pop(); // Remove current path
      const previousPath = storedPaths[storedPaths.length - 1]; // Get last visited path

      localStorage.setItem("history", JSON.stringify(storedPaths)); // Update localStorage
      setHistory(storedPaths); // Update state
      router.push(previousPath);
    } else {
      router.push("/"); // Default fallback if no history
    }
  };

  const connectGithub = async () => {
    await signIn("github", { redirectTo: "/" });
  };

  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      setUser(session?.user as User);
    };
    fetchUser();
  }, []);

  if (history) {
    console.log("History is Empty!");
  }

  return (
    <div className=" h-24 w-full flex flex-col items-center justify-center z-[100] relative overflow-hidden">
      {pathname === "/" ? null : (
        <span className="absolute top-10 left-20 text-black text-xl flex items-center justify-center">
          <IoIosArrowBack />
          <Button
            effect={"hoverUnderline"}
            variant={"link"}
            onClick={handleBack}
            className="m-0 p-1 text-lg"
          >
            Back
          </Button>
        </span>
      )}

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
              window.open(
                "https://github.com/umarmughalcodez/Stack-Worth",
                "_blank"
              )
            }
            className="svg"
          />
          <Image
            src={github_gif}
            alt="Github"
            unoptimized
            width={40}
            height={40}
            className="gif"
            onClick={() =>
              window.open(
                "https://github.com/umarmughalcodez/Stack-Worth",
                "_blank"
              )
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
