"use client";
import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React, { useState } from "react";

const BackEnd = () => {
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
      <div className="w-full h-full z-10 relative grid place-items-center mt-60">
        <p className="font-bold text-2xl">Select Your Back End Languages</p>
        <label>
          <input
            type="checkbox"
            value={"Python"}
            checked={selectedLanguages.includes("Python")}
            onChange={handleChange}
          />
          Python
        </label>
        <label>
          <input
            type="checkbox"
            value={"Node.js"}
            checked={selectedLanguages.includes("Node.js")}
            onChange={handleChange}
          />
          Node.js
        </label>
        <label>
          <input
            type="checkbox"
            value={"PHP"}
            checked={selectedLanguages.includes("PHP")}
            onChange={handleChange}
          />
          PHP
        </label>
        <label>
          <input
            type="checkbox"
            value={"Java"}
            checked={selectedLanguages.includes("Java")}
            onChange={handleChange}
          />
          Java
        </label>
        <label>
          <input
            type="checkbox"
            value={"Ruby"}
            checked={selectedLanguages.includes("Ruby")}
            onChange={handleChange}
          />
          Ruby
        </label>
        <label>
          <input
            type="checkbox"
            value={"C#"}
            checked={selectedLanguages.includes("C#")}
            onChange={handleChange}
          />
          C#
        </label>
        <label>
          <input
            type="checkbox"
            value={"Go"}
            checked={selectedLanguages.includes("Go")}
            onChange={handleChange}
          />
          Go
        </label>
        <label>
          <input
            type="checkbox"
            value={"Rust"}
            checked={selectedLanguages.includes("Rust")}
            onChange={handleChange}
          />
          Rust
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

export default BackEnd;
