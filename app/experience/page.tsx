"use client";
import Background from "@/components/animations/background";
import GroupSizeSelector from "@/components/animations/CustomCheckbox";
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
  const databases = searchParams
    .getAll("databases")
    .flatMap((database) => database.split(", "));
  const dev = searchParams.get("dev");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedExp(value);
  };

  const handleRedirect = () => {
    let language = languages.join(", ");
    let framework = frameworks.join(", ");
    let database = databases.join(", ");
    const url = `/dev-worth?l=${encodeURIComponent(
      language
    )}&f=${encodeURIComponent(framework)}&d=${encodeURIComponent(
      database
    )}&dev=${dev}&exp=${selectedExp}`;
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
      <div className="h-full w-full flex flex-col items-center justify-center z-10 relative mt-24">
        <p className="mt-10 mb-10 text-2xl font-semibold">
          Select your Years of Experience in this field
        </p>
        <div className="radio-input">
          <div className="glass">
            <div className="glass-inner"></div>
          </div>
          <div className="selector">
            <div className="choice">
              <div>
                <input
                  className="choice-circle"
                  type="radio"
                  value="0 - 1"
                  onChange={handleChange}
                  checked={selectedExp === "0 - 1"}
                  id="one"
                />
                <div className="ball"></div>
              </div>
              <label htmlFor="one" className="choice-name">
                0 - 1 Year
              </label>
            </div>
            <div className="choice">
              <div>
                <input
                  className="choice-circle"
                  type="radio"
                  value="2 - 3"
                  onChange={handleChange}
                  checked={selectedExp === "2 - 3"}
                  id="two"
                />
                <div className="ball"></div>
              </div>
              <label htmlFor="two" className="choice-name">
                2 - 3 Years
              </label>
            </div>
            <div className="choice">
              <div>
                <input
                  className="choice-circle"
                  type="radio"
                  value="4 - 6"
                  onChange={handleChange}
                  checked={selectedExp === "4 - 6"}
                  id="three"
                />
                <div className="ball"></div>
              </div>
              <label htmlFor="three" className="choice-name">
                4 - 6 Years
              </label>
            </div>
            <div className="choice">
              <div>
                <input
                  className="choice-circle"
                  type="radio"
                  value="7 - 10"
                  onChange={handleChange}
                  checked={selectedExp === "7 - 10"}
                  id="four"
                />
                <div className="ball"></div>
              </div>
              <label htmlFor="four" className="choice-name">
                7 - 10 Years
              </label>
            </div>
            <div className="choice">
              <div>
                <input
                  className="choice-circle"
                  type="radio"
                  value="10+"
                  onChange={handleChange}
                  checked={selectedExp === "10+"}
                  id="five"
                />
                <div className="ball"></div>
              </div>
              <label htmlFor="five" className="choice-name">
                10+ Years
              </label>
            </div>
          </div>
        </div>

        <p className="text-xl mt-10 mb-10">{expMsg}</p>
        <Button
          disabled={selectedExp.length <= 0}
          onClick={handleRedirect}
          effect={"shineHover"}
        >
          {selectedExp.length <= 0
            ? "Please select at least one option"
            : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default experience;
