"use client";
import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import beginner from "@/public/smiling-face-with-halo (1).svg";
import intermediate from "@/public/smiling-face-with-sunglasses.svg";
import advanced from "@/public/nerd-face.svg";
import expert from "@/public/cold-face.svg";
import master from "@/public/skull.svg";
import { ArrowRightIcon } from "lucide-react";
import Loader from "@/components/Loader";
import Assistant from "@/components/Assistant";

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedExp(value);
  };

  const [languages, setLanguages] = useState<string[]>([]);
  const [frameworks, setFrameworks] = useState<string[]>([]);
  const [dev, setDev] = useState<string | null>("");
  const [databases, setDatabases] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);

      setLanguages(params.get("languages")?.split(", ") || []);
      setFrameworks(params.get("frameworks")?.split(", ") || []);
      setDatabases(params.get("databases")?.split(", ") || []);
      setDev(params.get("dev") || null);
    }
  }, []);

  const handleRedirect = () => {
    const language = languages.join(", ");
    const framework = frameworks.join(", ");
    const database = databases.join(", ");
    const url = `/dev-worth?l=${encodeURIComponent(
      language
    )}&f=${encodeURIComponent(framework)}&d=${encodeURIComponent(
      database
    )}&dev=${dev}&exp=${selectedExp}`;
    redirect(url);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center z-10 relative mt-24">
          <p className="mt-10 mb-10 text-2xl font-semibold text-center w-[85%]">
            Select your Years of Experience in this field
          </p>
          <div className="ml-10">
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
          </div>

          <div className="m-6 text-xl">
            <p>
              {selectedExp === "0 - 1" && (
                <span className="flex">
                  Beginner{" "}
                  <Image
                    src={beginner}
                    alt="Emoji"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </span>
              )}
            </p>
            <p>
              {selectedExp === "2 - 3" && (
                <span className="flex">
                  Intermediate{" "}
                  <Image
                    src={intermediate}
                    alt="Emoji"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </span>
              )}
            </p>
            <p>
              {selectedExp === "4 - 6" && (
                <span className="flex">
                  Advanced{" "}
                  <Image
                    src={advanced}
                    alt="Emoji"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </span>
              )}
            </p>
            <p>
              {selectedExp === "7 - 10" && (
                <span className="flex">
                  Expert{" "}
                  <Image
                    src={expert}
                    alt="Emoji"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </span>
              )}
            </p>
            <p>
              {selectedExp === "10+" && (
                <span className="flex">
                  Master{" "}
                  <Image
                    src={master}
                    alt="Emoji"
                    width={20}
                    height={20}
                    className="ml-2"
                  />
                </span>
              )}
            </p>
          </div>
          <Button
            disabled={selectedExp.length <= 0}
            onClick={handleRedirect}
            effect={"expandIcon"}
            icon={ArrowRightIcon}
            iconPlacement="right"
            className="mt-5"
          >
            {selectedExp.length <= 0
              ? "Please select at least one option"
              : "Next"}
          </Button>
        </div>
      )}
      <Assistant />
    </div>
  );
};

export default Experience;
