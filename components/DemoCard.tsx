"use client";
import Image from "next/image";
import React from "react";
import money1 from "@/public/money-with-wings.svg";
import demo from "@/public/smiling-face-with-sunglasses.svg";
import { FaXTwitter } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { FaImage } from "react-icons/fa";

const DemoCard = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center p-5">
      <div className="flex flex-col items-center justify-center  w-full text-center py-20 px-5 space-y-5 text-xl">
        <span className="font-semibold text-2xl">
          Calculate your <span className="text-green-500">Developer Worth</span>{" "}
          now and know how much is your value in the tech Industry!
        </span>
      </div>
      <div className="w-[95%] md:w-[40%]">
        <div className="card h-auto rounded-xl border border-black flex flex-col items-center justify-center text-lg bg-blue-400">
          <Image
            src={demo}
            alt="User's Image"
            width={120}
            height={120}
            className="rounded-full"
          />
          <span className="mt-5 mb-3 text-green-500 font-semibold">
            Congratulations! <span className="font-normal">@johndoe</span>
          </span>
          <p className="text-lg flex-row font-normal items-center justify-center">
            <span>Your Estimated Developer Worth is</span>
            <span className="text-green-500 font-semibold ml-2">
              $324,500.788
            </span>{" "}
            <Image
              src={money1}
              alt="Money"
              width={24}
              height={24}
              className="inline-flex"
            />
          </p>

          <p className="text-lg mt-4 mb-4 flex font-normal w-[90%] items-center justify-center">
            You are a Senior Developer 💻
          </p>

          <p className="text-lg mb-4 mt-2 font-normal">
            <span className="text-green-500 font-semibold">Pro Tip:</span>{" "}
            <span>Mentor junior developers and share your knowledge</span>
          </p>
          <div className="w-[95%] h-auto space-x-3 space-y-2 text-sm flex-col items-center justify-center">
            <div className="flex items-center justify-center space-x-3">
              <button className="relative overflow-hidden bg-red-600 px-3 sm:px-6 py-1 sm:py-2 text-white  rounded-lg shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Save as <FaImage className="ml-2" />
                <span className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-full animate-shine"></span>
              </button>

              <button className="relative overflow-hidden bg-green-500 px-3 sm:px-6 py-1 sm:py-2 text-white  rounded-lg shadow-md transition-all duration-300 hover:scale-105 flex items-center justify-center">
                Share on <SiWhatsapp className="ml-2" />
                <span className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-full animate-shine"></span>
              </button>
            </div>

            <button className="relative overflow-hidden bg-black px-3 sm:px-6 py-1 sm:py-2 text-white  rounded-lg shadow-md transition-all duration-300 hover:scale-105 flex-col items-center justify-center">
              <span className="flex items-center justify-center">
                Share on <FaXTwitter className="ml-2" />
              </span>
              <span className="absolute inset-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-full animate-shine"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
