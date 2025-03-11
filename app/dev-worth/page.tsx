"use client";

import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { User } from "@/types/User";
import { Loader } from "lucide-react";
import { getSession } from "next-auth/react";
import Image from "next/image";
import { redirect, useSearchParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";

const DevWorth = () => {
  const [showCard, setShowCard] = useState(false);
  const [worth, setWorth] = useState<number>(0);
  const searchParams = useSearchParams();
  const [languages, setLanguages] = useState<string[]>([]);
  const [frameworks, setFrameworks] = useState<string[]>([]);
  const [dev, setDev] = useState<string>("unknown");
  const [exp, setExp] = useState<string>("0 - 1");
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLanguages(searchParams.getAll("l").flatMap((lang) => lang.split(", ")));
    setFrameworks(
      searchParams.getAll("f").flatMap((framework) => framework.split(", "))
    );
    setDev(searchParams.get("dev") || "unknown");
    setExp(searchParams.get("exp") || "0 - 1");
  }, [searchParams]);

  const calculateWorth = () => {
    setLoading(true);
    setTimeout(() => {
      let totalWorth = 0;

      // Average salaries for programming languages (in USD)
      const languageSalaries: Record<string, number> = {
        HTML: 2000,
        CSS: 10000,
        Python: 124000,
        JS: 120000,
        Java: 120000,
        C: 125000,
        Ruby: 130000,
        PHP: 71000,
        "C#": 112000,
        Go: 115000,
        Rust: 112000,
        TS: 125000,
      };

      // Average salaries for frameworks (in USD)
      const frameworkSalaries: Record<string, number> = {
        "React.js": 120000,
        "Angular.js": 114000,
        "Vue.js": 110000,
        Django: 120000,
        Flask: 115000,
        "Spring Boot": 118000,
        "Ruby on Rails": 130000,
        Laravel: 105000,
        "ASP.NET": 112000,
        "Express.js": 115000,
        "Next.js": 125000,
        Svelte: 110000,
        none: 1000,
      };

      // Experience multipliers
      const experienceMultipliers: Record<string, number> = {
        "0 - 1": 0.8,
        "2 - 3": 1.0,
        "4 - 6": 1.2,
        "7 - 9": 1.4,
        "10+": 1.6,
      };

      // Development type multipliers
      const devTypeMultipliers: Record<string, number> = {
        "front-end": 1.0,
        "back-end": 1.1,
        "full-stack": 1.2,
      };

      // Calculate total worth based on languages
      languages.forEach((lang) => {
        if (languageSalaries[lang]) {
          totalWorth += languageSalaries[lang];
        }
      });

      // Calculate total worth based on frameworks
      frameworks.forEach((framework) => {
        if (frameworkSalaries[framework]) {
          totalWorth += frameworkSalaries[framework];
        }
      });

      // Apply experience multiplier
      const experienceMultiplier = experienceMultipliers[exp] || 1.0;
      totalWorth *= experienceMultiplier;

      // Apply development type multiplier
      const devTypeMultiplier = devTypeMultipliers[dev] || 1.0;
      totalWorth *= devTypeMultiplier;

      // Average the total worth based on the number of skills
      const totalSkills = languages.length + frameworks.length;
      if (totalSkills > 0) {
        totalWorth /= totalSkills;
      }

      setWorth(totalWorth);
      setShowCard(true);
      setLoading(false);
    }, 3000);
  };

  const handleEditFrameworks = () => {
    const language = languages.join(", ");
    const url = `/frameworks?languages=${encodeURIComponent(
      language
    )}&dev=${dev}`;
    redirect(url);
  };

  const handleEditExperience = () => {
    const language = languages.join(", ");
    const framework = frameworks.join(", ");
    const url = `/experience?languages=${encodeURIComponent(
      language
    )}&frameworks=${encodeURIComponent(framework)}&dev=${dev}`;
    redirect(url);
  };

  const fetchUser = async () => {
    const session = await getSession();
    setUser(session?.user as User);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  let worthMessage = "";
  // useEffect(() => {
  if (worth < 30000) {
    worthMessage = "Entry Level 💼";
  } else if (worth < 60000) {
    worthMessage = "Junior Developer 👨‍💻";
  } else if (worth < 130000) {
    worthMessage = "Mid-Level Developer 💻";
  } else if (worth < 180000) {
    worthMessage = "Senior Developer 🧑‍💼";
  } else {
    worthMessage = "Expert Developer 🚀";
  }
  // }, [worth]);

  return (
    <div>
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full w-full flex flex-col items-center z-10 relative mt-56">
          {showCard ? (
            <div
              className="w-[40%] h-[50%] rounded-xl z-20"
              style={{
                backgroundImage:
                  "url('https://res.cloudinary.com/xcorpion/image/upload/v1740344288/lukxsq8cvmn4wdbtuveg.gif')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: 4,
              }}
            >
              {user?.image && (
                <Image
                  src={user?.image as string}
                  alt="User's Image"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              )}
              {user?.name}
              <p>You are a {worthMessage}</p>
              <p>
                Your Estimated Developer Worth: ${worth.toLocaleString()} 💸
              </p>
            </div>
          ) : (
            <>
              <p>Preview of what you Selected</p>
              <div>
                <strong>Development Type:</strong> <span>{dev}</span>{" "}
                <span>
                  <MdEdit
                    onClick={() => redirect("/dev-type")}
                    className="hover:bg-slate-200 bg-opacity-15 rounded-full text-xl cursor-pointer transition-all delay-150 scale-110 w-4 h-4"
                  />
                </span>
              </div>
              <div>
                <strong>Languages:</strong>
                <ul>
                  {languages.map((lang) => (
                    <li key={lang}>{lang}</li>
                  ))}
                </ul>
                <span>
                  <MdEdit
                    onClick={() => redirect(`/${dev}`)}
                    className="hover:bg-slate-200 bg-opacity-15 rounded-full text-xl cursor-pointer transition-all delay-150 scale-110 w-4 h-4"
                  />
                </span>
              </div>
              <div>
                <strong>Frameworks:</strong>
                <ul>
                  {frameworks.map((framework) => (
                    <li key={framework}>{framework}</li>
                  ))}
                </ul>
                <span>
                  <MdEdit
                    onClick={handleEditFrameworks}
                    className="hover:bg-slate-200 bg-opacity-15 rounded-full text-xl cursor-pointer transition-all delay-150 scale-110 w-4 h-4"
                  />
                </span>
              </div>
              <div>
                <strong>Experience:</strong> <span>{exp} years</span>
                <span>
                  <MdEdit
                    onClick={handleEditExperience}
                    className="hover:bg-slate-200 bg-opacity-15 rounded-full text-xl cursor-pointer transition-all delay-150 scale-110 w-4 h-4"
                  />
                </span>
              </div>

              <Button onClick={calculateWorth}>
                Calculate Your Developer Worth
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default DevWorth;
