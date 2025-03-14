"use client";
import { useRouter } from "next/navigation";
import Background from "@/components/animations/background";
import { Button } from "@/components/ui/button";
import { redirect, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
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
import rocket from "@/public/rocket (1).svg";
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
import CustomCheckbox from "@/components/animations/CustomCheckbox";
import { ArrowRightIcon } from "lucide-react";

const frontEndOptions = [
  { value: "reactjs", label: "React", icon: react, bg: "bg-blue-200" },
  {
    value: "reactNative",
    label: "React Native",
    icon: reactNative,
    bg: "bg-sky-200",
  },
  {
    value: "flutter",
    label: "Flutter",
    icon: flutter,
    bg: "bg-blue-200",
  },
  { value: "nextjs", label: "Next", icon: nextjs, bg: "bg-gray-200" },
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

  { value: "angular", label: "Angular", icon: angular1, bg: "bg-red-200" },
  { value: "vue", label: "Vue", icon: vue, bg: "bg-green-200" },
  { value: "svelte", label: "Svelte", icon: svelte1, bg: "bg-orange-200" },
  { value: "jquery", label: "JQuery", icon: jquery, bg: "bg-gray-200" },
];

const backEndOptions = [
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
  { value: "gin", label: "Gin", icon: gin, bg: "bg-yellow-200" },
  { value: "fiber", label: "Fiber", icon: fiber, bg: "bg-blue-200" },
  { value: "django", label: "Django", icon: django, bg: "bg-green-200" },
  { value: "sinatra", label: "Sinatra", icon: sinatra, bg: "bg-gray-200" },
  { value: "rocket", label: "Rocket", icon: rocket, bg: "bg-red-200" },
  { value: "quarkus", label: "Quarkus", icon: quarkus, bg: "bg-gray-200" },
  { value: "libuv", label: "Libuv", icon: libuv, bg: "bg-gray-200" },
  { value: "laravel", label: "Laravel", icon: laravel, bg: "bg-red-200" },
  { value: "unreal", label: "Unreal", icon: unreal, bg: "bg-slate-200" },
  { value: "unity", label: "Unity", icon: unity, bg: "bg-slate-200" },
  {
    value: "springboot",
    label: "Springboot",
    icon: springboot,
    bg: "bg-green-200",
  },
  {
    value: "rubyonrails",
    label: "Rubyonrails",
    icon: rubyonrails,
    bg: "bg-red-200",
  },
  { value: "qt", label: "QT", icon: qt, bg: "bg-slate-200" },
];

const Frameworks = () => {
  const searchParams = useSearchParams();
  const languages = searchParams
    .getAll("languages")
    .flatMap((lang) => lang.split(", "));
  const dev = searchParams.get("dev");

  const [selectedFrameworks, setselectedFrameworks] = useState<string[]>([]);

  const handleRedirect = () => {
    let language = languages.join(", ");
    let frameworks = selectedFrameworks.join(", ");

    if (selectedFrameworks.length <= 0) {
      frameworks = "none";
    }

    const url = `/databases?languages=${encodeURIComponent(
      language
    )}&frameworks=${encodeURIComponent(frameworks)}&dev=${dev}`;
    redirect(url);
  };

  return (
    <div>
      <Background />
      <div className="h-full w-full flex flex-col items-center justify-center z-10 relative mt-24">
        <p className="text-3xl font-semibold">Select Frameworks & Libraries</p>

        {dev === "full-stack" && (
          <div className="w-[90%] h-auto flex">
            <div className="w-[50%] flex flex-col items-center">
              <p className="text-xl font-semibold mt-10 mb-5">
                Select Front End Frameworks
              </p>
              <CustomCheckbox
                options={frontEndOptions.filter((option) =>
                  option.value === "bootstrap" || option.value === "tailwindcss"
                    ? languages.includes("css")
                    : languages.includes("js") || languages.includes("ts")
                )}
                selectedOptions={selectedFrameworks}
                onChange={setselectedFrameworks}
              />
            </div>

            <div className="w-[50%] flex flex-col items-center">
              <p className="text-xl font-semibold mt-10 mb-5">
                Select Back End Frameworks
              </p>

              <CustomCheckbox
                options={backEndOptions.filter(
                  (option) =>
                    (option.value === "express" &&
                      (languages.includes("js") ||
                        languages.includes("ts") ||
                        languages.includes("nodejs"))) ||
                    (option.value === "nestjs" &&
                      (languages.includes("js") || languages.includes("ts"))) ||
                    (option.value === "django" &&
                      languages.includes("python")) ||
                    (option.value === "flask" &&
                      languages.includes("python")) ||
                    (option.value === "laravel" && languages.includes("php")) ||
                    (option.value === "net" && languages.includes("c#")) ||
                    (option.value === "gin" && languages.includes("go")) ||
                    (option.value === "fiber" && languages.includes("go")) ||
                    (option.value === "sinatra" &&
                      languages.includes("ruby")) ||
                    (option.value === "rubyonrails" &&
                      languages.includes("ruby")) ||
                    (option.value === "quarkus" &&
                      languages.includes("java")) ||
                    (option.value === "springboot" &&
                      languages.includes("java")) ||
                    (option.value === "rocket" && languages.includes("rust")) ||
                    (option.value === "unity" && languages.includes("c")) ||
                    (option.value === "libuv" && languages.includes("c")) ||
                    (option.value === "qt" && languages.includes("c++")) ||
                    (option.value === "unreal" && languages.includes("c++"))
                )}
                selectedOptions={selectedFrameworks}
                onChange={setselectedFrameworks}
              />
            </div>
          </div>
        )}
        {dev === "front-end" && (
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold mt-10 mb-5">
              Select Front End Frameworks
            </p>
            <CustomCheckbox
              options={frontEndOptions.filter((option) =>
                option.value === "bootstrap" || option.value === "tailwindcss"
                  ? languages.includes("css")
                  : languages.includes("js") || languages.includes("ts")
              )}
              selectedOptions={selectedFrameworks}
              onChange={setselectedFrameworks}
            />
          </div>
        )}
        {dev === "back-end" && (
          <div>
            <p className="text-xl font-semibold mt-10 mb-5">
              Select Back End Frameworks
            </p>

            <CustomCheckbox
              options={backEndOptions.filter(
                (option) =>
                  (option.value === "express" &&
                    (languages.includes("js") ||
                      languages.includes("ts") ||
                      languages.includes("nodejs"))) ||
                  (option.value === "nestjs" &&
                    (languages.includes("js") || languages.includes("ts"))) ||
                  (option.value === "django" && languages.includes("python")) ||
                  (option.value === "flask" && languages.includes("python")) ||
                  (option.value === "laravel" && languages.includes("php")) ||
                  (option.value === "net" && languages.includes("c#")) ||
                  (option.value === "gin" && languages.includes("go")) ||
                  (option.value === "fiber" && languages.includes("go")) ||
                  (option.value === "sinatra" && languages.includes("ruby")) ||
                  (option.value === "rubyonrails" &&
                    languages.includes("ruby")) ||
                  (option.value === "quarkus" && languages.includes("java")) ||
                  (option.value === "springboot" &&
                    languages.includes("java")) ||
                  (option.value === "rocket" && languages.includes("rust")) ||
                  (option.value === "unity" && languages.includes("c")) ||
                  (option.value === "libuv" && languages.includes("c")) ||
                  (option.value === "qt" && languages.includes("c++")) ||
                  (option.value === "unreal" && languages.includes("c++"))
              )}
              selectedOptions={selectedFrameworks}
              onChange={setselectedFrameworks}
            />
          </div>
        )}

        <Button
          onClick={handleRedirect}
          effect={"expandIcon"}
          icon={ArrowRightIcon}
          iconPlacement="right"
          className="mt-10 mb-12"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Frameworks;
