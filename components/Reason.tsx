"use client";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";
import { redirect } from "next/navigation";

const Reason = () => {
  return (
    <div className="w-full h-auto bg-green-200 relative grid place-items-center p-16 mt-12 bg-opacity-60 text-black">
      <p className="text-4xl font-bold mb-12">Why Use This?</p>
      <div className="space-y-7 grid place-items-center mb-5">
        <p className="font-semibold">Data Driven Estimates</p>
        <p className="text-lg">
          Get accurate salary insights based on real job market trends
        </p>
      </div>
      <div className="space-y-7 grid place-items-center mb-5">
        <p className="font-semibold">Personalized Results</p>
        <p className="text-lg">
          Your salary is calculated based on your unique skill set
        </p>
      </div>
      <div className="space-y-7 grid place-items-center mb-5">
        <p className="font-semibold">Plan Your Career</p>
        <p className="text-lg">
          See which skills can increase your earning potential
        </p>
      </div>
      <div className="mb-12 mt-8">
        <p className="leading-9 font-semibold text-center">
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
      <p className="mt-10 mb-10 font-semibold">So what are you waiting for?</p>
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
    </div>
  );
};

export default Reason;
