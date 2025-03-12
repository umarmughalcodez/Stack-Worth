"use client";
import { User } from "@/types/User";
import { getSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CardProps {
  worthMsg: string;
  worth: number;
  tip: string;
}

const Card: React.FC<CardProps> = ({ worthMsg, worth, tip }) => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    const session = await getSession();
    setUser(session?.user as User);
    console.log(session?.user);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="card w-[40%] h-auto rounded-xl border border-black flex flex-col items-center justify-center p-5">
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
        <span className="text-green-500 mr-1 font-semibold">
          Congratulations!
        </span>
        {user?.name}
      </span>
      <p className="text-lg m-3">
        Your Estimated Developer Worth is{" "}
        <span className="text-green-500 font-semibold">
          ${worth.toLocaleString()}
        </span>{" "}
        💸
      </p>

      <p className="text-lg m-3">You are a {worthMsg}</p>
      <p className="text-lg">
        <span className="text-green-500 font-semibold">Tip:</span> {tip}
      </p>
    </div>
  );
};

export default Card;
