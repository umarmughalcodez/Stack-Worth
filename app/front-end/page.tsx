"use client";
import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const FrontEnd = () => {
  const [selectedLanguages, setselectedLanguages] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let updatedOptions = [...selectedLanguages];

    if (checked) {
      updatedOptions.push(value);
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== value);
    }

    setselectedLanguages([...new Set(updatedOptions)]);
  };

  const handleRedirect = () => {
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
      <div className="relative z-10 flex flex-col items-center w-full h-full mt-60 overflow-hidden">
        <p className="font-bold text-2xl">Select Your Front End Languages</p>
        <label>
          <input
            type="checkbox"
            value={"HTML"}
            checked={selectedLanguages.includes("HTML")}
            onChange={handleChange}
          />
          HTML
        </label>
        <label>
          <input
            type="checkbox"
            value={"CSS"}
            checked={selectedLanguages.includes("CSS")}
            onChange={handleChange}
          />
          CSS
        </label>
        <label>
          <input
            type="checkbox"
            value={"JS"}
            checked={selectedLanguages.includes("JS")}
            onChange={handleChange}
          />
          Javascript
        </label>
        <label>
          <input
            type="checkbox"
            value={"TS"}
            checked={selectedLanguages.includes("TS")}
            onChange={handleChange}
          />
          TypeScript
        </label>
        <Button
          effect={"shineHover"}
          onClick={handleRedirect}
          disabled={selectedLanguages.length <= 0}
        >
          {selectedLanguages.length <= 0
            ? "Please select at least 1 language"
            : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default FrontEnd;
