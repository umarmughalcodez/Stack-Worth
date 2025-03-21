"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { redirect } from "next/navigation";
import { User } from "@/types/User";
import { getSession, signIn } from "next-auth/react";

const Reason = () => {
  const [user, setUser] = useState<User | null>(null);

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

  return (
    <div className="w-full h-auto bg-green-200 relative flex flex-col items-center justify-center p-16 mt-12 bg-opacity-60 text-black text-center">
      <p className="text-4xl font-bold mb-14 leading-snug">Why Use This?</p>
      <div className="space-y-7 flex flex-col items-center justify-center mb-5">
        <p className="font-semibold  leading-snug">Data Driven Estimates</p>
        <p className="text-lg text-center">
          Get accurate salary insights based on real job market trends
        </p>
      </div>
      <div className="space-y-7 grid place-items-center mb-5">
        <p className="font-semibold leading-snug">Personalized Results</p>
        <p className="text-lg text-center leading-snug">
          Your salary is calculated based on your unique skill set
        </p>
      </div>
      <div className="space-y-7 grid place-items-center mb-5">
        <p className="font-semibold leading-snug">Plan Your Career</p>
        <p className="text-lg text-center leading-snug">
          See which skills can increase your earning potential
        </p>
      </div>
      <div className="mb-12 mt-8">
        <p className="leading-snug font-semibold text-center">
          This tool has a{" "}
          <span className=" text-green-600 px-3 py-1 rounded-xl">
            Special Feature
          </span>{" "}
          that it only suggests you the skills like{" "}
          <span className="text-green-600 px-3 py-1 rounded-xl">
            Frameworks, Libraries, Databases
          </span>{" "}
          according to your Basic Languages
        </p>
      </div>
      <p className="mt-10 mb-10 font-semibold w-[80%] text-center leading-snug">
        So what are you waiting for?
      </p>
      {user?.email ? (
        <Button
          effect={"expandIcon"}
          icon={ArrowRightIcon}
          iconPlacement="right"
          onClick={() => {
            redirect("/dev-type");
          }}
        >
          Calculate Your Worth Now!
        </Button>
      ) : (
        <Button
          effect={"expandIcon"}
          icon={ArrowRightIcon}
          iconPlacement="right"
          onClick={connectGithub}
        >
          Connect GitHub To Start!
        </Button>
      )}
    </div>
  );
};

export default Reason;
