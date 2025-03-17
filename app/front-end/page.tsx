"use client";
import Background from "@/components/animations/background";
import GroupSizeSelector from "@/components/CustomCheckbox";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import html from "@/public/icons8-html-5.svg";
import css from "@/public/icons8-css-logo.svg";
import js from "@/public/icons8-javascript.svg";
import ts from "@/public/icons8-typescript.svg";
import { ArrowRightIcon } from "lucide-react";
import Loader from "@/components/Loader";

const options = [
  { value: "html", label: "HTML", icon: html, bg: "bg-red-200" },
  { value: "css", label: "CSS", icon: css, bg: "bg-blue-200" },
  { value: "js", label: "JavaScript", icon: js, bg: "bg-yellow-200" },
  { value: "ts", label: "TypeScript", icon: ts, bg: "bg-blue-200" },
];

const FrontEnd = () => {
  const [selectedLanguages, setselectedLanguages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleRedirect = () => {
    const languages = selectedLanguages.join(", ");
    const dev = location.pathname.substring(1);
    if (
      !selectedLanguages.includes("js") &&
      !selectedLanguages.includes("ts") &&
      !selectedLanguages.includes("css")
    ) {
      const url = `/experience?languages=${encodeURIComponent(
        languages
      )}&frameworks=none&dev=${dev}`;
      redirect(url);
    } else {
      const url = `/frameworks?languages=${encodeURIComponent(
        languages
      )}&dev=${dev}`;
      redirect(url);
    }
  };

  return (
    <div>
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <div className="relative z-10 flex flex-col items-center w-full h-full mt-24 overflow-hidden">
          <p className="font-bold text-2xl mb-20">
            Select Your Front End Languages
          </p>
          <GroupSizeSelector
            options={options}
            selectedOptions={selectedLanguages}
            onChange={setselectedLanguages}
          />

          <Button
            effect={"expandIcon"}
            icon={ArrowRightIcon}
            iconPlacement="right"
            onClick={handleRedirect}
            disabled={selectedLanguages.length <= 0}
            className="mt-10 mb-12"
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

export default FrontEnd;
