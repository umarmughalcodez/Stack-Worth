"use client";
import Image from "next/image";
import React from "react";
import money1 from "@/public/money-with-wings.svg";
import programmer from "@/public/programmer (1).png";
import demo from "@/public/smiling-face-with-sunglasses.svg";
import money from "@/public/money-with-wings (1).svg";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { redirect } from "next/navigation";

const Guide = () => {
  return (
    <div className="w-full h-auto min-h-[500px] flex bg-green-200 mt-12 flex-col items-center justify-center p-5 bg-opacity-50 rounded-2xl">
      <p className="text-4xl font-bold mb-12">How it Works?</p>
      <div className="space-y-7 grid place-items-center mb-8 w-[85%] text-center">
        <p className="font-semibold">Choose Your Tech Stack</p>
        <p className="text-lg">
          Select your preffered stack from Front End, Back End or Full Stack
        </p>
      </div>
      <div className="space-y-7 grid place-items-center mb-8 w-[85%] text-center">
        <p className="font-semibold">Pick Your Skills</p>
        <p className="text-lg">
          Select the programming languages, frameworks, and tools you specialize
          in to help us tailor your salary estimate accurately
        </p>
      </div>
      <div className="space-y-7 grid place-items-center mb-12 w-[85%] text-center">
        <p className="font-semibold">Get Your Salary Estimate</p>
        <p className="text-lg">
          Instantly see a data-driven salary prediction based on current market
          trends, helping you understand your earning potential
        </p>
      </div>
      <Button
        effect={"expandIcon"}
        icon={ArrowRightIcon}
        iconPlacement="right"
        onClick={() => {
          redirect("/dev-type");
        }}
      >
        Let's Check!
      </Button>
    </div>
  );
};

export default Guide;
