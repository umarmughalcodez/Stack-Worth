"use client";
import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import Loader from "@/components/Loader";
import Image, { StaticImageData } from "next/image";
import { redirect } from "next/navigation";
import React, { useState, useEffect, useMemo } from "react";
import html from "@/public/icons8-html-5.svg";
import css from "@/public/icons8-css-logo.svg";
import js from "@/public/icons8-javascript.svg";
import ts from "@/public/icons8-typescript.svg";
import python from "@/public/icons8-python.svg";
import c from "@/public/c-original.svg";
import cplus from "@/public/c++.svg";
import csharp from "@/public/csharp.svg";
import nodejs from "@/public/icons8-nodejs.svg";
import php from "@/public/php-plain.svg";
import java from "@/public/icons8-java-logo.svg";
import ruby from "@/public/icons8-ruby-programming-language.svg";
import go from "@/public/icons8-go-logo.svg";
import rust from "@/public/rust.svg";
import mysql1 from "@/public/mysql-original-wordmark.svg";
import postgres from "@/public/postgresql-plain-wordmark.svg";
import sqlite from "@/public/sqlite.svg";
import mongodb from "@/public/mongodb-original-wordmark.svg";
import sqlServer from "@/public/icons8-microsoft-sql-server.svg";
import oracle from "@/public/oracle-original.svg";
import redis from "@/public/redis-original-wordmark.svg";
import mariadb from "@/public/mariadb (1).svg";
import firebase from "@/public/file-type-firebase.svg";
import react from "@/public/icons8-react-native.svg";
import nestjs from "@/public/icons8-nestjs.svg";
import qt from "@/public/icons8-qt (1).svg";
import reactNative from "@/public/icons8-react-native (1).svg";
import rubyonrails from "@/public/ruby on rails.png";
import springboot from "@/public/icons8-spring-boot.svg";
import tailwind from "@/public/icons8-tailwind-css.svg";
import unity from "@/public/icons8-unity.svg";
import unreal from "@/public/icons8-unreal-engine (1).svg";
import laravel from "@/public/laravel.svg";
import libuv from "@/public/libuv.svg";
import quarkus from "@/public/quarkus.svg";
import rocket from "@/public/rocket.png";
import sinatra from "@/public/sinatra.svg";
import nextjs from "@/public/icons8-next.js.svg";
import svelte1 from "@/public/svelte-icon.svg";
import vue from "@/public/icons8-vue-js.svg";
import angular1 from "@/public/icons8-angular (1).svg";
import jquery from "@/public/icons8-jquery.svg";
import django from "@/public/django-original.svg";
import fiber from "@/public/fiber.svg";
import gin from "@/public/gin.png";
import net from "@/public/icons8-.net-framework.svg";
import bootstrap from "@/public/icons8-bootstrap.svg";
import express from "@/public/icons8-express-js.svg";
import flask from "@/public/icons8-flask.svg";
import flutter from "@/public/flutter.svg";
import aws from "@/public/aws.svg";
import editStatic from "@/public/static_edit.svg";
import Card from "@/components/Card";
import suitcase from "@/public/icons8-orange-suitcase-with-stickers-94.png";
import programming from "@/public/programming.png";
import programmer from "@/public/app-development.png";
import developer from "@/public/icons8-developer-94.png";

interface OptionProps {
  value: string;
  label: string;
  icon?: StaticImageData;
  bg: string;
  size?: string;
}

