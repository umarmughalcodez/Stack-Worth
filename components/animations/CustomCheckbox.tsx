"use client";

import { useEffect, useState } from "react";
import { Users, User } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface OptionProps {
  value: string;
  label: string;
  icon?: StaticImageData;
  bg: string;
  size?: string;
}
const CustomCheckbox: React.FC<{
  options: OptionProps[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}> = ({ options, selectedOptions, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    let updatedOptions = [...selectedOptions];

    if (checked) {
      updatedOptions.push(value);
    } else {
      updatedOptions = updatedOptions.filter((option) => option !== value);
    }

    onChange([...new Set(updatedOptions)]);
  };

  return (
    <div className="gap-10 flex flex-wrap items-center justify-center m-0 p-0">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex flex-col text-center items-center justify-center gap-1 h-40 border rounded-lg  transition-all delay-150 w-44 border-none ${
            selectedOptions.includes(option.value)
              ? `${
                  option.bg as string
                } backdrop-blur-sm bg-opacity-60 shadow-[#444] shadow-lg`
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
            <Image
              src={option.icon}
              alt="Image"
              width={option.size ? parseInt(option.size) : "50"}
              height={50}
            />
          )}
          <span className="text-sm mt-3 ">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default CustomCheckbox;
