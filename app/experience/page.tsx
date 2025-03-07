"use client";
import { Button } from "@/components/ui/button";
import { redirect, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const experience = () => {
  const [selectedExp, setSelectedExp] = useState<string>("");
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
    const url = `/dev-worth?l=${language}&f=${framework}&dev=${dev}&exp=${selectedExp}`;
    redirect(url);
  };

  return (
    <div>
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
      <Button disabled={selectedExp.length <= 0} onClick={handleRedirect}>
        {selectedExp.length <= 0 ? "Please select at least one option" : "Next"}
      </Button>
    </div>
  );
};

export default experience;
