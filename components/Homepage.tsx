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
        <p className="mt-56 mb-24 font-semibold text-3xl text-[#222]">
          "Find Out Your Stack Worth"
        </p>
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
          <span>Example</span>
          {/* <div className="card w-[40%] h-auto rounded-xl border border-black flex flex-col items-center justify-center p-5">
                    {user?.image && (
                      <Image
                        src={user?.image as string}
                        alt="User's Image"
                        width={120}
                        height={120}
                        className="rounded-full"
                      />
                    )}
                    <span className="mt-5 mb-3 text-lg">
                      <span className="text-green-500 mr-2 font-semibold">
                        Congratulations!
                      </span>
                      @maxwell
                      {/* {user?.name} */}
          {/* </span>
                    <p className="text-lg m-3">
                      Your Estimated Developer Worth is{" "}
                      <span className="text-green-500 font-semibold">
                        $246,578.998
                      </span>{" "}
                      💸
                    </p>
              
                    <p className="text-lg m-3">You are a {worthMsg}</p>
                    <p className="text-lg mb-4">
                      <span className="text-green-500 font-semibold">Pro Tip:</span> {tip}
                    </p>
                  </div> */}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
