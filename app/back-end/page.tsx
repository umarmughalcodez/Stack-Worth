"use client";
import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import python from "@/public/icons8-python.svg";
import c from "@/public/c-original.svg";
import cplus from "@/public/c++.svg";
import csharp from "@/public/csharp.svg";
import nodejs from "@/public/icons8-nodejs.svg";
import php from "@/public/php-plain.svg";
import java from "@/public/icons8-java-logo.svg";
import ruby from "@/public/icons8-ruby-programming-language.svg";
import go1 from "@/public/icons8-go-logo.svg";
import rust from "@/public/rust.svg";
import CustomCheckbox from "@/components/CustomCheckbox";
import Loader from "@/components/Loader";
import { ArrowRightIcon } from "lucide-react";

const options = [
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
  { value: "go", label: "Go", icon: go1, bg: "bg-blue-300" },
  { value: "rust", label: "Rust", icon: rust, bg: "bg-red-200" },
];

const BackEnd = () => {
  const [selectedLanguages, setselectedLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const handleRedirect = () => {
    const languages = selectedLanguages.join(", ");
    const dev = location.pathname.substring(1);
    const url = `/frameworks?languages=${encodeURIComponent(
      languages
    )}&dev=${dev}`;
    redirect(url);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex items-center justify-center ">
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <div className="w-[95%] h-full z-10 relative grid place-items-center mt-20">
          <p className="font-bold text-2xl mb-10">
            Select Your Back End Languages
          </p>
          <CustomCheckbox
            onChange={setselectedLanguages}
            selectedOptions={selectedLanguages}
            options={options}
          />
          <Button
            className="mt-10 mb-12"
            effect={"expandIcon"}
            icon={ArrowRightIcon}
            iconPlacement="right"
            onClick={handleRedirect}
            disabled={selectedLanguages.length <= 0}
          >
            {selectedLanguages.length <= 0
              ? "Please select at least 1 language"
              : "Next"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default BackEnd;
