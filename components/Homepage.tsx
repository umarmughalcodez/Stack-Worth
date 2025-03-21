"use client";
import { Button } from "@/components/ui/button";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import Background from "./animations/background";
import LiveScrollCards from "./LiveScrollCards";
import Democard from "./DemoCard";
import Guide from "./Guide";
import Reason from "./Reason";
import Loader from "./Loader";
import Assistant from "./Assistant";

const Homepage = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      setUser(session?.user as User);
    };
    fetchUser();
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      <Background />
      {loading ? (
        <Loader />
      ) : (
        <div className="h-full w-full flex flex-col items-center z-10 relative text-2xl">
          <div className="grid place-items-center mt-24 mb-24 space-y-16">
            <div className="grid place-items-center space-y-8">
              <p className="font-semibold text-3xl text-center w-[85%]">
                Find Out Your Developer Worth!
              </p>
              <p className="w-[80%] leading-6 text-center text-lg">
                Select your Tech Stack, Skills & Experience to see how much you
                can earn as a developer
              </p>
            </div>
            <p className="font-semibold w-[90%] leading-9 text-center">
              <span className="text-white text-3xl bg-green-400 rounded-2xl px-3 py-1">
                5,000+
              </span>{" "}
              Developers have calculated their worth this month
            </p>
          </div>
          <div className="grid place-items-center">
            {user?.name ? (
              <Button
                effect={"expandIcon"}
                icon={ArrowRightIcon}
                iconPlacement="right"
                onClick={() => {
                  redirect("/dev-type");
                }}
              >
                Calculate Your Worth!
              </Button>
            ) : (
              <>
                <p className="text-lg font-normal text-center w-[95%]">
                  Please connect your GitHub account first!
                </p>
              </>
            )}
            <span className="text-3xl font-bold mt-28 w-[85%] text-center">
              What <span className="text-green-400">Developers</span> and{" "}
              <span className="text-green-400">People</span> Say About Us!
            </span>
            <LiveScrollCards />
            <Guide />
            <Democard />
            <Reason />
            <Assistant />
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
