"use client";

import { useState } from "react";
import { Users, User } from "lucide-react";

const options = [
  { value: "1-20", label: "1-20", icon: <User size={24} /> },
  { value: "21-49", label: "21-49", icon: <Users size={24} /> },
];

const GroupSizeSelector = () => {
  const [selected, setSelected] = useState<string>("1-20");

  return (
    <div className="flex gap-4">
      {options.map((option) => (
        <label
          key={option.value}
          className={`flex flex-col items-center justify-center gap-1 w-24 h-20 border rounded-lg cursor-pointer transition-all ${
            selected === option.value
              ? "border-blue-500 bg-blue-100"
              : "border-gray-300"
          }`}
        >
          <input
            type="radio"
            name="groupSize"
            value={option.value}
            checked={selected === option.value}
            onChange={() => setSelected(option.value)}
            className="hidden"
          />
          {option.icon}
          <span className="text-sm">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default GroupSizeSelector;
