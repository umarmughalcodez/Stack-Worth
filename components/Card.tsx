"use client";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import githubUsername from "github-username";
import Ratings from "./Ratings";
import money1 from "@/public/money-with-wings.svg";
import { MdClose } from "react-icons/md";
import { useRouter } from "next/navigation";

interface CardProps {
  worthMsg: string;
  worth: number;
  tip: string;
  icon: StaticImageData;
}

const Card: React.FC<CardProps> = ({ worthMsg, worth, tip, icon }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [gitHubUsername, setGitHubUsername] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const fetchUser = async () => {
    const session = await getSession();
    setUser(session?.user as User);
    const fetchedUsername = await githubUsername(
      session?.user?.email as string
    );
    setGitHubUsername(fetchedUsername as string);
  };

  useEffect(() => {
    fetchUser();
    setTimeout(() => {
      setShowPopup(true);
    }, 4500);
  }, []);

  return (
    <div className="card w-[50%] h-auto rounded-xl border border-black flex flex-col items-center justify-center p-5">
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
        @{gitHubUsername}
        {/* {user?.name} */}
      </span>
      <p className="text-lg m-3 flex">
        Your Estimated Developer Worth is{" "}
        <span className="text-green-500 font-semibold ml-2 mr-1">
          ${worth.toLocaleString()}
        </span>{" "}
        {/* <Image src={money} alt="Money" width={20} height={20} /> */}
        <Image src={money1} alt="Money" width={20} height={20} />
      </p>

      <p className="text-lg mt-4 mb-4 flex">
        You are a {worthMsg}{" "}
        {icon && (
          <Image
            src={icon}
            alt="Icon"
            width={20}
            height={20}
            className="ml-2"
          />
        )}
      </p>
      <p className="text-lg mb-4 mt-2">
        <span className="text-green-500 font-semibold">Pro Tip:</span> {tip}
      </p>
      {showPopup && <Ratings />}
    </div>
  );
};

export default Card;
