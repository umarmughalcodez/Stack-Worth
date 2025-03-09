"use client";
import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const experience = () => {
  const [selectedExp, setSelectedExp] = useState<string>("");
  const [expMsg, setExpMsg] = useState("");
  const searchParams = useSearchParams();
  const languages = searchParams
    .getAll("languages")
    .flatMap((lang) => lang.split(", "));
  const frameworks = searchParams
    .getAll("frameworks")
    .flatMap((framework) => framework.split(", "));
  const dev = searchParams.get("dev");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedExp(value);
  };

  const handleRedirect = () => {
    let language = languages.join(", ");
    let framework = frameworks.join(", ");
    const url = `/dev-worth?l=${encodeURIComponent(
      language
    )}&f=${encodeURIComponent(framework)}&dev=${dev}&exp=${selectedExp}`;
    redirect(url);
  };

  useEffect(() => {
    if (selectedExp.trim().length > 0) {
      if (selectedExp === "0 - 1") {
        setExpMsg("Beginner 😇");
      } else if (selectedExp === "2 - 3") {
        setExpMsg("Intermediate 😎");
      } else if (selectedExp === "4 - 6") {
        setExpMsg("Advanced 😬");
      } else if (selectedExp === "7 - 10") {
        setExpMsg("Expert 🥶");
      } else if (selectedExp === "10+") {
        setExpMsg("Master 💀");
      }
    }
  }, [selectedExp]);

  return (
    <div>
      <Background />
      <div className="h-full w-full flex flex-col items-center z-10 relative mt-56">
        <p>Select your years of experience in this field</p>
        <label>
          <input
            type="radio"
            value="0 - 1"
            onChange={handleChange}
            checked={selectedExp === "0 - 1"}
          />
          0 - 1 Yr
        </label>
        <label>
          <input
            type="radio"
            value="2 - 3"
            onChange={handleChange}
            checked={selectedExp === "2 - 3"}
          />
          2 - 3 Yrs
        </label>
        <label>
          <input
            type="radio"
            value="4 - 6"
            onChange={handleChange}
            checked={selectedExp === "4 - 6"}
          />
          4 - 6 Yrs
        </label>

        <label>
          <input
            type="radio"
            value="7 - 10"
            onChange={handleChange}
            checked={selectedExp === "7 - 10"}
          />
          7 - 10 Yrs
        </label>
        <label>
          <input
            type="radio"
            value="10+"
            onChange={handleChange}
            checked={selectedExp === "10+"}
          />
          10+ Yrs
        </label>
        <p>{expMsg}</p>
        <Button disabled={selectedExp.length <= 0} onClick={handleRedirect}>
          {selectedExp.length <= 0
            ? "Please select at least one option"
            : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default experience;
