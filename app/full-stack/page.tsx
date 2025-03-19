"use client";
import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import html from "@/public/icons8-html-5.svg";
import css from "@/public/icons8-css-logo.svg";
import js from "@/public/icons8-javascript.svg";
import ts from "@/public/icons8-typescript.svg";
import python from "@/public/icons8-python.svg";
import c from "@/public/c-original.svg";
import cplus from "@/public/c++.svg";
import csharp from "@/public/csharp.svg";
import nodejs from "@/public/icons8-nodejs.svg";
import php from "@/public/php-plain.svg";
import java from "@/public/icons8-java-logo.svg";
import ruby from "@/public/icons8-ruby-programming-language.svg";
import go from "@/public/icons8-go-logo.svg";
import rust from "@/public/rust.svg";
import CustomCheckbox from "@/components/CustomCheckbox";
import Loader from "@/components/Loader";
import { ArrowRightIcon } from "lucide-react";

const frontEndOptions = [
  { value: "html", label: "HTML", icon: html, bg: "bg-red-200" },
  { value: "css", label: "CSS", icon: css, bg: "bg-blue-200" },
  { value: "js", label: "JavaScript", icon: js, bg: "bg-yellow-200" },
  { value: "ts", label: "TypeScript", icon: ts, bg: "bg-blue-200" },
];

const backEndOptions = [
  { value: "python", label: "Python", icon: python, bg: "bg-yellow-200" },
  { value: "c", label: "C", icon: c, bg: "bg-blue-200" },
  { value: "c++", label: "C++", icon: cplus, bg: "bg-blue-300" },
  { value: "c#", label: "C#", icon: csharp, bg: "bg-purple-300" },
  {
    value: "nodejs",
    label: "Nodejs",
    icon: nodejs,
    bg: "bg-green-300",
    size: "65",
  },
  { value: "php", label: "PHP", icon: php, bg: "bg-purple-300" },
  { value: "java", label: "Java", icon: java, bg: "bg-blue-200", size: "65" },
  { value: "ruby", label: "Ruby", icon: ruby, bg: "bg-red-200" },
  { value: "go", label: "Go", icon: go, bg: "bg-blue-300" },
  { value: "rust", label: "Rust", icon: rust, bg: "bg-red-200" },
];

const FullStack = () => {
  const [selectedLanguages, setselectedLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleRedirect = () => {
    const frontEndLanguages = ["html", "css", "js", "ts"];
    const backEndLanguages = [
      "python",
      "nodejs",
      "php",
      "java",
      "ruby",
      "rust",
      "go",
      "c#",
      "c++",
      "c",
    ];

    const hasFrontEnd = selectedLanguages.some((lang) =>
      frontEndLanguages.includes(lang)
    );
    const hasBackEnd = selectedLanguages.some((lang) =>
      backEndLanguages.includes(lang)
    );

    if (!hasFrontEnd && !hasBackEnd) {
      toast.error("Please select at least one Front End & Back End Language!", {
        duration: 1500,
        position: "top-left",

        style: {
          backgroundColor: "#333",
          color: "white",
        },
      });
      return;
    }

    if (!hasFrontEnd) {
      toast.error("Please select at least one Front End Language!", {
        duration: 1500,
        position: "top-left",

        style: {
          backgroundColor: "#333",
          color: "white",
        },
      });
      return;
    }
    if (!hasBackEnd) {
      toast.error("Please select at least one Back End Language!", {
        duration: 1500,
        position: "top-left",
        style: {
          backgroundColor: "#333",
          color: "white",
        },
      });
      return;
    }

    const languages = selectedLanguages.join(", ");
    const dev = location.pathname.substring(1);
    const url = `/frameworks?languages=${encodeURIComponent(
      languages
    )}&dev=${dev}`;
    redirect(url);
  };

  return (
    <div>
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full w-full flex flex-col items-center z-10 relative mt-24">
          <Toaster />
          <div className=" w-[95%] h-auto flex">
            <div className="w-[50%] h-full  flex flex-col items-center justify-center">
              <p className="mb-5 text-xl break-words w-[80%] text-center">
                Front End Languages
              </p>
              <CustomCheckbox
                selectedOptions={selectedLanguages}
                onChange={setselectedLanguages}
                options={frontEndOptions}
              />
            </div>
            <div className="w-[50%] h-full  flex flex-col items-center justify-center ">
              <p className="mb-5 text-xl  break-words w-[80%] text-center">
                Back End Languages
              </p>
              <CustomCheckbox
                selectedOptions={selectedLanguages}
                onChange={setselectedLanguages}
                options={backEndOptions}
              />
            </div>
          </div>

          <Button
            effect={"expandIcon"}
            icon={ArrowRightIcon}
            iconPlacement="right"
            disabled={selectedLanguages.length < 1}
            onClick={handleRedirect}
            className="mt-10 mb-12"
          >
            {selectedLanguages.length < 1
              ? "Please select at least 2 languages"
              : "Next"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FullStack;
