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
import Assistant from "@/components/Assistant";

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

  const calculateWorth = async () => {
    setLoading(true);

    const language = languages.map((l) => l.value).join(", ");
    const framework = frameworks.map((f) => f.value).join(", ");
    const database = databases.map((d) => d.value).join(", ");

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `Only return a number with no additional text. Predict the annual salary (in USD) for a ${dev} developer with ${exp} years of experience, skilled in ${language}, frameworks: ${framework}, and database: ${database}. Example response: 120000`,
        }),
      });
      const data = await res.json();
      const salaryPrediction =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Salary prediction not available";
      console.log(salaryPrediction);
      setWorth(salaryPrediction);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setWorth(0);
    } finally {
      setShowCard(true);
      setLoading(false);
    }
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
    redirect(`/${dev}`);
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
                  {databases.length === 0 ? (
                    <span className="text-xl">None</span>
                  ) : (
                    databases.map((database) => (
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
                    ))
                  )}
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
      <Assistant />
    </div>
  );
};

export default DevWorth;
