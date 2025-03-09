"use client";

import { Button } from "@/components/ui/button";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

import { ArrowRightIcon } from "lucide-react";
import Background from "./animations/background";

const Homepage = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const session = await getSession();
      setUser(session?.user as User);
    };
    fetchUser();
  }, []);

  return (
    <div>
      <Background />
      <div className="h-full w-full flex flex-col items-center z-10 relative text-2xl">
        <p className="mt-56 mb-24 font-bold">"Find Out Your Stack Worth"</p>
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
              Let's Check!
            </Button>
          ) : (
            <>
              <p className="text-lg">
                Please connect your GitHub account first!
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
