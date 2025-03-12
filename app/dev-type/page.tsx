"use client";
import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import monitor from "@/public/monitor-one.svg";
import server from "@/public/computer-computers-servers-electronics-technology.svg";
import globe from "@/public/globe-with-meridians.svg";
import Image, { StaticImageData } from "next/image";

const options = [
  {
    value: "Front End Developer",
    label: "Front End Developer",
    bg: "none",
    icon: monitor,
  },
  {
    value: "Back End Developer",
    label: "Back End Developer",
    bg: "none",
    icon: server,
  },
  {
    value: "Full Stack Developer",
    label: "Full Stack Developer",
    bg: "none",
    icon: globe,
  },
];

const DeveloperType = () => {
  const [showFullStackMsg, setShowFullStackMsg] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let updatedOptions = [...selectedOptions];

    if (checked) {
      updatedOptions.push(value);
      if (value === "Full Stack Developer") {
        updatedOptions = [
          "Front End Developer",
          "Back End Developer",
          "Full Stack Developer",
        ];
      } else if (
        updatedOptions.includes("Front End Developer") &&
        updatedOptions.includes("Back End Developer")
      ) {
        updatedOptions.push("Full Stack Developer");
      }
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== value);
      if (value === "Full Stack Developer") {
        updatedOptions = updatedOptions.filter(
          (option) =>
            option !== "Front End Developer" && option !== "Back End Developer"
        );
      } else {
        updatedOptions = updatedOptions.filter(
          (option) => option !== "Full Stack Developer"
        );
      }
    }

    if (
      updatedOptions.includes("Front End Developer") &&
      updatedOptions.includes("Back End Developer")
    ) {
      setShowFullStackMsg(true);
    } else {
      setShowFullStackMsg(false);
    }

    setSelectedOptions([...new Set(updatedOptions)]);
  };

  const handleRedirect = () => {
    if (selectedOptions.includes("Full Stack Developer")) {
      redirect("/full-stack");
    } else if (selectedOptions.includes("Front End Developer")) {
      redirect("/front-end");
    } else if (selectedOptions.includes("Back End Developer")) {
      redirect("/back-end");
    }
  };

  return (
    <div>
      <Background />
      <div className="flex flex-col items-center z-10 h-full w-full justify-center relative">
        <p className="text-2xl font-bold mt-36 mb-16">
          What Type Of Developer Are You?
        </p>
        <div className="flex gap-10 mb-10 flex-wrap">
          {options.map((option) => (
            <label
              key={option.value}
              className={`flex flex-col items-center justify-center gap-1 h-40 border rounded-lg cursor-pointer transition-all delay-150 w-44 border-none ${
                selectedOptions.includes(option.value)
                  ? `${option.bg as string} shadow-[#444] shadow-lg`
                  : "backdrop-blur-md"
              }`}
            >
              <input
                type="checkbox"
                name="groupSize"
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={handleChange}
                className="hidden"
              />
              {option.icon && (
                <Image src={option.icon} alt="Image" width={50} height={50} />
              )}

              <span className="text-sm mt-3 font-semibold">{option.label}</span>
            </label>
          ))}
        </div>
        {showFullStackMsg && (
          <p className="text-lg m-3">
            Looks Like you are a Full Stack Developer!
          </p>
        )}
        {selectedOptions.length <= 0 ? (
          <Button disabled={true}>Please Select at least one option</Button>
        ) : (
          <Button
            onClick={handleRedirect}
            effect={"expandIcon"}
            icon={ArrowRightIcon}
            iconPlacement="right"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default DeveloperType;