const DevWorth = () => {
  const [showCard, setShowCard] = useState(false);
  const [worth, setWorth] = useState<number>(0);
  const [languages, setLanguages] = useState<OptionProps[]>([]);
  const [frameworks, setFrameworks] = useState<OptionProps[]>([]);
  const [databases, setDatabases] = useState<OptionProps[]>([]);
  const [dev, setDev] = useState<string>("unknown");
  const [exp, setExp] = useState<string>("0 - 1");
  const [loading, setLoading] = useState(true);

  const languageOptions: OptionProps[] = useMemo(
    () => [
      { value: "html", label: "HTML", icon: html, bg: "bg-red-200" },
      { value: "css", label: "CSS", icon: css, bg: "bg-blue-200" },
      { value: "js", label: "JavaScript", icon: js, bg: "bg-yellow-200" },
      { value: "ts", label: "TypeScript", icon: ts, bg: "bg-blue-200" },
      { value: "python", label: "Python", icon: python, bg: "bg-yellow-200" },
      { value: "c", label: "C", icon: c, bg: "bg-blue-200" },
      { value: "c++", label: "C++", icon: cplus, bg: "bg-blue-300" },
      { value: "c#", label: "C#", icon: csharp, bg: "bg-purple-300" },
      {
        value: "nodejs",
        label: "Nodejs",
        icon: nodejs,
        bg: "bg-green-300",
        size: "65",
      },
      { value: "php", label: "PHP", icon: php, bg: "bg-purple-300" },
      {
        value: "java",
        label: "Java",
        icon: java,
        bg: "bg-blue-200",
        size: "65",
      },
      { value: "ruby", label: "Ruby", icon: ruby, bg: "bg-red-200" },
      { value: "go", label: "Go", icon: go, bg: "bg-blue-300" },
      { value: "rust", label: "Rust", icon: rust, bg: "bg-red-200" },
    ],
    []
  );

  const frameworkOptions: OptionProps[] = useMemo(
    () => [
      { value: "reactjs", label: "React", icon: react, bg: "bg-blue-200" },
      { value: "nextjs", label: "Next", icon: nextjs, bg: "bg-gray-200" },
      {
        value: "reactNative",
        label: "React Native",
        icon: reactNative,
        bg: "bg-sky-200",
      },
      { value: "angular", label: "Angular", icon: angular1, bg: "bg-red-200" },
      {
        value: "bootstrap",
        label: "Bootstrap",
        icon: bootstrap,
        bg: "bg-purple-300",
      },
      {
        value: "tailwindcss",
        label: "Tailwind CSS",
        icon: tailwind,
        bg: "bg-blue-200",
      },
      { value: "unity", label: "Unity", icon: unity, bg: "bg-slate-200" },
      { value: "quarkus", label: "Quarkus", icon: quarkus, bg: "bg-gray-200" },

      { value: "libuv", label: "Libuv", icon: libuv, bg: "bg-gray-200" },

      { value: "unreal", label: "Unreal", icon: unreal, bg: "bg-slate-200" },
      { value: "sinatra", label: "Sinatra", icon: sinatra, bg: "bg-gray-200" },
      {
        value: "rubyonrails",
        label: "Rubyonrails",
        icon: rubyonrails,
        bg: "bg-red-200",
      },
      { value: "qt", label: "QT", icon: qt, bg: "bg-slate-200" },
      { value: "gin", label: "Gin", icon: gin, bg: "bg-yellow-200" },
      { value: "fiber", label: "Fiber", icon: fiber, bg: "bg-blue-200" },
      { value: "flutter", label: "Flutter", icon: flutter, bg: "bg-blue-200" },
      { value: "vue", label: "Vue", icon: vue, bg: "bg-green-200" },
      { value: "svelte", label: "Svelte", icon: svelte1, bg: "bg-orange-200" },
      { value: "jquery", label: "JQuery", icon: jquery, bg: "bg-gray-200" },
      {
        value: "flask",
        label: "Flask",
        icon: flask,
        bg: "bg-slate-200",
        size: "65",
      },
      { value: "nestjs", label: "Nest", icon: nestjs, bg: "bg-pink-200" },
      { value: "express", label: "Express", icon: express, bg: "bg-green-200" },
      { value: "net", label: ".Net", icon: net, bg: "bg-blue-200" },
      { value: "django", label: "Django", icon: django, bg: "bg-green-200" },
      { value: "laravel", label: "Laravel", icon: laravel, bg: "bg-red-200" },
      {
        value: "springboot",
        label: "Springboot",
        icon: springboot,
        bg: "bg-green-200",
      },
    ],
    []
  );

  const databaseOptions: OptionProps[] = useMemo(
    () => [
      {
        value: "mysql",
        label: "MySQL",
        icon: mysql1,
        bg: "bg-orange-200",
        size: "60",
      },
      {
        value: "postgresql",
        label: "PostgreSQL",
        icon: postgres,
        bg: "bg-blue-200",
      },
      {
        value: "sqlite",
        label: "SQLite",
        icon: sqlite,
        bg: "bg-blue-200",
        size: "65",
      },
      { value: "mongodb", label: "MongoDB", icon: mongodb, bg: "bg-green-200" },
      {
        value: "microsoftsql",
        label: "Microsoft SQL Server",
        icon: sqlServer,
        bg: "bg-slate-200",
      },
      {
        value: "aws",
        label: "AWS (Amazon Web Services)",
        icon: aws,
        bg: "bg-orange-200",
      },
      {
        value: "oracle",
        label: "Oracle",
        icon: oracle,
        bg: "bg-orange-200",
        size: "60",
      },
      { value: "redis", label: "Redis", icon: redis, bg: "bg-red-200" },
      {
        value: "mariadb",
        label: "MariaDB",
        icon: mariadb,
        bg: "bg-amber-200",
        size: "85",
      },
      {
        value: "firebase",
        label: "Firebase Realtime Database",
        icon: firebase,
        bg: "bg-yellow-200",
      },
    ],
    []
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);

      const selectedLanguages = params.get("l")?.split(", ") || [];
      const selectedFrameworks = params.get("f")?.split(", ") || [];
      const selectedDatabases = params.get("d")?.split(", ") || [];

      setLanguages(
        languageOptions.filter((option) =>
          selectedLanguages.includes(option.value)
        )
      );
      setFrameworks(
        frameworkOptions.filter((option) =>
          selectedFrameworks.includes(option.value)
        )
      );
      setDatabases(
        databaseOptions.filter((option) =>
          selectedDatabases.includes(option.value)
        )
      );
      setDev(params.get("dev") || "unknown");
      setExp(params.get("exp") || "0 - 1");
    }
  }, [languageOptions, databaseOptions, frameworkOptions]);

  const calculateWorth = () => {
    setLoading(true);
    setTimeout(() => {
      let totalWorth = 0;

      // Average salaries for programming languages (in USD)
      const languageSalaries: Record<string, number> = {
        html: 60000,
        css: 65000,
        python: 112382, // :contentReference[oaicite:0]{index=0}
        js: 120000,
        java: 120000,
        c: 125000,
        ruby: 130000,
        php: 71000,
        "c#": 112000,
        "c++": 128849, // :contentReference[oaicite:1]{index=1}
        go: 115000,
        rust: 130000,
        ts: 131956, // :contentReference[oaicite:2]{index=2}
        nodejs: 130000,
      };

      // Average salaries for frameworks (in USD)
      const frameworkSalaries: Record<string, number> = {
        reactjs: 120000,
        angular: 114000,
        vue: 110000,
        django: 120000,
        flask: 115000,
        springboot: 118000,
        rubyonrails: 130000,
        laravel: 105000,
        net: 112000,
        express: 115000,
        nextjs: 125000,
        svelte: 110000,
        qt: 100000,
        unity: 130000,
        unreal: 112000,
        libuv: 110000,
        quarkus: 90000,
        rocket: 100000,
        sinatra: 105000,
        gin: 120000,
        fiber: 125000,
        bootstrap: 100000,
        tailwindcss: 110000,
        reactNative: 150000,
        none: 1000,
      };

      // Average salaries for databases (in USD)
      const databaseSalaries: Record<string, number> = {
        mysql: 120000,
        postgresql: 125000,
        sqlite: 100000,
        mongodb: 120000,
        microsoftsql: 90000,
        oracle: 100000,
        redis: 100000,
        mariadb: 85000,
        firebase: 130000,
        aws: 145000,
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
        if (languageSalaries[lang.value]) {
          totalWorth += languageSalaries[lang.value];
        }
      });

      // Calculate total worth based on frameworks
      frameworks.forEach((framework) => {
        if (frameworkSalaries[framework.value]) {
          totalWorth += frameworkSalaries[framework.value];
        }
      });

      // Calculate total worth based on databases
      databases.forEach((database) => {
        if (databaseSalaries[database.value]) {
          totalWorth += databaseSalaries[database.value];
        }
      });

      // Apply experience multiplier
      const experienceMultiplier = experienceMultipliers[exp] || 1.0;
      totalWorth *= experienceMultiplier;

      // Apply development type multiplier
      const devTypeMultiplier = devTypeMultipliers[dev] || 1.0;
      totalWorth *= devTypeMultiplier;

      // Average the total worth based on the number of skills
      const totalSkills =
        languages.length + frameworks.length + databases.length;
      if (totalSkills > 0) {
        totalWorth /= totalSkills;
      }

      setWorth(totalWorth);
      setShowCard(true);
      setLoading(false);
    }, 3000);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const handleEditFrameworks = () => {
    const language = languages.map((lang) => lang.value).join(", ");
    const url = `/frameworks?languages=${encodeURIComponent(
      language
    )}&dev=${dev}`;
    redirect(url);
  };

  const handleEditLanguages = () => {
    redirect(`/languages?dev=${dev}`);
  };

  const handleEditDatabases = () => {
    const language = languages.map((lang) => lang.value).join(", ");
    const framework = frameworks.map((framework) => framework.value).join(", ");
    const url = `/databases?languages=${encodeURIComponent(
      language
    )}&frameworks=${encodeURIComponent(framework)}&dev=${dev}`;
    redirect(url);
  };

  const handleEditExperience = () => {
    const language = languages.map((lang) => lang.value).join(", ");
    const framework = frameworks.map((framework) => framework.value).join(", ");
    const database = databases.map((database) => database.value).join(", ");
    const url = `/experience?languages=${encodeURIComponent(
      language
    )}&frameworks=${encodeURIComponent(
      framework
    )}&database=${database}&dev=${dev}`;
    redirect(url);
  };

  let worthMessage = "";
  let tip = "";
  let icon = null;
  if (worth < 30000) {
    worthMessage = "Entry Level Developer";
    tip = "Focus on building a strong foundation in coding";
    icon = suitcase;
  } else if (worth < 60000) {
    worthMessage = "Junior Developer";
    tip = "Start contributing to open-source projects";
    icon = developer;
  } else if (worth < 130000) {
    worthMessage = "Mid-Level Developer";
    tip = "Consider getting certified in a specialized area";
    icon = programming;
  } else if (worth < 180000) {
    worthMessage = "Senior Developer";
    tip = "Mentor junior developers and share your knowledge";
    icon = programmer;
  } else {
    worthMessage = "Expert Developer";
    tip = "Stay updated with the latest industry trends and technologies";
    icon = rocket;
  }

  return (
    <div className="h-full w-full flex items-center justify-center text-[#222]">
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full w-[90%] z-10 flex flex-col items-center justify-center relative mt-20 text-center">
          {showCard ? (
            <div>
              <Card
                worthMsg={worthMessage}
                worth={worth}
                tip={tip}
                icon={icon}
              />
              <Button
                effect={"ringHover"}
                className="mt-5 mb-8"
                onClick={() =>
                  window.open(
                    "https://github.com/umarmughalcodez/Stack-Worth",
                    "_blank"
                  )
                }
              >
                Drop a <FaStar className="text-yellow-400 text-2xl" />
              </Button>
            </div>
          ) : (
            <>
              <p className="text-3xl font-semibold mb-5">
                Preview of what you Selected
              </p>
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-bold mb-5">Development Type</p>
                <span className="text-xl flex items-center justify-center">
                  {dev === "front-end" && "Front End Developer"}
                  {dev === "back-end" && "Back End Developer"}
                  {dev === "full-stack" && "Full Stack Developer"}
                  <button className="edit-button ml-2">
                    <Image
                      src={editStatic}
                      alt="Edit"
                      width={20}
                      height={20}
                      onClick={() => redirect("/dev-type")}
                      className="cursor-pointer"
                    />
                  </button>
                </span>
              </div>
              <div className="mt-5 text-2xl mb-3">
                <p className="font-bold mb-5">Experience</p>
                <span className="text-xl flex items-center justify-center">
                  {exp} years
                  <button className="edit-button ml-2">
                    <Image
                      src={editStatic}
                      alt="Edit"
                      width={20}
                      height={20}
                      onClick={handleEditExperience}
                      className="cursor-pointer"
                    />
                  </button>
                </span>
              </div>

              <div className="text-2xl mt-5 mb-10">
                <span className="text-2xl flex items-center justify-center font-bold">
                  Languages
                  <button className="edit-button ml-2">
                    <Image
                      src={editStatic}
                      alt="Edit"
                      width={20}
                      height={20}
                      onClick={handleEditLanguages}
                      className="cursor-pointer"
                    />
                  </button>
                </span>

                <div className="gap-10 flex flex-wrap items-center justify-center mt-10 mb-10">
                  {languages.map((lang) => (
                    <label
                      key={lang.value}
                      className={`flex flex-col text-center items-center justify-center gap-1 h-40 border rounded-lg transition-all delay-150 w-44 border-none ${lang.bg} backdrop-blur-sm bg-opacity-60 shadow-[#444] shadow-lg`}
                    >
                      {lang.icon && (
                        <Image
                          src={lang.icon}
                          alt={lang.label}
                          width={lang.size ? parseInt(lang.size) : 50}
                          height={50}
                        />
                      )}
                      <span className="text-sm mt-3 ">{lang.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div className="text-2xl">
                <span className="flex justify-center items-center font-bold">
                  Frameworks
                  <button className="edit-button ml-2">
                    <Image
                      src={editStatic}
                      alt="Edit"
                      width={20}
                      height={20}
                      onClick={handleEditFrameworks}
                      className="cursor-pointer"
                    />
                  </button>
                </span>
                <div className="gap-10 flex flex-wrap items-center justify-center mt-10 mb-10">
                  {frameworks.length === 0 ? (
                    <span className="text-xl">None</span>
                  ) : (
                    frameworks.map((framework) => (
                      <label
                        key={framework.value}
                        className={`flex flex-col text-center items-center justify-center gap-1 h-40 border rounded-lg transition-all delay-150 w-44 border-none ${framework.bg} backdrop-blur-sm bg-opacity-60 shadow-[#444] shadow-lg`}
                      >
                        {framework.icon && (
                          <Image
                            src={framework.icon}
                            alt={framework.label}
                            width={
                              framework.size ? parseInt(framework.size) : 50
                            }
                            height={50}
                          />
                        )}
                        <span className="text-sm mt-3 ">{framework.label}</span>
                      </label>
                    ))
                  )}
                </div>
              </div>
              <div className="text-2xl">
                <span className="flex justify-center items-center font-bold">
                  Databases
                  <button className="edit-button ml-2">
                    <Image
                      src={editStatic}
                      alt="Edit"
                      width={20}
                      height={20}
                      className="cursor-pointer"
                      onClick={handleEditDatabases}
                    />
                  </button>
                </span>
                <div className="gap-10 flex flex-wrap items-center justify-center mt-10 mb-10">
                  {databases.map((database) => (
                    <label
                      key={database.value}
                      className={`flex flex-col text-center items-center justify-center gap-1 h-40 border rounded-lg cursor-pointer transition-all delay-150 w-44 border-none ${database.bg} backdrop-blur-sm bg-opacity-60 shadow-[#444] shadow-lg`}
                    >
                      {database.icon && (
                        <Image
                          src={database.icon}
                          alt={database.label}
                          width={database.size ? parseInt(database.size) : 50}
                          height={50}
                        />
                      )}
                      <span className="text-sm mt-3 ">{database.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button
                onClick={calculateWorth}
                className="mb-12 mt-3"
                effect={"shineHover"}
              >
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
