"use client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const FullStack = () => {
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
    const frontEndLanguages = ["HTML", "CSS", "JS", "TS"];
    const backEndLanguages = [
      "Python",
      "Node.js",
      "PHP",
      "Java",
      "Ruby",
      "Rust",
      "Go",
      "C#",
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
      <Toaster />
      <p>Select You Full Stack Languages</p>
      <div>
        <p>Front End Languages</p>
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
      </div>
      <div>
        <p>Back End Languages</p>
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
      </div>

      <Button disabled={selectedLanguages.length <= 1} onClick={handleRedirect}>
        {selectedLanguages.length <= 1
          ? "Please select at least two languages"
          : "Next"}
      </Button>
    </div>
  );
};

export default FullStack;
