"use client";
import Background from "@/components/animations/background";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import mysql1 from "@/public/mysql-original-wordmark.svg";
import postgres from "@/public/postgresql-plain-wordmark.svg";
import sqlite from "@/public/sqlite.svg";
import mongodb from "@/public/mongodb-original-wordmark.svg";
import sqlServer from "@/public/icons8-microsoft-sql-server.svg";
import oracle from "@/public/oracle-original.svg";
import redis from "@/public/redis-original-wordmark.svg";
import mariadb from "@/public/mariadb (1).svg";
import firebase from "@/public/file-type-firebase.svg";
import aws from "@/public/aws.svg";
import CustomCheckbox from "@/components/CustomCheckbox";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Loader from "@/components/Loader";
import Assistant from "@/components/Assistant";

const options = [
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
    value: "oracle",
    label: "Oracle",
    icon: oracle,
    bg: "bg-orange-200",
    size: "60",
  },
  {
    value: "aws",
    label: "AWS (Amazon Web Services)",
    icon: aws,
    bg: "bg-orange-200",
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
];

const Databases = () => {
  const [selectedDatabases, setSelectedDatabases] = useState<string[]>([]);

  const [loading, setLoading] = useState(true);

  const [languages, setLanguages] = useState<string[]>([]);
  const [frameworks, setFrameworks] = useState<string[]>([]);
  const [dev, setDev] = useState<string | null>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);

      setLanguages(params.get("languages")?.split(", ") || []);
      setFrameworks(params.get("frameworks")?.split(", ") || []);
      setDev(params.get("dev") || null);
    }
  }, []);

  const handleRedirect = () => {
    const language = languages.join(", ");
    const framework = frameworks.join(", ");
    const databases = selectedDatabases.join(", ");
    const url = `/experience?languages=${encodeURIComponent(
      language
    )}&frameworks=${encodeURIComponent(
      framework
    )}&databases=${encodeURIComponent(databases)}&dev=${dev}`;

    redirect(url);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full w-[90%] flex flex-col items-center justify-center z-10 relative mt-24">
          <Assistant />

          <p className="mt-4 font-semibold text-2xl mb-10">
            Select Your Databases
          </p>
          <CustomCheckbox
            options={options}
            selectedOptions={selectedDatabases}
            onChange={setSelectedDatabases}
          />
          <Button
            disabled={selectedDatabases.length <= 0}
            className="mt-10 mb-12"
            effect={"expandIcon"}
            icon={ArrowRightIcon}
            iconPlacement="right"
            onClick={handleRedirect}
          >
            {selectedDatabases.length <= 0
              ? "Please select at least one database"
              : "Next"}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Databases;
